// ============================================================
// Regon Teknoloji — Fotoğraf ve Ekran Görüntüsü Alanları Sistemi
// 1'den 23'e kadar benzersiz numaralandırılmış fotoğraf alanları.
// Görsel bağlamak için sadece ilgili 'imagePath' yolunu doldurunuz.
// Örnek: imagePath: '/images/slots/slot-07.webp'
// ============================================================

export type PhotoSlotType = 'EKRAN GÖRÜNTÜSÜ' | 'FOTOĞRAF' | 'ÜRETİLECEK GÖRSEL'

export interface PhotoSlotItem {
  no: number
  section: string
  placement: string
  type: PhotoSlotType
  description: string
  ratio: string
  pixelSize: string
  imagePath: string
  prompt?: string
}

export const photoSlots: PhotoSlotItem[] = [
  // ─── BİZ KİMİZ ───
  {
    no: 1,
    section: 'Biz Kimiz',
    placement: 'Biz Kimiz manifestosunun sağ tarafı / saha fotoğrafı alanı',
    type: 'FOTOĞRAF',
    description:
      'Sahada restoran kasasında dokunmatik ekranda sipariş alan ve mutfak fişi çıkaran gerçek restoran operasyonu ortamı. Sıcak restoran ışıkları, doğal çalışma anı.',
    ratio: '4/5',
    pixelSize: '1080x1350',
    imagePath: '',
    prompt:
      'Atmospheric documentary photograph of a bustling Turkish restaurant counter, a modern touch POS screen showing order tickets, kitchen receipt printer with paper receipt coming out, warm cinematic lighting, authentic candid workspace, no people posed, 35mm photography.',
  },

  // ─── REGON POS (Slot 02 - 06) ───
  {
    no: 2,
    section: 'Regon POS',
    placement: 'Regon POS bölümünün ana vitrin ekranı (Hero)',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Regon POS dokunmatik ana kasa arayüzü: Sol panelde masa planı ve adisyon kalemleri, sağda hızlı ürün seçim butonları, üst barda aktif kasa ve Caller ID durumu. Yatay tam ekran.',
    ratio: '16/10',
    pixelSize: '1920x1200',
    imagePath: '',
    prompt:
      'Clean professional UI screenshot of a restaurant point of sale touch terminal interface, order ticket sidebar on the left, grid of category food buttons on the right, dark slate clean industrial design, crisp typography, high resolution.',
  },
  {
    no: 3,
    section: 'Regon POS',
    placement: 'Özellik kartı: Caller ID Müşteri Tanıma',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Caller ID gelen çağrı açılır penceresi: Gelen telefon numarası, müşterinin kayıtlı adı, son sipariş verdiği adres ve geçmiş favori sipariş listesi görünümü.',
    ratio: '16/9',
    pixelSize: '1280x720',
    imagePath: '',
    prompt:
      'UI screenshot modal popup showing incoming caller ID on a restaurant software, caller name, verified delivery address, previous order history, clean minimalist flat UI.',
  },
  {
    no: 4,
    section: 'Regon POS',
    placement: 'Özellik kartı: Mutfak ve Kasa Termal Fiş Çıktısı',
    type: 'FOTOĞRAF',
    description:
      '80mm termal fiş yazıcısından taze basılmış sipariş fişi: Sipariş numarası, masa/paket bilgisi, sipariş notları ve net ayrılmış kalemler.',
    ratio: '1/1',
    pixelSize: '1080x1080',
    imagePath: '',
    prompt:
      'Close-up photo of a thermal receipt printer on a stainless steel commercial kitchen counter, freshly printed food order receipt with bold numbers, sharp contrast, realistic food service background.',
  },
  {
    no: 5,
    section: 'Regon POS',
    placement: 'Özellik kartı: Kasa Kapatma ve Gün Sonu Mutabakatı',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Z-Raporu ve gün sonu kasa kapatma konsolu: Nakit, kredi kartı, çevrimiçi sipariş platformları toplamları ve kasa farkı denetim tablosu.',
    ratio: '16/9',
    pixelSize: '1280x720',
    imagePath: '',
    prompt:
      'UI dashboard screenshot of a restaurant daily sales closing report, breakdown of cash, credit card, delivery apps totals, clean analytical data view.',
  },
  {
    no: 6,
    section: 'Regon POS',
    placement: 'Özellik kartı: Mobil Garson / El Terminali',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Mobil el terminali veya tablet arayüzü: Garsonun masadan doğrudan sipariş girip anında mutfağa gönderdiği dikey arayüz.',
    ratio: '9/16',
    pixelSize: '1080x1920',
    imagePath: '',
    prompt:
      'Mobile app UI mockup of a waiter ordering terminal, clean restaurant table grid, order draft items with add/remove buttons, elegant modern mobile UI.',
  },

  // ─── REGON KURYE (Vitrinin Yıldızı - Slot 07 - 12) ───
  {
    no: 7,
    section: 'Regon Kurye',
    placement: 'Regon Kurye bölümünün dev ana vitrin ekranı (Hero)',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Regon Kurye Admin Paneli: Sol tarafta canlı sipariş akış sütunu, ortada gerçek zamanlı kurye konumlarını gösteren harita, üstte aktif teslimat sayısı ve ortalama teslimat süresi KPI kartları.',
    ratio: '16/10',
    pixelSize: '1920x1200',
    imagePath: '',
    prompt:
      'High-end SaaS dispatch dashboard screenshot for courier fleet management, live interactive GPS map with delivery motorcycle pins, order queue column on left, KPI metric cards on top, clean dark/paper theme.',
  },
  {
    no: 8,
    section: 'Regon Kurye',
    placement: 'Özellik kartı: Restoran Sipariş Kabul & Kurye Çağrı Paneli',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Restoranın kullandığı panel: Yeni gelen sipariş, hazırlık süresi sayacı ve "Kurye Ata" butonu ile paket durumu takip listesi.',
    ratio: '16/9',
    pixelSize: '1280x720',
    imagePath: '',
    prompt:
      'Restaurant dispatch dashboard UI showing live incoming takeaway orders, preparation timer countdown, courier assignment dropdown, minimal high contrast interface.',
  },
  {
    no: 9,
    section: 'Regon Kurye',
    placement: 'Özellik kartı: Kurye Mobil Uygulaması (Teslimat & Navigasyon)',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Capacitor hibrit kurye mobil uygulaması: Kuryenin telefonunda teslim alacağı paket detayları, müşteri adresi, tek dokunuşla navigasyon ve arama butonu.',
    ratio: '9/16',
    pixelSize: '1080x1920',
    imagePath: '',
    prompt:
      'Mobile app UI screen for delivery rider, showing active delivery destination, customer phone quick-dial, turn-by-turn map preview, swipe to deliver button, clean modern app design.',
  },
  {
    no: 10,
    section: 'Regon Kurye',
    placement: 'Özellik kartı: Müşteri Canlı Kurye Takip Ekranı',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Müşterinin SMS linkiyle açtığı canlı takip sayfası: Kuryenin motor ikonuyla haritada hareketi, tahmini varış süresi (örn. 8 dk) ve sipariş özeti.',
    ratio: '9/16',
    pixelSize: '1080x1920',
    imagePath: '',
    prompt:
      'Customer live tracking web screen on mobile phone, showing courier moving on live city map, ETA badge displaying 8 mins, delivery progress stepper, elegant minimalistic UI.',
  },
  {
    no: 11,
    section: 'Regon Kurye',
    placement: 'Özellik kartı: Gün Sonu Kurye ve Restoran Finansal Mutabakatı',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Finansal mutabakat tablosu: Hangi kuryenin kaç paket taşıdığı, kapıda nakit/kredi kartı tahsilat toplamları ve restoran hakediş dökümü.',
    ratio: '16/9',
    pixelSize: '1440x810',
    imagePath: '',
    prompt:
      'Financial settlement reconciliation table UI, list of courier riders with package counts, collected cash totals, automated fee calculation, tabular modern fintech interface.',
  },
  {
    no: 12,
    section: 'Regon Kurye',
    placement: 'Özellik kartı: Kurye Mobil Uygulaması (Vardiya & Havuz)',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Kurye uygulamasında vardiya açma/kapatma durumu, bekleyen paket havuzu ve gün içinde tamamlanan teslimat adedi özeti.',
    ratio: '9/16',
    pixelSize: '1080x1920',
    imagePath: '',
    prompt:
      'Courier rider mobile app profile & shift screen, active shift toggle button, daily completed deliveries tally, earnings summary widget, sleek clean interface.',
  },

  // ─── REGON BAYİ (Slot 13 - 17) ───
  {
    no: 13,
    section: 'Regon Bayi',
    placement: 'Regon Bayi ana vitrin ekranı (Hero)',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Ana Bayi Merkez Yönetim Konsolu: Bağlı tüm şube/bayilerden gelen günlük mal talepleri listesi, onay bekleyen siparişler ve toplu sevkiyat hazırlık durumu.',
    ratio: '16/10',
    pixelSize: '1920x1200',
    imagePath: '',
    prompt:
      'B2B distribution management system UI dashboard, matrix of regional branch orders, inventory allocation table, dispatch fulfillment status, enterprise software layout.',
  },
  {
    no: 14,
    section: 'Regon Bayi',
    placement: 'Özellik kartı: Bayi Mal Talep Ekranı',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Alt bayinin girdiği ekran: Koli, hammadde ve ambalaj ürünlerini adet/koli bazında seçip tek tuşla merkeze ilettiği sipariş formu.',
    ratio: '16/9',
    pixelSize: '1280x720',
    imagePath: '',
    prompt:
      'B2B wholesale order placement UI, product catalog with carton quantity counters, minimum order thresholds, one-click order dispatch button.',
  },
  {
    no: 15,
    section: 'Regon Bayi',
    placement: 'Özellik kartı: Canlı Talep ve Hazırlık Aşamaları',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Aşama takip konsolu: Talep Gönderildi → Merkez Onayladı → Depoda Hazırlandı → Kargo/Araçta durum çubukları ve anlık bildirim paneli.',
    ratio: '16/9',
    pixelSize: '1280x720',
    imagePath: '',
    prompt:
      'Supply chain tracking dashboard UI, multi-stage progress bar showing requested, approved, packing, dispatched steps, clear typography.',
  },
  {
    no: 16,
    section: 'Regon Bayi',
    placement: 'Özellik kartı: Depo Barkod ve Koli Çıkış Sevkiyatı',
    type: 'FOTOĞRAF',
    description:
      'Dağıtım merkezinde barkod okuyucuyla koli çıkışı yapan depo personeli ve paletlenmiş sevkiyat kolileri. Gerçekçi operasyonel depo fotoğrafı.',
    ratio: '16/10',
    pixelSize: '1280x800',
    imagePath: '',
    prompt:
      'Warehouse logistics documentary photo, warehouse worker scanning barcode on cardboard dispatch box with handheld terminal, stacked distribution goods, realistic lighting.',
  },
  {
    no: 17,
    section: 'Regon Bayi',
    placement: 'Özellik kartı: Bayi Cari Hesap & Sevkiyat Geçmişi',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Bayi bazlı geçmiş sevkiyat raporu: Şubenin aylık çektiği mal hacmi, fatura mutabakatı ve sevkiyat irsaliye kayıtları.',
    ratio: '16/9',
    pixelSize: '1280x720',
    imagePath: '',
    prompt:
      'B2B merchant statement and order history UI table, ledger of past dispatches, invoice numbers, total quantities delivered, clean table design.',
  },

  // ─── REGON MARKET (Slot 18 - 22) ───
  {
    no: 18,
    section: 'Regon Market',
    placement: 'Regon Market ana vitrin ekranı (Hero)',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Regon Market mobil müşteri uygulaması ana sayfası: İlçedeki yerel restoran ve market listesi, teslimat süreleri, indirim rozetleri ve mahalle pazar yeri vitrini.',
    ratio: '9/16',
    pixelSize: '1080x1920',
    imagePath: '',
    prompt:
      'Local food and grocery delivery mobile app homepage UI mockup, category tabs, restaurant cards with ratings and delivery times, clean modern mobile interface.',
  },
  {
    no: 19,
    section: 'Regon Market',
    placement: 'Özellik kartı: İlçe Franchise Yönetim Konsolu',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'İlçe işletmecisinin yönetim paneli: Bölgedeki aktif işletmeler, günlük toplam sipariş cirosu, kesilen franchise komisyon tutarı ve kurye atama ayarları.',
    ratio: '16/10',
    pixelSize: '1920x1200',
    imagePath: '',
    prompt:
      'Local marketplace franchise operator admin dashboard UI, active merchants map, daily GMV counter, commission fee earned widget, multi-merchant analytics.',
  },
  {
    no: 20,
    section: 'Regon Market',
    placement: 'Özellik kartı: Restoran Menü ve Sepet Akışı',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Mobil uygulamada restoran menü detay sayfası: Yemek fotoğrafları, porsiyon/opsiyon seçimleri ve sepet onay çubuğu.',
    ratio: '9/16',
    pixelSize: '1080x1920',
    imagePath: '',
    prompt:
      'Mobile food ordering restaurant menu UI screen, item options modal (extra cheese, sauces), floating view cart button with total price, delightful modern design.',
  },
  {
    no: 21,
    section: 'Regon Market',
    placement: 'Özellik kartı: Otomatik Kurye Havuzu Entegrasyonu',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'Sipariş düştüğünde sistemin Regon Kurye havuzundan en yakın boştaki motor kuryeyi otomatik pakete atama ekranı.',
    ratio: '16/9',
    pixelSize: '1280x720',
    imagePath: '',
    prompt:
      'Smart dispatch auto-assignment UI modal, nearest available courier matched within radius, dispatch trigger confirmation, streamlined UX.',
  },
  {
    no: 22,
    section: 'Regon Market',
    placement: 'Özellik kartı: Esnaf Komisyon & Hakediş Raporu',
    type: 'EKRAN GÖRÜNTÜSÜ',
    description:
      'İşletmeci ve esnaf hakediş tablosu: Her restorandan alınan komisyon oranı, net ödenecek tutar ve haftalık banka transfer özeti.',
    ratio: '16/9',
    pixelSize: '1280x720',
    imagePath: '',
    prompt:
      'Marketplace merchant payout breakdown table UI, commission fee deduction calculation, net payout schedule, clean transparent accounting view.',
  },

  // ─── NASIL ÇALIŞIYORUZ ───
  {
    no: 23,
    section: 'Nasıl Çalışıyoruz',
    placement: 'Nasıl Çalışıyoruz bölümü / Saha kurulum ve eğitim fotoğrafı',
    type: 'FOTOĞRAF',
    description:
      'Regon teknik personelinin restoran tezgahında dokunmatik ekran POS ve kurye telefonunu işletme sahibine birebir kurup test ettiği saha fotoğrafı.',
    ratio: '16/10',
    pixelSize: '1280x800',
    imagePath: '',
    prompt:
      'Authentic documentary photo of a software engineer setting up a POS hardware and mobile app on a restaurant counter with a restaurant owner looking on, hands-on field onboarding, genuine candid lighting.',
  },
]

export function getPhotoSlot(no: number): PhotoSlotItem | undefined {
  return photoSlots.find((slot) => slot.no === no)
}
