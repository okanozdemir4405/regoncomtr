# Regon Teknoloji — regon.com.tr

Regon Teknoloji (eski adıyla Mergen Teknoloji) kurumsal web sitesi ve müşteri geri bildirim portalı.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Supabase

---

## Kurulum

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Ortam değişkenlerini oluştur
cp .env.example .env.local
# .env.local dosyasını düzenle (Supabase bilgilerini gir)

# 3. Geliştirme sunucusunu başlat
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde açılır.

---

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu (Turbopack) |
| `npm run build` | Prodüksiyon build |
| `npm run start` | Prodüksiyon sunucusu |
| `npm run lint` | ESLint kontrolü |

---

## Klasör Yapısı

```
src/
├── app/              # Next.js App Router sayfaları ve API rotaları
│   ├── projeler/[slug]/  # Proje detay sayfaları (statik)
│   ├── portal/       # Müşteri portalı (Aşama 3)
│   ├── admin/        # Yönetici paneli (Aşama 4)
│   ├── api/v1/       # REST API (Aşama 3)
│   ├── sitemap.ts    # Dinamik sitemap.xml
│   └── robots.ts     # robots.txt
├── components/
│   ├── ui/           # Button, Badge, Card, Container
│   ├── layout/       # Navbar, Footer, Section, Heading
│   └── sections/     # ProjectsGrid ve diğer sayfa bölümleri
├── content/
│   └── projects.ts   # 📌 İçerik buraya eklenir
├── i18n/
│   └── tr.ts         # Türkçe metin katmanı
├── lib/
│   ├── supabase/     # Browser ve server Supabase istemcileri
│   └── utils.ts      # cn(), statusLabel()
└── types/
    ├── project.ts    # Project, Feature, ProjectStatus tipleri
    └── supabase.ts   # Veritabanı tip iskelet
```

---

## Yeni Proje Eklemek

`src/content/projects.ts` dosyasına `projects` dizisine yeni bir `Project` nesnesi ekleyin:

```ts
{
  slug: 'yeni-urun',
  name: 'Yeni Ürün',
  tagline: 'Tek cümlelik slogan.',
  descriptionShort: '...',
  descriptionLong: `...`,
  features: [
    { icon: 'IconAdi', label: 'Özellik', description: 'Açıklama' },
  ],
  status: 'development',
  accentColor: '#FF6B6B',
  coverImagePath: '/images/projects/yeni-urun/cover.webp',
  sortOrder: 5,
}
```

---

## Ortam Değişkenleri

| Değişken | Açıklama |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase proje URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon (public) anahtar |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role (sunucu tarafı) |
| `NEXT_PUBLIC_SITE_URL` | Canlı site URL (sitemap ve OG için) |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token (Aşama 3) |
| `RESEND_API_KEY` | E-posta API anahtarı (Aşama 3) |

---

## Aşama Haritası

| Aşama | İçerik |
|---|---|
| ✅ **Aşama 1** | Proje iskeleti, tasarım sistemi, bileşenler, temel sayfalar |
| 🔜 **Aşama 2** | Animasyonlar, proje detay sayfaları, hero geliştirme |
| 🔜 **Aşama 3** | Müşteri portalı (aktivasyon kodu, geri bildirim, takip) |
| 🔜 **Aşama 4** | Yönetici paneli (Supabase Auth, tenant/feedback yönetimi) |

---

## Lisans

Tescilli yazılım — Regon Teknoloji. Tüm hakları saklıdır.
