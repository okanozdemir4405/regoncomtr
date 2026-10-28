import { Container } from '@/components/ui/Container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Müşteri Girişi',
  description: 'Regon Teknoloji müşteri portalı — aktivasyon koduyla giriş yapın.',
  robots: { index: false, follow: false },
}

/**
 * Müşteri Portal Sayfası — Aşama 3'te tam implementasyon yapılacak.
 * Şimdilik: yer tutucu sayfa.
 */
export default function PortalPage() {
  return (
    <Container className="flex min-h-[60dvh] flex-col items-center justify-center py-16 text-center">
      <div className="rounded-2xl border border-white/8 bg-surface-1 p-10 sm:p-14">
        <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl bg-accent/15">
          <svg
            className="size-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 18.75 8.25Z"
            />
          </svg>
        </div>

        <h1 className="mb-3 text-2xl font-bold text-text-primary">Müşteri Girişi</h1>
        <p className="mb-6 text-sm text-text-secondary">
          Müşteri portalı yakında aktif olacak. Aktivasyon kodunuzla sisteme giriş yapabileceksiniz.
        </p>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-400">
          <span className="size-1.5 rounded-full bg-amber-400" aria-hidden="true" />
          Geliştirmede — Aşama 3
        </span>
      </div>
    </Container>
  )
}
