// ==============================================================================
// REGON TEKNOLOJİ — PORTAL SESSION & TOKEN YÖNETİMİ (Web Crypto API)
// Edge Runtime ve Node.js ile %100 uyumludur, harici bağımlılık gerektirmez.
// ==============================================================================

export const PORTAL_COOKIE_NAME = 'rgn_portal_session'

export interface PortalSessionPayload {
  tenantId: string
  tenantName: string
  projectId: string
  projectName: string
  projectSlug: string
  contactName?: string | null
  loginAt: number
  exp: number
}

// Session imzalama anahtarı (Varsayılan fallback dev amaçlıdır, prod için env kullanılır)
const SESSION_SECRET =
  process.env.PORTAL_SESSION_SECRET ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  'regon-portal-secure-fallback-secret-key-32-chars-minimum-2026'

/**
 * Aktivasyon kodunu temizler, büyük harfe çevirir ve SHA-256 hex özetini çıkarır.
 * Kod asla açık metin saklanmaz.
 */
export async function hashActivationCode(code: string): Promise<string> {
  const cleanCode = code.trim().toUpperCase().replace(/[^A-Z0-9-]/g, '')
  const encoder = new TextEncoder()
  const data = encoder.encode(cleanCode)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Web Crypto HMAC-SHA256 CryptoKey nesnesini oluşturur.
 */
async function getCryptoKey(): Promise<CryptoKey> {
  const encoder = new TextEncoder()
  const keyData = encoder.encode(SESSION_SECRET)
  return await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

function base64UrlEncode(str: string): string {
  const bytes = new TextEncoder().encode(str)
  let binary = ''
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/')
  while (base64.length % 4) {
    base64 += '='
  }
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return new TextDecoder().decode(bytes)
}

/**
 * Portal oturum çerezi için imzalı JWT benzeri güvenli token üretir.
 */
export async function createPortalSessionToken(
  payload: Omit<PortalSessionPayload, 'loginAt' | 'exp'>,
  expiresInSeconds: number = 7 * 24 * 60 * 60 // 7 Gün
): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const fullPayload: PortalSessionPayload = {
    ...payload,
    loginAt: now,
    exp: now + expiresInSeconds,
  }

  const header = { alg: 'HS256', typ: 'JWT' }
  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(fullPayload))
  const dataToSign = `${encodedHeader}.${encodedPayload}`

  const key = await getCryptoKey()
  const encoder = new TextEncoder()
  const signatureBuffer = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(dataToSign)
  )

  const signatureArray = Array.from(new Uint8Array(signatureBuffer))
  let signatureBinary = ''
  for (let i = 0; i < signatureArray.length; i++) {
    signatureBinary += String.fromCharCode(signatureArray[i])
  }
  const encodedSignature = btoa(signatureBinary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  return `${dataToSign}.${encodedSignature}`
}

/**
 * Verilen token'ın HMAC imzasını ve son kullanma tarihini doğrular.
 */
export async function verifyPortalSessionToken(
  token: string | undefined | null
): Promise<PortalSessionPayload | null> {
  if (!token) return null

  const parts = token.split('.')
  if (parts.length !== 3) return null

  const [encodedHeader, encodedPayload, encodedSignature] = parts
  const dataToSign = `${encodedHeader}.${encodedPayload}`

  try {
    const key = await getCryptoKey()
    const encoder = new TextEncoder()

    // İmzayı çöz
    let base64 = encodedSignature.replace(/-/g, '+').replace(/_/g, '/')
    while (base64.length % 4) {
      base64 += '='
    }
    const signatureBinary = atob(base64)
    const signatureBytes = new Uint8Array(signatureBinary.length)
    for (let i = 0; i < signatureBinary.length; i++) {
      signatureBytes[i] = signatureBinary.charCodeAt(i)
    }

    const isValid = await crypto.subtle.verify(
      'HMAC',
      key,
      signatureBytes,
      encoder.encode(dataToSign)
    )

    if (!isValid) return null

    const payloadJson = base64UrlDecode(encodedPayload)
    const payload = JSON.parse(payloadJson) as PortalSessionPayload

    const now = Math.floor(Date.now() / 1000)
    if (payload.exp && payload.exp < now) {
      return null // Süresi dolmuş oturum
    }

    return payload
  } catch {
    return null
  }
}
