import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/content/siteConfig'
import tr from '@/i18n/tr'

const currentYear = new Date().getFullYear()

const productLinks = [
  { href: '#pos', label: 'Regon POS' },
  { href: '#kurye', label: 'Regon Kurye' },
  { href: '#bayi', label: 'Regon Bayi' },
  { href: '#market', label: 'Regon Market' },
]

const legalLinks = [
  { href: '#gizlilik', label: 'Gizlilik Politikası (KVKK)' },
  { href: '#kullanim', label: 'Kullanım Koşulları' },
  { href: '#cerez', label: 'Çerez Tercihleri' },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-[#1A1612]/20 bg-surface-1 py-14 text-text-primary">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          {/* Sol Kolon: Firma Bilgisi */}
          <div className="space-y-3 md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-black tracking-tight">
                REGON TEKNOLOJİ
              </span>
              <span className="font-mono text-[10px] text-text-muted">
                v2026.2
              </span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-text-secondary">
              {tr.footer.tagline} {tr.footer.formerName}. Restoran kasasından kurye motosikletine, bayi deposundan müşteri kapısına kadar kesintisiz operasyonel veri akışı.
            </p>
            <p className="font-mono text-[11px] text-text-muted">
              İletişim: {siteConfig.contact.email} · {siteConfig.contact.address}
            </p>
          </div>

          {/* Orta Kolon: Ürün Linkleri */}
          <div className="md:col-span-3">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-text-secondary font-bold">
              {'// ÜRÜNLER'}
            </p>
            <ul className="space-y-2 font-mono text-xs" role="list">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-text-primary hover:text-accent-ink hover:underline"
                  >
                    <span className="text-[10px] text-accent-ink">→</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ Kolon: Yasal / Durum / Portal */}
          <div className="space-y-4 font-mono text-xs md:col-span-4">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-wider text-text-secondary font-bold">
                {'// SİSTEM DURUMU'}
              </p>
              <div className="inline-flex items-center gap-2 border border-[#1A1612]/20 bg-surface-paper px-3 py-1.5">
                <span className="size-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[11px] font-semibold text-text-primary">
                  TÜM SİSTEMLER ÇEVRİMİÇİ
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-dashed border-[#1A1612]/20">
              <p className="mb-1.5 text-[10px] uppercase text-text-muted">Yasal Bildirimler (Yer Tutucu):</p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-text-secondary">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-text-primary hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="pt-2 text-[11px] text-text-muted">
              © {currentYear} {siteConfig.company.name}. {tr.footer.rights}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
