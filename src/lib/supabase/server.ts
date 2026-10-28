import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

/**
 * Sunucu tarafı Supabase istemcisi.
 * Server Components, Route Handlers ve Server Actions'da kullanılır.
 * Service Role Key ile RLS bypass gerektiğinde bu istemci kullanılır.
 *
 * NOT: Bu dosya asla Client Component'e import edilmez.
 * Aşama 3'te @supabase/ssr paketi ile cookie tabanlı auth eklenecek.
 */
export function getSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
      'Supabase sunucu ortam değişkenleri eksik. .env.local dosyasını kontrol edin.',
    )
  }

  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
