import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

/**
 * Tarayıcı tarafı Supabase istemcisi.
 * Client Components ve browser-side kodda kullanılır.
 * Aşama 3'te portal auth ve tenant işlemleri buradan yapılacak.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Singleton: her modül import'unda yeni istemci oluşturulmasın
let clientInstance: ReturnType<typeof createClient<Database>> | null = null

export function getSupabaseBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase ortam değişkenleri eksik. .env.local dosyasını kontrol edin.',
    )
  }

  if (!clientInstance) {
    clientInstance = createClient<Database>(supabaseUrl, supabaseAnonKey)
  }

  return clientInstance
}
