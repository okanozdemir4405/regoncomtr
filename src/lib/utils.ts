import { type ClassValue, clsx } from 'clsx'

/** Tailwind sınıflarını birleştiren yardımcı */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/** Proje durumuna göre etiket metni döner */
export function statusLabel(status: 'live' | 'development' | 'deprecated'): string {
  const map = {
    live: 'Canlı',
    development: 'Geliştirmede',
    deprecated: 'Kullanım Dışı',
  }
  return map[status]
}
