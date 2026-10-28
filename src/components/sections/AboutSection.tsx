import { Container } from '@/components/ui/Container'
import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { Reveal, LineDraw } from '@/components/animations/MotionComponents'
import { siteConfig } from '@/content/siteConfig'

export function AboutSection() {
  return (
    <section id="biz-kimiz" className="relative border-b border-[#1A1612]/20 py-20 sm:py-28 bg-surface-1">
      <Container>
        {/* Bölüm Üst Etiketi */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-ink">
              {'// 01 · BİZ KİMİZ'}
            </span>
            <span className="font-mono text-[10px] text-text-muted">
              [ {siteConfig.company.formerName} ]
            </span>
          </div>
          <LineDraw direction="horizontal" className="mt-3" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Sol Kolon: Manifesto, Akademik Altyapı ve Yapay Zeka ile Geliştirme */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-text-primary">
                Matematiksel modelleme, yapay zeka destekli mühendislik ve sahadaki tecrübe.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                Regon Teknoloji (eski adıyla <strong className="text-text-primary font-semibold">Mergen Teknoloji</strong>); Türkiye&apos;deki restoranların, paket servis kuryelerinin ve bayi ağlarının operasyonel darboğazlarını çözmek için kurulmuş yeni nesil bir Ar-Ge ve yazılım evidir.
              </p>
            </Reveal>

            {/* Akademik ve Niş Bölüm Vurgusu */}
            <Reveal delay={0.15}>
              <div className="border border-[#1A1612]/25 bg-surface-paper p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent-ink" />
                  <p className="font-mono text-xs uppercase font-bold text-accent-ink tracking-wide">
                    AKADEMİK KÖKEN & MATEMATİKSEL AR-GE
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-text-primary">
                  Kurucu ekibimiz; <strong className="font-semibold text-text-primary">Yapay Zeka ve Veri Mühendisliği</strong> ile <strong className="font-semibold text-text-primary">Matematik ve Bilgisayar Bilimleri</strong> alanlarında uzmanlaşmıştır. Sahadaki karmaşık rota optimizasyonu, sipariş kuyrukları ve filo mutabakatlarını ezbere şablonlarla değil, güçlü matematiksel algoritmalarla çözüyoruz.
                </p>
              </div>
            </Reveal>

            {/* Yapay Zeka Destekli Geliştirme & Fiyat Avantajı (Vibecoding ifadesi kesinlikle yok) */}
            <Reveal delay={0.2}>
              <div className="border-l-2 border-accent-ink bg-surface-paper p-5 space-y-2">
                <p className="font-mono text-xs uppercase font-bold text-accent-ink">
                  YAPAY ZEKA DESTEKLİ GELİŞTİRME & FİYAT/PERFORMANS GARANTİSİ:
                </p>
                <p className="text-sm leading-relaxed text-text-primary font-medium">
                  Eski usul, aylar süren hantal yazılım döngüleri yerine yapay zeka destekli modern mühendislik metodolojileri kullanıyoruz. Mimari tasarım, kodlama ve test hızımızı katlayarak elde ettiğimiz bu yüksek operasyonel verimliliği, işletmelere Türkiye pazarındaki en uygun fiyat/performans garantisi olarak yansıtıyoruz.
                </p>
              </div>
            </Reveal>

            {/* Saha Prensibi */}
            <Reveal delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-text-secondary pt-1">
                <div className="border border-[#1A1612]/20 bg-surface-paper p-3.5 space-y-1">
                  <span className="text-accent-ink font-bold block">01. KENDİ MİMARİMİZ</span>
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    Aracı üçüncü parti şablon yok; Next.js ve Supabase üzerinde sıfırdan geliştirilen tescilli altyapı.
                  </p>
                </div>
                <div className="border border-[#1A1612]/20 bg-surface-paper p-3.5 space-y-1">
                  <span className="text-accent-ink font-bold block">02. YERİNDE SAHA TESTİ</span>
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    Yazılımlarımızı masa başında bırakmıyor; tezgahta fiş basarak ve kuryeyle motora binerek sahada test ediyoruz.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sağ Kolon: Fotoğraf Alanı (Slot 01) */}
          <div className="lg:col-span-5 sticky top-24">
            <Reveal delay={0.2}>
              <PhotoSlot
                no={1}
                caption="// Slot 01: Sahada restoran kasası ve termal yazıcı çalışma anı"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
