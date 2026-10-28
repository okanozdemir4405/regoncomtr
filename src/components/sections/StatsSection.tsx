import { Container } from '@/components/ui/Container'
import { CountUp, Reveal } from '@/components/animations/MotionComponents'
import { siteConfig } from '@/content/siteConfig'

interface StatItem {
  value: number
  label: string
  description: string
  prefix?: string
  suffix?: string
}

export function StatsSection() {
  const stats: readonly StatItem[] = siteConfig.verifiableStats

  // Veri boşsa bölüm render edilmez
  if (!stats || stats.length === 0) {
    return null
  }

  return (
    <section className="py-16 sm:py-20 border-b border-[#1A1612]/20 bg-surface-paper">
      <Container>
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-ink font-bold mb-1">
            {'// 04 · DOĞRULANABİLİR RAKAMLAR'}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-text-primary">
            Şişirilmiş pazarlama verisi değil, somut sistem kapasitesi.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <Reveal key={item.label} delay={0.1 * idx}>
              <div className="border border-[#1A1612] bg-[#FAF8F3] p-6 space-y-2 h-full flex flex-col justify-between shadow-[2px_2px_0px_#1A1612]">
                <div className="space-y-1">
                  <div className="font-display text-4xl sm:text-5xl font-black text-text-primary">
                    <CountUp
                      end={item.value}
                      prefix={item.prefix ?? ''}
                      suffix={item.suffix ?? ''}
                    />
                  </div>
                  <h3 className="font-mono text-xs font-bold text-accent-ink uppercase">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed pt-2 border-t border-dashed border-[#1A1612]/20">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
