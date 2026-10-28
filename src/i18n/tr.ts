// ============================================================
// Türkçe metin katmanı — somut, ürüne özgü metinler
// Jenerik pazarlama dili yok.
// ============================================================

const tr = {
  meta: {
    siteName: 'Regon Teknoloji',
    siteDescription:
      'Regon Teknoloji (eski adıyla Mergen Teknoloji) — Türkiye\'deki restoranlar, kurye filolarını yöneten işletmeler ve bayi ağları için sipariş, kurye ve dağıtım yazılımları.',
    defaultTitle: 'Regon Teknoloji | Sipariş, Kurye ve Dağıtım Yazılımları',
  },
  nav: {
    home: 'Ana Sayfa',
    projects: 'Ürünler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    portal: 'Müşteri Girişi',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
  },
  hero: {
    eyebrow: 'Restoran · Kurye · Bayi · Pazar Yeri',
    headline: 'Telefon\nçalıyor.\nFiş\nbasılıyor.\nKurye\nyolda.',
    sub: "Regon; Türkiye'deki restoranlar, kurye filolarını yöneten işletmeler ve bayi ağları için sipariş, kurye ve dağıtım yazılımları üretir.",
    cta: 'Ürünleri incele',
    ctaPortal: 'Müşteri girişi',
  },
  projects: {
    sectionLabel: 'Ürünler',
    sectionHeadline: 'Ürünler',
    statusLive: 'Canlı',
    statusDev: 'Geliştirmede',
    detailsCta: 'Detayları gör',
  },
  footer: {
    formerName: 'eski adıyla Mergen Teknoloji',
    rights: 'Tüm hakları saklıdır.',
    tagline: 'Restoran, kurye ve bayi yazılımları.',
  },
  a11y: {
    skipToMain: 'Ana içeriğe geç',
  },
} as const

export default tr
export type Translations = typeof tr
