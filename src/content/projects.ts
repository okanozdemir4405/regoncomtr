import type { Project } from '@/types/project'

/**
 * Merkezi içerik deposu — Aşama 3
 * 4 ürünün vitrin ve genişletilmiş detay bilgileri.
 * Durum notu: Tüm projeler varsayılan olarak 'development' → rozet gizlenir.
 * 'live' yapıldığında yeşil operasyon rozeti otomatik belirir.
 */
export const projects: Project[] = [
  {
    slug: 'regon-pos',
    name: 'Regon POS',
    subname: 'Eski adıyla Mergen POS',
    stepNumber: '01',
    stepLabel: 'ADIM 01 · GİRİŞ & KASA',
    orderJourneyState: 'SİPARİŞ #0042 // ÇAĞRI TANINDI & FİŞ BASILDI',
    tagline: 'Telefon çalıyor: gelen numara tanındı, sipariş açıldı, mutfak fişi basıldı.',
    targetAudience:
      'Paket servis, masa ve gel-al hizmeti veren bağımsız restoranlar, kafeler ve çok şubeli gıda işletmeleri.',
    problemSolved:
      'Telefon çaldığında adresi tekrar sorma mecburiyetini, mutfak ile kasa arasındaki kâğıt kayıplarını ve gün sonundaki kasa açıklarını ortadan kaldırır.',
    descriptionShort:
      'Caller ID modülü gelen numaradan müşterinin geçmiş siparişlerini ve adresini anında açar. Sipariş girilir, mutfak ve kasa fişleri basılır, kasa gün sonunda kuruşu kuruşuna kapatılır.',
    descriptionLong: `Regon POS (eski adıyla Mergen POS), restoranların en yoğun saatlerinde hatasız ve hızlı operasyon yürütmesi için sahada geliştirilmiş dokunmatik kasa ve sipariş yazılımıdır.

Müşteri aradığında Caller ID donanımı numarayı anında tanır, müşterinin kayıtlı adresi ve önceki siparişleri ekranda belirir. Paket, masa ve gel-al siparişleri tek dokunuşla ayrışır. 80mm termal yazıcı mutfağa sipariş hazırlık fişini, kasaya ise resmi adisyonu çıkartır. Nakit, banka kartı ve çevrimiçi yemek platformu ödemeleri tek bir kasa havuzunda toplanır.`,
    features: [
      { icon: 'Phone', label: 'Caller ID Müşteri Tanıma', description: 'Telefon çaldığı anda müşteri adı, kayıtlı adresi ve geçmiş siparişleri ekranda belirir.' },
      { icon: 'Printer', label: 'Mutfak ve Kasa Fiş Çıktısı', description: '80mm termal yazıcı entegrasyonuyla mutfağa hazırlık, kasaya adisyon çıktısı eşzamanlı basılır.' },
      { icon: 'Terminal', label: 'Masa, Paket ve Gel-Al Ayrımı', description: 'Farklı satış modelleri tek ekranda ayrışır. Masalar parçalı adisyonla kapatılabilir.' },
      { icon: 'Branch', label: 'Çoklu İşletme ve Şube Mimarisi', description: 'Birden fazla şubeye sahip restoranlar için merkezi menü ve şube kasası tanımları desteklenir.' },
      { icon: 'Reconciliation', label: 'Ödeme Konsolidasyonu', description: 'Nakit, banka POS cihazları ve çevrimiçi yemek platformlarının ödemeleri tek kasa havuzunda toplanır.' },
      { icon: 'MobileDevice', label: 'Mobil Garson & El Terminali', description: 'Garsonlar masadan cep telefonu veya tablet ile siparişi girer, mutfak yazıcısı siparişi anında tezgaha döker.' },
    ],
    workflowSteps: [
      { step: '1', title: 'Çağrı Tanınır', desc: 'Caller ID modülü çalan numaradan kayıtlı müşteriyi, teslimat adresini ve geçmiş siparişini ekrana getirir.' },
      { step: '2', title: 'Sipariş Girilir', desc: 'Masa, paket veya gel-al seçimiyle ürünler ve müşteri özel notları tek tuşla eklenir.' },
      { step: '3', title: 'Çift Fiş Basılır', desc: 'Mutfak yazıcısı hazırlama fişini, kasa yazıcısı adisyonu ve kurye adres fişini çıkartır.' },
      { step: '4', title: 'Kasa Kapatılır', desc: 'Nakit, temassız POS ve çevrimiçi platform tahsilatları gün sonunda kuruşu kuruşuna denetlenir.' },
    ],
    heroSlotNo: 2,
    detailSlotNos: [3, 4, 5, 6],
    status: 'development',
    accentColor: '#14C9BE',
    coverImagePath: '/images/projects/regon-pos/cover.webp',
    sortOrder: 1,
  },
  {
    slug: 'regon-kurye',
    name: 'Regon Kurye',
    subname: 'Vitrinin Yıldızı // Ana Dağıtım Motoru',
    stepNumber: '02',
    stepLabel: 'ADIM 02 · DAĞITIM & HARİTA',
    orderJourneyState: 'SİPARİŞ #0042 // FİŞ ÇIKTI, KURYE YOLDA, CANLI HARİTA',
    tagline: 'Restoran salar, kurye yola çıkar, müşteri haritada canlı izler, gün sonunda kuruşu kuruşuna hesap kapanır.',
    targetAudience:
      'Kendi motor kurye filosunu çalıştıran paket servis restoranları, bağımsız kurye konsorsiyumları ve esnaf paket dağıtım ağları.',
    problemSolved:
      '"Kurye nerede kaldı?" telefonlarını, kuryelerin hangi paketi ne zaman teslim ettiğinin belirsizliğini ve gün sonundaki nakit karmaşasını tamamen bitirir.',
    descriptionShort:
      '3 ayrı panel (restoran, kurye, admin) ve tek platform. Next.js ve Supabase Realtime ile 24ms gecikmeyle anlık kurye GPS takibi, otomatik paket havuzu ve günlük kuruşu kuruşuna finansal mutabakat.',
    descriptionLong: `Regon Kurye, şirketin en yüksek emek verdiği ve vitrinin yıldızı olan SaaS filo yönetim omurgasıdır.

Restoran panelden siparişi açıp kurye çağırır. Kurye Capacitor tabanlı iOS/Android mobil uygulamasından paketi kabul eder, tek tuşla harita rotasını açar. Müşteriye SMS ile giden web linki üzerinden kuryenin motosikleti haritada canlı olarak izlenir. Kapıda nakit veya kartla teslimat yapıldığında paket kapanır. Gece filo kapanışında her kuryenin taşıdığı paket, cebindeki nakit ve restorana ödenecek hakediş kuruşu kuruşuna mutabakat raporunda listelenir.`,
    features: [
      { icon: 'Realtime', label: 'Supabase Realtime Akış', description: 'Gecikmesiz WebSocket bağlantısıyla yeni siparişler ve konum güncellemeleri tüm ekranlara anında yansır.' },
      { icon: 'Map', label: 'Gerçek Zamanlı GPS Harita', description: 'Filodaki tüm motorların harita üzerinde hız, kalan mesafe ve tahmini varış süresi canlı izlenir.' },
      { icon: 'Panels', label: 'Üç Ayrı Operasyon Paneli', description: 'Restoran paneli, kurye mobil ekranı ve filo admin konsolu tam entegre çalışır.' },
      { icon: 'MobileDevice', label: 'Capacitor Hibrit Mobil App', description: 'Tek kod tabanından iOS ve Android cihazlara derlenmiş, düşük pil tüketen yerel GPS motoru.' },
      { icon: 'Reconciliation', label: 'Otomatik Finansal Mutabakat', description: 'Kurye başı teslimat adedi, toplanan kapıda nakit, slip toplamları ve restoran hakediş tablosu otomatik çıkar.' },
      { icon: 'Motorcycle', label: 'Müşteri Canlı Takip Sayfası', description: 'Müşteri uygulama yüklemeden SMS web linkiyle kuryenin kapıya gelişini canlı haritada görür.' },
      { icon: 'Box', label: 'Paket Havuzu & Otomatik Çağrı', description: 'Sipariş hazır olunca en uygun kuryeye atanır veya ortak havuzdan sıradaki kurye tarafından kabul edilir.' },
      { icon: 'Terminal', label: 'Çoklu Kiracı (Multi-Tenant)', description: 'Tek veritabanı altyapısında yüzlerce restoran ve bağımsız kurye filosu birbirinin verisini görmeden çalışır.' },
    ],
    workflowSteps: [
      { step: '1', title: 'Paket Açılır', desc: 'Restoran adisyonu hazırlar ve tek tuşla kurye havuzuna çağrı gönderir.' },
      { step: '2', title: 'Kurye Kabul Eder', desc: 'Kurye cep uygulamasından paketi kabul eder ve restorandan teslim alır.' },
      { step: '3', title: 'Canlı İzlenir', desc: 'Müşteri SMS web linkiyle kuryeyi canlı haritada izler; Supabase Realtime anlık günceller.' },
      { step: '4', title: 'Kapı Teslimi', desc: 'Kapıda nakit veya kart tahsilatı yapılır, kurye "Teslim Edildi" kaydırarak işlemi kapatır.' },
      { step: '5', title: 'Otomatik Mutabakat', desc: 'Gece kasa kapanışında kuryenin üzerindeki nakit ve restoran borcu otomatik listelenir.' },
    ],
    heroSlotNo: 7,
    detailSlotNos: [8, 9, 10, 11, 12],
    status: 'development',
    accentColor: '#14C9BE',
    coverImagePath: '/images/projects/regon-kurye/cover.webp',
    sortOrder: 2,
    isStar: true,
  },
  {
    slug: 'regon-bayi',
    name: 'Regon Bayi',
    subname: 'B2B Dağıtım & Sevkiyat Koordinasyonu',
    stepNumber: '03',
    stepLabel: 'ADIM 03 · TEDARİK & DEPO',
    orderJourneyState: 'SİPARİŞ #0042 // BAYİ MAL TALEP ETTİ & MERKEZ SEVKİYATTA',
    tagline: 'Bayiler telefon yerine uygulama üzerinden mal talep eder, ana bayi tek merkezden kargolar.',
    targetAudience:
      'Çok şubeli franchise gıda markaları, toptan hammadde ve ambalaj dağıtan ana depolar ve bayi ağları.',
    problemSolved:
      'WhatsApp üzerinden unutulan siparişleri, yanlış koli adetlerini ve "benim kargom ne zaman çıkar" telefon trafiğini tamamen ortadan kaldırır.',
    descriptionShort:
      'Her alt bayi kendi paneline girip o gün ne kadar hammadde veya ambalaj istediğini seçip gönderir. Ana bayi toplu hazırlar, depolar, kargolar; şubeler canlı aşamaları adım adım izler.',
    descriptionLong: `Regon Bayi, çok şubeli ve franchise işletmelerde mal talep ve sevkiyat koordinasyonunu kağıt ve telefon karmaşasından kurtaran B2B tedarik sistemidir.

Her alt şube kendi kullanıcı şifresiyle sisteme girer; koli, teneke sos ve ambalaj ürünlerini adet bazında seçip tek tuşla merkeze gönderir. Ana bayi merkez ekranında tüm talepleri toplu görür, depolar ve sevkiyat planına alır. Sevkiyat yapıldığında barkod okutularak kargo takip kodu girilir. Bayi telefonla sormak zorunda kalmadan kolisinin hangi aşamada olduğunu anlık bildirimle takip eder.`,
    features: [
      { icon: 'Branch', label: 'Sınırsız Bayi ve Şube Hesabı', description: 'Her alt bayi kendi şifresiyle girer; sadece kendi sipariş geçmişini, carisini ve sevk durumunu görür.' },
      { icon: 'Box', label: 'Tek Tuşla Mal Talebi', description: 'Ürün kataloğundan koli veya adet bazında hızlı seçim yapılır, minimum sipariş sınırları otomatik uygulanır.' },
      { icon: 'Truck', label: 'Canlı Sevkiyat Adımları', description: 'Talep Alındı → Onaylandı → Hazırlandı → Kargoda aşamaları iki tarafa da eşzamanlı bildirimle aktarılır.' },
      { icon: 'Realtime', label: 'Anlık Push Bildirimleri', description: 'Mal depodan çıktığında şube yöneticisine anında bildirim ve kargo takip numarası iletilir.' },
      { icon: 'Terminal', label: 'Depo Barkodlu Çıkış Entegrasyonu', description: 'Depo personeli koli barkodlarını okutarak eksik veya yanlış ürün çıkış riskini sıfıra indirir.' },
      { icon: 'Reconciliation', label: 'Bayi Cari Hesap & Sevkiyat Geçmişi', description: 'Hangi şubenin ay boyunca ne kadar mal çektiği, faturalar ve ödeme bakiyeleri muhasebeye hazır listelenir.' },
    ],
    workflowSteps: [
      { step: '1', title: 'Bayi Talep Eder', desc: 'Şube kendi paneline girip o gün ihtiyaç duyduğu koli, ambalaj ve hammaddeyi seçer.' },
      { step: '2', title: 'Merkez Onaylar', desc: 'Ana bayi talepleri tek ekranda görür, stok durumuna göre onaylar ve depoya iletir.' },
      { step: '3', title: 'Kolilenir & Barkodlanır', desc: 'Depo görevlisi barkod okutarak siparişi hazırlar; bayi aşamayı canlı ekranda görür.' },
      { step: '4', title: 'Kargoya Verilir', desc: 'Kargo takip kodu sisteme girer; bayi teslimat saatine kadar paketi adım adım izler.' },
    ],
    heroSlotNo: 13,
    detailSlotNos: [14, 15, 16, 17],
    status: 'development',
    accentColor: '#14C9BE',
    coverImagePath: '/images/projects/regon-bayi/cover.webp',
    sortOrder: 3,
  },
  {
    slug: 'regon-market',
    name: 'Regon Market',
    subname: 'İlçe Pazar Yeri & Franchise Modeli',
    stepNumber: '04',
    stepLabel: 'ADIM 04 · PAZAR YERİ & ESNAF',
    orderJourneyState: 'SİPARİŞ #0042 // MAHALLELİ SİPARİŞ VERDİ, ESNAF KAZANDI',
    tagline: 'Bir girişimci kendi ilçesinde bağımsız pazar yeri kurar, restoran ve marketlerden komisyon alır.',
    targetAudience:
      'Kendi ilçesinde teslimat ve sipariş ağı kurmak isteyen yerel girişimciler, esnaf kooperatifleri ve franchise işletmecileri.',
    problemSolved:
      'Dev tekel platformların %35\'i aşan komisyonlarına karşı esnafı koruyan, gelirin ilçede kalmasını sağlayan bağımsız yerel alternatif sunar.',
    descriptionShort:
      'İlçe bazlı franchise modeli. Bölgedeki restoran ve marketleri kendi sistemine dahil et, mobil uygulamadan sipariş al, Regon Kurye filosuyla teslim ettir ve her siparişten adil komisyon kazan.',
    descriptionLong: `Regon Market, yerel girişimcilere kendi ilçelerinde Yemeksepeti benzeri bağımsız bir sipariş ve teslimat pazar yeri kurma gücü veren franchise yazılımıdır.

Girişimci ilçenin lisansını alır, yerel restoranları, kasapları, manavları ve fırınları sisteme dahil eder. Mahalle sakinleri modern iOS ve Android uygulamalarından sepet oluşturup sipariş verir. Sipariş doğrudan esnafa ve bölgedeki motor kuryelere düşer. Girişimci her sipariş üzerinden önceden belirlediği esnek komisyon oranını kazanır. Esnaf tekel platformların yüksek komisyonlarından kurtulurken, ilçe kendi yerel dağıtım ekosistemine kavuşur.`,
    features: [
      { icon: 'Marketplace', label: 'İlçe Bazlı Franchise Modeli', description: 'İlçe sınırları belirlenmiş bölge yetkisi. Girişimci kendi bölgesindeki restoran ve marketlerin tek hakimidir.' },
      { icon: 'Reconciliation', label: 'Esnek Komisyon Yönetimi', description: 'Restoran veya market bazında farklı komisyon oranları (örn. %10, %12) belirlenerek kârlılık ayarlanır.' },
      { icon: 'MobileDevice', label: 'iOS & Android Müşteri Uygulaması', description: 'Mahalle sakinlerinin kolayca sepet yaptığı, adresini kaydettiği ve siparişini takip ettiği mobil uygulama.' },
      { icon: 'Motorcycle', label: 'Otomatik Kurye Havuzu', description: 'Market siparişleri Regon Kurye altyapısıyla doğrudan motor kuryelere atanır; kuryesiz esnaf da sipariş satar.' },
      { icon: 'Panels', label: 'İşletmeci Yönetim Konsolu', description: 'Bölgedeki aktif esnaflar, günlük sipariş hacmi, kurye durumu ve kazanılan komisyon geliri anlık izlenir.' },
      { icon: 'Check', label: 'Şeffaf Esnaf Hakediş Raporu', description: 'Hangi esnafa ne kadar ciro aktarılacağı ve kesilen komisyon faturası haftalık şeffaf mutabakatla çıkar.' },
    ],
    workflowSteps: [
      { step: '1', title: 'İlçe Tahsisi', desc: 'Girişimci kendi ilçesinin platform haklarını alır ve bölge yöneticisi olur.' },
      { step: '2', title: 'Esnaf Eklenir', desc: 'Bölgedeki restoranlar, fırınlar, manavlar ve kasaplar sisteme işletme olarak dahil edilir.' },
      { step: '3', title: 'Sipariş Gelir', desc: 'Mahalle sakinleri mobil uygulamadan sepet oluşturur; sipariş esnafa ve kuryeye düşer.' },
      { step: '4', title: 'Komisyon Hesaba', desc: 'Girişimci her siparişten önceden belirlenen komisyonunu alır, net tutar esnafa ödenir.' },
    ],
    heroSlotNo: 18,
    detailSlotNos: [19, 20, 21, 22],
    status: 'development',
    accentColor: '#14C9BE',
    coverImagePath: '/images/projects/regon-market/cover.webp',
    sortOrder: 4,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
