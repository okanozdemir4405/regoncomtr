import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/animations/MotionComponents'

export function PortalCtaSection() {
  return (
    <section className="py-16 sm:py-24 border-b border-[#1A1612]/20 bg-surface-1">
      <Container>
        <div className="border-2 border-[#1A1612] bg-surface-paper p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Çizgisel su damgası */}
          <div className="absolute right-4 -bottom-6 font-display text-8xl font-black text-[#1A1612]/5 select-none pointer-events-none">
            PORTAL
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 border border-[#1A1612] bg-[#FAF8F3] px-2.5 py-1 font-mono text-[11px] text-accent-ink font-bold">
                <span className="size-2 rounded-full bg-accent" />
                <span>{'// 05 · MÜŞTERİ GERİ BİLDİRİM & TAKİP PORTALI'}</span>
              </div>

              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary">
                  Regon müşterisi misiniz?
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
                  İşletmenize özel verilen aktivasyon kodunuzla sisteme giriş yapın. Yeni özellik isteği gönderin, sahada karşılaştığınız hata bildirimlerini iletin ve çözüm sürecini canlı takip edin.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono text-xs">
              <Reveal delay={0.2}>
                <Link
                  href="/portal"
                  className="flex h-12 w-full items-center justify-between border border-[#1A1612] bg-[#1A1612] px-6 uppercase font-bold text-[#FAF8F3] hover:bg-accent hover:border-accent hover:text-[#100F0D] transition-colors shadow-[2px_2px_0px_#1A1612]"
                >
                  <span>Aktivasyon Koduyla Gir</span>
                  <span>→</span>
                </Link>
              </Reveal>
              <span className="text-[11px] text-text-muted font-mono text-center sm:text-left lg:text-center">
                * Aktivasyon kodunuz yoksa bölge temsilcinizle iletişime geçin.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
