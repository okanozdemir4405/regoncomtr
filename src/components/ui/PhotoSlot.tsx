import Image from 'next/image'
import { getPhotoSlot } from '@/content/photoSlots'
import { cn } from '@/lib/utils'

interface PhotoSlotProps {
  no: number
  ratio?: string
  alt?: string
  caption?: string
  className?: string
  priority?: boolean
}

// En boy oranı eşleme tablosu
const ratioClassMap: Record<string, string> = {
  '16/10': 'aspect-[16/10]',
  '16/9': 'aspect-[16/9]',
  '4/5': 'aspect-[4/5]',
  '9/16': 'aspect-[9/16]',
  '1/1': 'aspect-square',
}

export function PhotoSlot({
  no,
  ratio: overrideRatio,
  alt: overrideAlt,
  caption,
  className,
  priority = false,
}: PhotoSlotProps) {
  const slot = getPhotoSlot(no)

  if (!slot) {
    return (
      <div className="border border-red-500 bg-red-50 p-4 font-mono text-xs text-red-700">
        [HATA: Slot #{no} photoSlots.ts içinde tanımlanmamış!]
      </div>
    )
  }

  const effectiveRatio = overrideRatio ?? slot.ratio
  const aspectClass = ratioClassMap[effectiveRatio] ?? 'aspect-[16/10]'
  const hasImage = Boolean(slot.imagePath && slot.imagePath.trim() !== '')
  const showLabels = process.env.NEXT_PUBLIC_SHOW_SLOT_LABELS !== 'false'

  return (
    <figure className={cn('relative w-full overflow-hidden text-text-primary', className)}>
      <div
        className={cn(
          'relative w-full border border-[#1A1612]/25 bg-surface-paper transition-colors',
          aspectClass,
          !hasImage && 'border-dashed hover:border-[#1A1612]/50',
        )}
      >
        {hasImage ? (
          /* Görsel yüklendiğinde next/image ile görüntüleme */
          <Image
            src={slot.imagePath}
            alt={overrideAlt ?? slot.description}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover"
          />
        ) : (
          /* Görsel henüz yüklenmemişse: Bilgilendirici Operasyon Çerçevesi */
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 select-none">
            {/* Üst Çubuk: Numara ve Görsel Türü */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="border border-[#1A1612] bg-[#1A1612] px-2 py-0.5 font-mono text-xs font-bold uppercase text-[#FAF8F3]">
                  FOTO {String(slot.no).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10px] font-bold text-accent-ink uppercase tracking-wider">
                  [{slot.type}]
                </span>
              </div>
              <span className="font-mono text-[10px] text-text-muted">
                {effectiveRatio} · {slot.pixelSize}
              </span>
            </div>

            {/* Orta: Büyük Numara Damgası */}
            <div className="my-auto text-center opacity-10">
              <span className="font-display text-5xl sm:text-7xl font-black">
                #{String(slot.no).padStart(2, '0')}
              </span>
            </div>

            {/* Alt: Somut "Ne Konmalı" Açıklaması */}
            {showLabels && (
              <div className="border-t border-dashed border-[#1A1612]/20 pt-2.5">
                <p className="line-clamp-3 text-[11px] leading-relaxed text-text-secondary sm:text-xs">
                  <strong className="text-text-primary font-semibold font-mono text-[10px] uppercase block sm:inline sm:mr-1">
                    BEKLENEN GÖRSEL:
                  </strong>
                  {slot.description}
                </p>
                <div className="mt-1 flex items-center justify-between text-[9px] font-mono text-text-muted">
                  <span>Yol: public/images/slots/slot-{String(slot.no).padStart(2, '0')}.webp</span>
                  <span className="text-accent-ink font-bold">photoSlots.ts</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 font-mono text-[11px] text-text-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
