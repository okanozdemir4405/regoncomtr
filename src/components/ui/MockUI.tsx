import { cn } from '@/lib/utils'

// ============================================================
// MockUI Bileşen Ailesi — Regon Operasyon Masası Maketleri
// Gerçek ekran görüntüleri gelene kadar HTML/CSS ile çizilmiş,
// inandırıcı operasyonel veri içeren arayüz maketleri.
// Turkuaz renk sistemi (accent: dolgu, accent-ink: açık zeminde yazı)
// ============================================================

/** Tırtıklı Termal Fiş Kenarı (SVG) */
function PerforatedEdge({ className, flipped = false }: { className?: string; flipped?: boolean }) {
  return (
    <svg
      className={cn('w-full h-3 text-surface-paper fill-current', flipped && 'rotate-180', className)}
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,0 L10,12 L20,0 L30,12 L40,0 L50,12 L60,0 L70,12 L80,0 L90,12 L100,0 L110,12 L120,0 L130,12 L140,0 L150,12 L160,0 L170,12 L180,0 L190,12 L200,0 L210,12 L220,0 L230,12 L240,0 L250,12 L260,0 L270,12 L280,0 L290,12 L300,0 L310,12 L320,0 L330,12 L340,0 L350,12 L360,0 L370,12 L380,0 L390,12 L400,0 V12 H0 Z" />
    </svg>
  )
}

/** 1. Termal Fiş (Hero ve POS için) */
export function MockThermalReceipt({ className }: { className?: string }) {
  return (
    <div className={cn('relative max-w-sm w-full font-mono text-[11px] sm:text-xs', className)}>
      {/* Tırtıklı üst kenar */}
      <PerforatedEdge className="relative z-10 -mb-[1px]" />

      {/* Fiş gövdesi */}
      <div className="relative border-x border-[#1A1612]/20 bg-surface-paper p-5 sm:p-6 text-text-primary shadow-[2px_4px_12px_rgba(26,22,18,0.06)]">
        {/* Damga / Başlık */}
        <div className="receipt-line text-center space-y-0.5 border-b border-dashed border-[#1A1612]/30 pb-3" style={{ animationDelay: '0.05s' }}>
          <p className="font-bold tracking-wider text-xs sm:text-sm">*** REGON SİSTEM FİŞİ ***</p>
          <p className="text-[10px] text-text-secondary">MERGEN RESTORAN POS // MODA ŞUBE</p>
          <p className="text-[10px] text-text-muted">TERMİNAL: POS-01 / YAZICI: KASA-80MM</p>
        </div>

        {/* Sipariş Meta */}
        <div className="receipt-line py-2.5 border-b border-dashed border-[#1A1612]/30 space-y-1" style={{ animationDelay: '0.12s' }}>
          <div className="flex justify-between font-bold">
            <span>SİPARİŞ NO:</span>
            <span className="text-accent-ink font-black">#0042</span>
          </div>
          <div className="flex justify-between text-text-secondary text-[10px]">
            <span>TARİH & SAAT:</span>
            <span>27.10.2026 - 19:42:10</span>
          </div>
          <div className="flex justify-between text-text-secondary text-[10px]">
            <span>SİPARİŞ TÜRÜ:</span>
            <span>PAKET SERVİS (TELEFON)</span>
          </div>
        </div>

        {/* Müşteri ve Caller ID */}
        <div className="receipt-line py-2.5 border-b border-dashed border-[#1A1612]/30 space-y-0.5" style={{ animationDelay: '0.2s' }}>
          <div className="text-[10px] font-semibold text-text-secondary uppercase">
            MÜŞTERİ [CALLER ID İLE BULUNDU]:
          </div>
          <p className="font-bold">AHMET Y. (0532 *** ** 84)</p>
          <p className="text-[10px] text-text-secondary">Caferağa Mah. Moda Cad. No:18 D:4 Kadıköy</p>
          <p className="text-[9px] text-text-muted italic">&quot;Zil çalmayın, kapıya bırakıp arayın&quot;</p>
        </div>

        {/* Kalemler */}
        <div className="receipt-line py-2.5 border-b border-dashed border-[#1A1612]/30 space-y-1.5" style={{ animationDelay: '0.28s' }}>
          <div className="flex justify-between font-bold text-[10px] text-text-secondary">
            <span>ÜRÜN</span>
            <span>TUTAR</span>
          </div>
          <div className="flex justify-between">
            <span>1x Regon Burger (Çift Köfte)</span>
            <span>260.00 TL</span>
          </div>
          <div className="flex justify-between text-text-secondary">
            <span>1x Baharatlı Patates (Büyük)</span>
            <span>95.00 TL</span>
          </div>
          <div className="flex justify-between text-text-secondary">
            <span>1x Ayran (300 ml)</span>
            <span>35.00 TL</span>
          </div>
          <div className="flex justify-between text-text-secondary">
            <span>1x Trüflü Sos</span>
            <span>30.00 TL</span>
          </div>
        </div>

        {/* Toplam */}
        <div className="receipt-line py-2.5 border-b-2 border-solid border-[#1A1612] space-y-1" style={{ animationDelay: '0.36s' }}>
          <div className="flex justify-between text-sm sm:text-base font-black">
            <span>TOPLAM:</span>
            <span>420.00 TL</span>
          </div>
          <div className="flex justify-between text-[10px] text-text-secondary">
            <span>ÖDEME:</span>
            <span>KAPIDA KART (POS ENTEGRE)</span>
          </div>
        </div>

        {/* Kurye Durumu */}
        <div className="receipt-line pt-3 space-y-1 text-[10px]" style={{ animationDelay: '0.44s' }}>
          <div className="flex justify-between font-bold">
            <span>KURYE ATAMASI:</span>
            <span className="text-accent-ink font-mono font-bold">[34 RG 841]</span>
          </div>
          <p className="text-text-secondary">Kurye: Mehmet K. // Tel: 0555 *** ** 12</p>
          <div className="flex items-center gap-1.5 pt-1 text-emerald-800 font-semibold">
            <span className="size-1.5 rounded-full bg-emerald-600 inline-block animate-pulse" />
            <span>DURUM: PAKET ÇIKTI // YOLDA</span>
          </div>
        </div>

        {/* Barkod çizgileri */}
        <div className="receipt-line pt-4 flex justify-between items-center opacity-70" style={{ animationDelay: '0.5s' }}>
          <div className="flex gap-[2px] h-6 items-end">
            <div className="w-[1px] h-full bg-black" />
            <div className="w-[3px] h-full bg-black" />
            <div className="w-[1px] h-full bg-black" />
            <div className="w-[2px] h-full bg-black" />
            <div className="w-[4px] h-full bg-black" />
            <div className="w-[1px] h-full bg-black" />
            <div className="w-[2px] h-full bg-black" />
            <div className="w-[3px] h-full bg-black" />
            <div className="w-[1px] h-full bg-black" />
            <div className="w-[2px] h-full bg-black" />
            <div className="w-[1px] h-full bg-black" />
            <div className="w-[3px] h-full bg-black" />
            <div className="w-[2px] h-full bg-black" />
            <div className="w-[4px] h-full bg-black" />
          </div>
          <span className="text-[9px] font-mono tracking-widest text-text-muted">REG-0042-2026</span>
        </div>
      </div>

      {/* Tırtıklı alt kenar */}
      <PerforatedEdge className="relative z-10 -mt-[1px]" flipped />

      {/* Yan kurye etiketi */}
      <div className="mt-3 inline-flex items-center gap-2 border border-[#1A1612] bg-[#FAF8F3] px-3 py-1 font-mono text-[10px] font-bold text-text-primary">
        <span className="size-2 rounded-full bg-accent" />
        <span>SİPARİŞ #0042 // KURYE YOLDA (12 DK)</span>
      </div>
    </div>
  )
}

/** 2. Regon POS: Adisyon ve Caller ID Konsolu */
export function MockPosScreen({ className }: { className?: string }) {
  return (
    <div className={cn('border border-[#1A1612] bg-[#FAF8F3] font-mono text-xs text-text-primary shadow-[2px_2px_0px_#1A1612]', className)}>
      {/* Üst Konsol Çubuğu */}
      <div className="flex items-center justify-between border-b border-[#1A1612] bg-surface-1 px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[11px] tracking-wide">REGON POS // KASA 01</span>
          <span className="border border-[#1A1612]/30 px-1 py-0.2 text-[9px] text-text-muted">MODA ŞUBE</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-text-secondary">
          <span>YAZICI: BAĞLI</span>
          <span className="text-emerald-700 font-bold">[AKTİF]</span>
        </div>
      </div>

      {/* Caller ID Arayan Bildirimi Çubuğu */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#1A1612] bg-accent-soft px-3 py-2 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent animate-ping" />
          <span className="font-bold text-accent-ink">GELEN ÇAĞRI (CALLER ID):</span>
          <span className="font-bold">0532 914 ** **</span>
        </div>
        <span className="text-[10px] text-text-secondary">Kayıt: Ahmet Y. (Son Sipariş: 3 gün önce)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#1A1612]">
        {/* Sol Kolon: Menü ve Giriş */}
        <div className="p-3 md:col-span-7 space-y-2.5">
          <div className="flex gap-1.5 text-[10px] uppercase font-bold">
            <span className="bg-[#1A1612] text-[#FAF8F3] px-2 py-0.5">PAKET SİPARİŞ [F1]</span>
            <span className="border border-[#1A1612] px-2 py-0.5 text-text-secondary">MASA [F2]</span>
            <span className="border border-[#1A1612] px-2 py-0.5 text-text-secondary">GEL-AL [F3]</span>
          </div>

          <div className="border border-[#1A1612]/30 bg-surface-1 p-2 space-y-1 text-[11px]">
            <p className="font-bold text-text-primary">MÜŞTERİ ADRES KAYDI:</p>
            <p className="text-text-secondary">Caferağa Mah. Moda Cad. No:18 D:4 Kadıköy / İstanbul</p>
            <p className="text-[10px] text-text-muted">Tarif: İkinci kat, kapı zili sağda.</p>
          </div>

          {/* Hızlı Kalem Butonları */}
          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <div className="border border-[#1A1612]/20 p-2 bg-[#FAF8F3]">
              <p className="font-bold">+ 1x Regon Burger</p>
              <p className="text-text-muted">260 TL</p>
            </div>
            <div className="border border-[#1A1612]/20 p-2 bg-[#FAF8F3]">
              <p className="font-bold">+ 1x Patates (Büyük)</p>
              <p className="text-text-muted">95 TL</p>
            </div>
          </div>
        </div>

        {/* Sağ Kolon: Adisyon Sepeti */}
        <div className="p-3 md:col-span-5 bg-surface-1/50 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            <div className="flex justify-between border-b border-dashed border-[#1A1612]/30 pb-1 text-[10px] font-bold">
              <span>ADİSYON: #0042</span>
              <span>4 KALEM</span>
            </div>
            <div className="text-[11px] space-y-1 text-text-primary">
              <div className="flex justify-between"><span>Regon Burger</span><span>260 TL</span></div>
              <div className="flex justify-between text-text-secondary"><span>Patates Büyük</span><span>95 TL</span></div>
              <div className="flex justify-between text-text-secondary"><span>Ayran 300ml</span><span>35 TL</span></div>
              <div className="flex justify-between text-text-secondary"><span>Trüflü Sos</span><span>30 TL</span></div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1A1612] space-y-2">
            <div className="flex justify-between font-bold text-sm">
              <span>TOPLAM:</span>
              <span>420 TL</span>
            </div>
            <div className="flex gap-1.5">
              <button type="button" className="w-full bg-[#1A1612] text-[#FAF8F3] py-1.5 text-[10px] font-bold uppercase tracking-wider">
                Yazıcıya Gönder [F10]
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** 3. Regon Kurye: Canlı Harita ve Filo Operasyon Paneli */
export function MockCourierMap({ className }: { className?: string }) {
  return (
    <div className={cn('border border-[#1A1612] bg-[#FAF8F3] font-mono text-xs text-text-primary shadow-[2px_2px_0px_#1A1612]', className)}>
      {/* Üst Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#1A1612] bg-surface-1 px-3 py-2 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="font-bold">REGON KURYE // CANLI FİLO</span>
          <span className="border border-[#1A1612] px-1 py-0.2 text-[9px] bg-[#FAF8F3]">6 AKTİF MOTOR</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="size-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>SUPABASE REALTIME: 24ms</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1612]">
        {/* Sol Kolon: Paket Listesi */}
        <div className="p-3 lg:col-span-5 space-y-2">
          <p className="text-[10px] uppercase font-bold text-text-secondary border-b border-dashed border-[#1A1612]/30 pb-1">
            DAĞITIM SIRASI (CANLI AKIŞ)
          </p>

          <div className="border border-[#1A1612] bg-accent-soft p-2 space-y-1">
            <div className="flex justify-between items-center font-bold">
              <span className="text-accent-ink">#0042 // YOLDA</span>
              <span className="text-[10px] bg-accent text-[#100F0D] font-bold px-1.5 py-0.2">12 DK</span>
            </div>
            <p className="text-[11px] font-semibold">Ahmet Y. - Moda Cad. No:18</p>
            <p className="text-[10px] text-text-secondary">Kurye: Mehmet K. (34 RG 841) • 420 TL Kapıda Kart</p>
          </div>

          <div className="border border-[#1A1612]/30 bg-[#FAF8F3] p-2 space-y-0.5 opacity-85">
            <div className="flex justify-between items-center font-bold text-text-secondary">
              <span>#0043 // HAZIRLANDI</span>
              <span className="text-[10px] text-text-muted">MUTFAKTA</span>
            </div>
            <p className="text-[11px]">Bahar S. - Rıhtım Sok.</p>
            <p className="text-[10px] text-text-muted">Kurye: Caner T. (34 RG 202)</p>
          </div>

          <div className="border border-[#1A1612]/30 bg-[#FAF8F3] p-2 space-y-0.5 opacity-65">
            <div className="flex justify-between items-center font-bold text-text-secondary">
              <span>#0044 // ONAY BEKLİYOR</span>
              <span className="text-[10px] text-text-muted">YENİ</span>
            </div>
            <p className="text-[11px]">Emre K. - Bahariye Cad.</p>
          </div>
        </div>

        {/* Sağ Kolon: Şematik Harita ve Rota Konsolu */}
        <div className="p-4 lg:col-span-7 bg-[#EDE8DD] flex flex-col justify-between relative overflow-hidden min-h-[220px]">
          {/* Çizgisel grid zemin */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#1A1612 1px, transparent 1px), linear-gradient(90deg, #1A1612 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Harita İşaretleri */}
          <div className="relative z-10 flex flex-col gap-6">
            {/* Restoran Başlangıç */}
            <div className="inline-flex items-center gap-2 border border-[#1A1612] bg-[#FAF8F3] px-2 py-1 max-w-fit shadow-[1px_1px_0px_#1A1612]">
              <span className="size-2 rounded-full bg-[#1A1612]" />
              <span className="font-bold text-[10px]">[ÇIKIŞ] REGON BURGER // MODA</span>
            </div>

            {/* Hareket Halindeki Kurye */}
            <div className="ml-8 inline-flex items-center gap-2 border border-accent-ink bg-accent text-[#100F0D] px-2.5 py-1 max-w-fit shadow-[2px_2px_0px_#1A1612]">
              <span className="size-2 rounded-full bg-[#100F0D] animate-ping" />
              <span className="font-bold text-[10px]">MOTOR #04 • 38 km/s (Kalan: 1.2 km)</span>
            </div>

            {/* Hedef Nokta */}
            <div className="ml-16 inline-flex items-center gap-2 border border-dashed border-[#1A1612] bg-[#FAF8F3] px-2 py-1 max-w-fit">
              <span className="size-2 rounded-full bg-emerald-600" />
              <span className="font-bold text-[10px]">[HEDEF] Moda Cad. No:18 D:4</span>
            </div>
          </div>

          {/* Alt Özet Mutabakat Çubuğu */}
          <div className="relative z-10 mt-6 pt-2 border-t border-[#1A1612] flex flex-wrap justify-between text-[10px] font-bold text-text-primary bg-surface-paper/90 p-2">
            <span>GÜNLÜK TESLİMAT: 84 PAKET</span>
            <span>MUTABAKAT: 35.280 TL</span>
            <span className="text-emerald-800">BAŞARI: %99.4</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** 4. Regon Bayi: Mal Talep ve Dağıtım Konsolu */
export function MockBayiPortal({ className }: { className?: string }) {
  return (
    <div className={cn('border border-[#1A1612] bg-[#FAF8F3] font-mono text-xs text-text-primary shadow-[2px_2px_0px_#1A1612]', className)}>
      <div className="flex items-center justify-between border-b border-[#1A1612] bg-surface-1 px-3 py-2 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="font-bold">REGON BAYİ // TALEP DAĞITIM KANALI</span>
          <span className="border border-[#1A1612]/30 px-1 py-0.2 text-[9px]">MERKEZ DEPO</span>
        </div>
        <span className="font-bold text-[10px]">BAYİ: KADIKÖY ŞUBESİ (#08)</span>
      </div>

      <div className="p-3 space-y-3">
        {/* Durum Adım Çizgisi */}
        <div className="border border-[#1A1612]/20 bg-surface-1 p-2">
          <p className="text-[10px] uppercase font-bold text-text-secondary mb-2">TALEP DURUM AKIŞI: TALEP #TR-8821</p>
          <div className="grid grid-cols-4 gap-1 text-[10px] text-center font-bold">
            <div className="border border-[#1A1612] bg-[#FAF8F3] py-1 text-text-primary">1. TALEP [✓]</div>
            <div className="border border-[#1A1612] bg-[#FAF8F3] py-1 text-text-primary">2. ONAY [✓]</div>
            <div className="border border-[#1A1612] bg-[#FAF8F3] py-1 text-text-primary">3. HAZIRLANDI [✓]</div>
            <div className="border border-accent-ink bg-accent text-[#100F0D] py-1 font-bold">4. KARGODA</div>
          </div>
        </div>

        {/* Talep Edilen Kalemler Tablosu */}
        <div className="border border-[#1A1612]/30 text-[11px]">
          <div className="grid grid-cols-12 bg-surface-1/70 px-2 py-1 font-bold border-b border-[#1A1612]/20 text-[10px]">
            <span className="col-span-6">ÜRÜN / HAMMADDE</span>
            <span className="col-span-3 text-right">MİKTAR</span>
            <span className="col-span-3 text-right">DURUM</span>
          </div>
          <div className="divide-y divide-[#1A1612]/15">
            <div className="grid grid-cols-12 px-2 py-1.5 items-center">
              <span className="col-span-6 font-semibold">Kraft Paket Servis Çantası</span>
              <span className="col-span-3 text-right">50 Koli</span>
              <span className="col-span-3 text-right text-emerald-800 font-bold">Kargoda</span>
            </div>
            <div className="grid grid-cols-12 px-2 py-1.5 items-center">
              <span className="col-span-6 font-semibold">Özel Burger Sosu (10 kg Teneke)</span>
              <span className="col-span-3 text-right">20 Teneke</span>
              <span className="col-span-3 text-right text-emerald-800 font-bold">Kargoda</span>
            </div>
            <div className="grid grid-cols-12 px-2 py-1.5 items-center text-text-secondary">
              <span className="col-span-6">Termal Rulo Kâğıt (80mm x 40m)</span>
              <span className="col-span-3 text-right">10 Kutu</span>
              <span className="col-span-3 text-right text-emerald-800 font-bold">Kargoda</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] pt-1 text-text-secondary">
          <span>Kargo Takip No: YRT-884192014</span>
          <span>Tahmini Varış: 28.10.2026 Sabah</span>
        </div>
      </div>
    </div>
  )
}

/** 5. Regon Market: Mobil Telefon Çerçevesi İçinde Mahalle Pazarı */
export function MockMarketPhone({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto max-w-[280px] sm:max-w-[300px] border-2 border-[#1A1612] bg-[#FAF8F3] font-mono text-xs text-text-primary p-2 shadow-[2px_2px_0px_#1A1612]', className)}>
      {/* Telefon Üst Hoparlör */}
      <div className="flex justify-center mb-2">
        <div className="h-1 w-12 bg-[#1A1612] rounded-full" />
      </div>

      {/* App Bar */}
      <div className="border border-[#1A1612] bg-surface-1 p-2 mb-2">
        <div className="flex justify-between items-center text-[10px] font-bold">
          <span>REGON MARKET</span>
          <span className="text-accent-ink font-bold">KADIKÖY</span>
        </div>
        <p className="text-[9px] text-text-secondary mt-0.5">Mahalle pazar yeri & paket servis</p>
      </div>

      {/* Restoran Listesi */}
      <div className="space-y-1.5 mb-2">
        <div className="border border-[#1A1612]/30 p-2 bg-[#FAF8F3]">
          <div className="flex justify-between items-center font-bold text-[11px]">
            <span>Moda Burger Evi</span>
            <span className="text-[9px] text-emerald-800">20-30 dk</span>
          </div>
          <p className="text-[10px] text-text-secondary">Burger · Patates · İçecek</p>
          <div className="mt-1 flex justify-between text-[9px] text-text-muted">
            <span>Min. 150 TL</span>
            <span className="text-accent-ink font-bold">Komisyon: %12</span>
          </div>
        </div>

        <div className="border border-[#1A1612]/30 p-2 bg-[#FAF8F3]">
          <div className="flex justify-between items-center font-bold text-[11px]">
            <span>Bahariye Fırını</span>
            <span className="text-[9px] text-emerald-800">15-20 dk</span>
          </div>
          <p className="text-[10px] text-text-secondary">Kahvaltı · Ekmek · Poğaça</p>
          <div className="mt-1 flex justify-between text-[9px] text-text-muted">
            <span>Min. 100 TL</span>
            <span className="text-accent-ink font-bold">Komisyon: %10</span>
          </div>
        </div>

        <div className="border border-[#1A1612]/30 p-2 bg-[#FAF8F3] opacity-80">
          <div className="flex justify-between items-center font-bold text-[11px]">
            <span>Moda Çarşı Manavı</span>
            <span className="text-[9px] text-emerald-800">25-35 dk</span>
          </div>
          <p className="text-[10px] text-text-secondary">Taze Meyve · Sebze</p>
        </div>
      </div>

      {/* Sepet Çubuğu */}
      <div className="border border-[#1A1612] bg-[#1A1612] text-[#FAF8F3] p-2 flex justify-between items-center text-[10px] font-bold">
        <span>SEPETİM (2 KALEM)</span>
        <span>340 TL →</span>
      </div>
    </div>
  )
}
