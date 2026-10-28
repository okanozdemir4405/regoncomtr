import { Container } from '@/components/ui/Container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yönetici Paneli',
  description: 'Regon Teknoloji yönetici paneli.',
  robots: { index: false, follow: false },
}

/**
 * Admin Paneli — Aşama 4'te Supabase Auth ile korunacak.
 * Şimdilik: yer tutucu sayfa.
 */
export default function AdminPage() {
  return (
    <Container className="flex min-h-[60dvh] flex-col items-center justify-center py-16 text-center">
      <div className="rounded-2xl border border-white/8 bg-surface-1 p-10 sm:p-14">
        <h1 className="mb-3 text-2xl font-bold text-text-primary">Yönetici Paneli</h1>
        <p className="mb-6 text-sm text-text-secondary">
          Bu alan yalnızca Regon yöneticileri içindir. Aşama 4&apos;te Supabase Auth ile korunacak.
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-400">
          <span className="size-1.5 rounded-full bg-amber-400" aria-hidden="true" />
          Geliştirmede — Aşama 4
        </span>
      </div>
    </Container>
  )
}
