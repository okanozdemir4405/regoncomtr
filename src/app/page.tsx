import { Container } from '@/components/ui/Container'
import { MockThermalReceipt } from '@/components/ui/MockUI'
import { SplitLines, Reveal } from '@/components/animations/MotionComponents'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { PortalCtaSection } from '@/components/sections/PortalCtaSection'
import { ContactSection } from '@/components/sections/ContactSection'
import tr from '@/i18n/tr'

/**
 * Regon Teknoloji — Ana Sayfa (Aşama 2)
 * "Fiş ve Operasyon Masası" Görsel Dili + Turkuaz Vurgu Sistemi
 * Lenis + GSAP ScrollTrigger + PhotoSlot Altyapısı
 */
export default function HomePage() {
  return (
    <>
      {/* ============================================================
          1. HERO BÖLÜMÜ
          Sola yaslı devasa başlık (SplitLines animasyonlu),
          satır satır basılan termal fiş maketi, operasyonel konsol
          ============================================================ */}
      <section className="relative border-b border-[#1A1612]/20 py-12 sm:py-16 lg:py-24 bg-background overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Sol Taraf: Dev Başlık ve Somut Açıklama (Sola Yaslı) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Sistem Etiketi */}
              <div className="inline-flex items-center gap-2 border border-[#1A1612]/30 bg-surface-paper px-2.5 py-1 font-mono text-[11px] text-text-secondary">
                <span className="size-2 rounded-full bg-accent" />
                <span className="font-bold text-accent-ink">{'// OPERASYON ALTYAPISI'}</span>
                <span className="text-text-muted">· RESTORAN · KURYE · BAYİ</span>
              </div>

              {/* Ana Başlık — SplitLines ile satır satır açılan giriş animasyonu */}
              <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
                <SplitLines
                  lines={['Telefon çalıyor.', 'Fiş basılıyor.', 'Kurye yolda.']}
                  lineClassName="text-text-primary"
                />
              </h1>

              {/* Somut Açıklama — Jenerik pazarlama cümlesi yok */}
              <Reveal delay={0.2}>
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-text-secondary">
                  {tr.hero.sub}
                </p>
              </Reveal>

              {/* Operasyon Masası Adımları (Teknik Konsol Bilgisi) */}
              <Reveal delay={0.3}>
                <div className="border-t border-dashed border-[#1A1612]/30 pt-4 font-mono text-xs text-text-secondary">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="border border-[#1A1612]/20 bg-surface-paper p-2.5">
                      <span className="text-accent-ink font-bold">01.</span> Arayan tanınır (Caller ID)
                    </div>
                    <div className="border border-[#1A1612]/20 bg-surface-paper p-2.5">
                      <span className="text-accent-ink font-bold">02.</span> Termal fiş basılır
                    </div>
                    <div className="border border-[#1A1612]/20 bg-surface-paper p-2.5">
                      <span className="text-accent-ink font-bold">03.</span> Haritada canlı kurye
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* CTA Butonları */}
              <Reveal delay={0.4}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#urunler"
                    className="inline-flex h-11 items-center justify-center border border-[#1A1612] bg-[#1A1612] px-6 font-mono text-xs uppercase font-bold tracking-wider text-[#FAF8F3] hover:bg-accent hover:border-accent hover:text-[#100F0D] transition-colors shadow-[2px_2px_0px_#1A1612]"
                  >
                    Ürünleri İncele ↓
                  </a>
                  <a
                    href="/portal"
                    className="inline-flex h-11 items-center justify-center border border-[#1A1612] bg-[#FAF8F3] px-6 font-mono text-xs uppercase font-bold tracking-wider text-text-primary hover:bg-surface-2 transition-colors"
                  >
                    Müşteri Girişi →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Sağ Taraf: Termal Fiş Maketi (Hafif Eğik, Basılarak Beliren) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[340px] transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
                <MockThermalReceipt />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SİSTEM DURUM BANTI (Operasyon Masası Ticker)
          ============================================================ */}
      <section className="border-b border-[#1A1612]/20 bg-surface-1 py-3 font-mono text-[11px] text-text-secondary">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-block size-2 rounded-full bg-accent animate-pulse" />
              <span className="font-bold text-text-primary">SİPARİŞ AKIŞI: AKTİF</span>
              <span className="hidden sm:inline text-text-muted">{'//'}</span>
              <span className="hidden sm:inline">ÖRNEK VAKA: MODA ŞUBESİ #0042</span>
            </div>
            <div className="flex items-center gap-4 text-[10px]">
              <span>CALLER ID: BAĞLI</span>
              <span>TERMAL 80MM: HAZIR</span>
              <span className="text-accent-ink font-bold">REALTIME: AKTİF</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          2. BİZ KİMİZ BÖLÜMÜ
          ============================================================ */}
      <AboutSection />

      {/* ============================================================
          3. ÜRÜNLER BÖLÜMÜ (Regon POS, Kurye, Bayi, Market)
          ============================================================ */}
      <ProductsSection />

      {/* ============================================================
          4. NASIL ÇALIŞIYORUZ BÖLÜMÜ
          ============================================================ */}
      <HowWeWorkSection />

      {/* ============================================================
          5. DOĞRULANABİLİR RAKAMLAR BÖLÜMÜ
          ============================================================ */}
      <StatsSection />

      {/* ============================================================
          6. MÜŞTERİ PORTALI ÇAĞRISI
          ============================================================ */}
      <PortalCtaSection />

      {/* ============================================================
          7. İLETİŞİM & DESTEK MASASI
          ============================================================ */}
      <ContactSection />
    </>
  )
}
