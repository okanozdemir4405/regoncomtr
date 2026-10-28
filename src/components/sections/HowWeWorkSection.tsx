import { Container } from '@/components/ui/Container'
import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { Reveal, LineDraw } from '@/components/animations/MotionComponents'

const steps = [
  {
    no: '01',
    title: 'Saha Keşfi ve Doğrudan Görüşme',
    desc: 'Restoranınızı, deponuzu veya kurye alanınızı yerinde ziyaret ederiz. Sipariş yoğunluğunuzu, masa sayınızı ve kurye rotalarınızı dinleyerek sahadaki ritminizi anlarız.',
  },
  {
    no: '02',
    title: 'Yerinde Donanım ve Yazılım Kurulumu',
    desc: 'Dokunmatik POS terminalini, 80mm mutfak yazıcısını ve kurye telefonlarına mobil uygulamaları bizzat kendimiz kurar, ağ bağlantılarını test ederiz.',
  },
  {
    no: '03',
    title: 'Sahada Test ve Personel Eğitimi',
    desc: 'İlk siparişleri kasada birlikte açar, mutfakta ilk fişin düşüşünü görür, kurye ile birlikte test sürüşü yaparak teslimatın kapıda kapanışını onaylarız.',
  },
  {
    no: '04',
    title: 'Canlı Operasyon ve Birebir Mühendis Desteği',
    desc: 'Sistem canlıya geçer. Bir sorun veya özel talep olduğunda çağrı merkezi beklemeden doğrudan kurulumu yapan mühendisle iletişime geçersiniz.',
  },
]

export function HowWeWorkSection() {
  return (
    <section id="nasil-calisiyoruz" className="py-20 sm:py-28 border-b border-[#1A1612]/20 bg-surface-1">
      <Container>
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-ink">
              {'// 03 · NASIL ÇALIŞIYORUZ'}
            </span>
            <span className="font-mono text-[10px] text-text-muted">
              [ KURULUM & SAHA SÜRECİ ]
            </span>
          </div>
          <LineDraw direction="horizontal" className="mt-3" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Sol Kolon: 4 Somut Adım */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-primary">
                Kutuyu kargolayıp çekilmiyoruz; bizzat tezgaha gelip sistemi kuruyoruz.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                Restoran ve kurye operasyonunda aksayan bir saniye bile ciro ve müşteri kaybıdır. Bu yüzden uzaktan PDF gönderip çekilmek yerine, kurulumu sahada sizinle birlikte tamamlıyoruz.
              </p>
            </Reveal>

            <div className="relative border-l border-dashed border-[#1A1612]/40 pl-6 sm:pl-8 space-y-8 pt-4">
              {steps.map((step, idx) => (
                <Reveal key={step.no} delay={0.1 * idx}>
                  <div className="relative">
                    {/* Adım Noktası */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 size-3.5 border border-[#1A1612] bg-accent" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-accent-ink">
                          ADIM {step.no}
                        </span>
                        <h3 className="font-display text-lg font-bold text-text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sağ Kolon: Saha Kurulum Fotoğrafı (Slot 23) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <PhotoSlot
                no={23}
                caption="// Slot 23: Regon ekibinin restoran tezgahında POS ve kurye kurulum anı"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
