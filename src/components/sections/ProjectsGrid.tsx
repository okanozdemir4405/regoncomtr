import Link from 'next/link'
import { getProjectBySlug } from '@/content/projects'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'
import {
  MockPosScreen,
  MockCourierMap,
  MockBayiPortal,
  MockMarketPhone,
} from '@/components/ui/MockUI'

export function ProjectsGrid() {
  const kurye = getProjectBySlug('regon-kurye')
  const pos = getProjectBySlug('regon-pos')
  const bayi = getProjectBySlug('regon-bayi')
  const market = getProjectBySlug('regon-market')

  return (
    <section id="urunler" className="py-16 sm:py-24 border-b border-[#1A1612]/20">
      <Container>
        {/* Bölüm Başlığı — Editoryal ve sola yaslı */}
        <div className="mb-16 border-b border-[#1A1612] pb-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
                {'// SİPARİŞİN YOLCULUĞU & ÜRÜN KATALOĞU'}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary">
                Adisyondan kapıya: Dört bağımsız yazılım.
              </h2>
            </div>
            <p className="font-mono text-xs text-text-secondary max-w-xs">
              Scroll bir siparişin (#0042) yolculuğudur. Her ürün bu operasyon zincirinin bir halkasını çözer.
            </p>
          </div>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {/* ============================================================
              01. REGON POS — Düzen: Sol Metin, Sağ Arayüz Maketi
              ============================================================ */}
          {pos && (
            <article className="border border-[#1A1612] bg-surface-paper p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                {/* Sol Metin */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-accent">
                      ADIM 01 // GİRİŞ
                    </span>
                    <Badge variant={pos.status} />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-text-primary">
                    {pos.name}
                  </h3>

                  <p className="font-mono text-xs text-text-secondary border-l-2 border-[#1A1612] pl-3 py-1">
                    {pos.tagline}
                  </p>

                  <p className="text-sm leading-relaxed text-text-secondary">
                    {pos.descriptionShort}
                  </p>

                  {/* Teknik Özellikler */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {pos.features.map((f) => (
                      <span
                        key={f.label}
                        className="border border-[#1A1612]/30 bg-surface-1 px-2.5 py-1 font-mono text-[11px] text-text-primary"
                      >
                        {f.label}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3">
                    <Link
                      href={`/projeler/${pos.slug}`}
                      className="inline-flex items-center gap-2 border border-[#1A1612] bg-[#FAF8F3] px-4 py-2 font-mono text-xs uppercase font-bold text-text-primary hover:bg-[#1A1612] hover:text-[#FAF8F3] transition-colors"
                    >
                      <span>Teknik Detaylar & Akış</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Sağ Maket: Caller ID & Adisyon Konsolu */}
                <div className="lg:col-span-7">
                  <MockPosScreen />
                </div>
              </div>
            </article>
          )}

          {/* ============================================================
              02. REGON KURYE (Vitrinin Yıldızı) — Geniş Konsol Düzeni
              ============================================================ */}
          {kurye && (
            <article className="border-2 border-[#1A1612] bg-surface-paper p-6 sm:p-8 lg:p-12 relative">
              {/* Yıldız Etiketi */}
              <div className="absolute -top-3.5 left-6 bg-accent px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                ★ VİTRİNİN YILDIZI // ANA DAĞITIM MOTORU
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-dashed border-[#1A1612]/30 pb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs font-bold text-accent">
                        ADIM 02 // DAĞITIM
                      </span>
                      <Badge variant={kurye.status} />
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl font-black text-text-primary">
                      {kurye.name}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-text-secondary max-w-md">
                    {kurye.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-text-secondary max-w-3xl">
                  {kurye.descriptionShort} Next.js ve Supabase altyapısıyla 3 ayrı panel (restoran, kurye, admin) ve Capacitor ile paketlenmiş iOS/Android mobil uygulaması.
                </p>

                {/* Vitrin Görseli: Gerçekçi Operasyon ve Harita Konsolu */}
                <div className="pt-2">
                  <MockCourierMap />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1A1612]/20">
                  <div className="flex flex-wrap gap-2">
                    {kurye.features.slice(0, 4).map((f) => (
                      <span
                        key={f.label}
                        className="border border-[#1A1612]/30 bg-surface-1 px-2.5 py-1 font-mono text-[11px] text-text-primary"
                      >
                        {f.label}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projeler/${kurye.slug}`}
                    className="inline-flex items-center gap-2 border border-[#1A1612] bg-[#1A1612] px-5 py-2.5 font-mono text-xs uppercase font-bold text-[#FAF8F3] hover:bg-accent hover:border-accent transition-colors"
                  >
                    <span>Regon Kurye Mimarisi & Paneller</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* ============================================================
              03. REGON BAYİ — Düzen: Sol Arayüz Maketi, Sağ Metin (Ters Asimetri)
              ============================================================ */}
          {bayi && (
            <article className="border border-[#1A1612] bg-surface-paper p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                {/* Sol Maket: Bayi Mal Talep Konsolu */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <MockBayiPortal />
                </div>

                {/* Sağ Metin */}
                <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-accent">
                      ADIM 03 // TEDARİK
                    </span>
                    <Badge variant={bayi.status} />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-text-primary">
                    {bayi.name}
                  </h3>

                  <p className="font-mono text-xs text-text-secondary border-l-2 border-[#1A1612] pl-3 py-1">
                    {bayi.tagline}
                  </p>

                  <p className="text-sm leading-relaxed text-text-secondary">
                    {bayi.descriptionShort}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {bayi.features.map((f) => (
                      <span
                        key={f.label}
                        className="border border-[#1A1612]/30 bg-surface-1 px-2.5 py-1 font-mono text-[11px] text-text-primary"
                      >
                        {f.label}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3">
                    <Link
                      href={`/projeler/${bayi.slug}`}
                      className="inline-flex items-center gap-2 border border-[#1A1612] bg-[#FAF8F3] px-4 py-2 font-mono text-xs uppercase font-bold text-text-primary hover:bg-[#1A1612] hover:text-[#FAF8F3] transition-colors"
                    >
                      <span>Bayi Ağı Yapısını Gör</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* ============================================================
              04. REGON MARKET — Düzen: Sol Metin, Sağ Telefon Maketi
              ============================================================ */}
          {market && (
            <article className="border border-[#1A1612] bg-surface-paper p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                {/* Sol Metin */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-accent">
                      ADIM 04 // MAHALLE PAZARI
                    </span>
                    <Badge variant={market.status} />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-text-primary">
                    {market.name}
                  </h3>

                  <p className="font-mono text-xs text-text-secondary border-l-2 border-[#1A1612] pl-3 py-1">
                    {market.tagline}
                  </p>

                  <p className="text-sm leading-relaxed text-text-secondary">
                    {market.descriptionShort} Girişimci ilçeyi alır, yerel restoran ve esnafı sisteme dahil eder, her siparişten önceden belirlenen komisyon tahsil edilir.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {market.features.map((f) => (
                      <span
                        key={f.label}
                        className="border border-[#1A1612]/30 bg-surface-1 px-2.5 py-1 font-mono text-[11px] text-text-primary"
                      >
                        {f.label}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3">
                    <Link
                      href={`/projeler/${market.slug}`}
                      className="inline-flex items-center gap-2 border border-[#1A1612] bg-[#FAF8F3] px-4 py-2 font-mono text-xs uppercase font-bold text-text-primary hover:bg-[#1A1612] hover:text-[#FAF8F3] transition-colors"
                    >
                      <span>Franchise Modelini İncele</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Sağ Kolon: Mobil Telefon Mockup */}
                <div className="lg:col-span-5 flex justify-center">
                  <MockMarketPhone />
                </div>
              </div>
            </article>
          )}
        </div>
      </Container>
    </section>
  )
}
