// ============================================================
// Regon Teknoloji — Site Genel Konfigürasyonu
// İletişim bilgileri, doğrulanabilir operasyonel metrikler.
// Uydurma müşteri, ciro veya sahte sayaç verisi içermez.
// ============================================================

export const siteConfig = {
  company: {
    name: 'Regon Teknoloji',
    legalName: 'Regon Teknoloji A.Ş.',
    formerName: 'Mergen Teknoloji',
    tagline: 'Restoran, kurye ve bayi operasyon yazılımları.',
    manifesto:
      'Biz masa başından değil, sahadan yazılım üretiyoruz. Restoran kasasından kurye selesine, mutfak fişinden ana bayi deposuna kadar bizzat sahada kuruyor, test ediyor ve çalıştırıyoruz.',
  },

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@regon.com.tr',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+90 (216) 000 00 00',
    address:
      process.env.NEXT_PUBLIC_CONTACT_ADDRESS ||
      'Kadıköy / İstanbul, Türkiye',
    supportEmail:
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'destek@regon.com.tr',
  },

  // Sadece somut, teknik ve doğrulanabilir metrikler
  // Müşteri veya ciro sayısı uydurulmaz!
  verifiableStats: [
    {
      value: 4,
      suffix: '',
      label: 'Bağımsız Yazılım Çözümü',
      description: 'POS, Kurye, Bayi ve Pazar Yeri tek operasyonel mimaride',
    },
    {
      value: 3,
      suffix: ' Ayrı Panel',
      label: 'Kurye Yönetim Mimarisi',
      description: 'Restoran paneli, kurye mobil ekranı ve filo admin konsolu',
    },
    {
      value: 2,
      suffix: ' Mobil Platform',
      label: 'Hibrit Mobil Dağıtım',
      description: 'Capacitor ile iOS ve Android yerel cihaz entegrasyonu',
    },
    {
      value: 100,
      prefix: '%',
      suffix: '',
      label: 'Yerinde Saha Kurulumu',
      description: 'Donanım ve yazılım işletmede bizzat kurularak canlıya alınır',
    },
  ],
} as const
