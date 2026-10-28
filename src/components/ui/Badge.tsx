import { cn } from '@/lib/utils'

type BadgeVariant = 'live' | 'development' | 'deprecated' | 'default'

interface BadgeProps {
  children?: React.ReactNode
  variant?: BadgeVariant
  className?: string
  /** Eğer true ise status 'development' olsa bile gösterilir. Varsayılan false: bilinmeyen/geliştirmede olan rozetler gizlenir */
  showWhenDev?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  live: 'border-emerald-700 bg-emerald-100 text-emerald-900',
  development: 'border-amber-700 bg-amber-100 text-amber-900',
  deprecated: 'border-[#1A1612]/30 bg-[#1A1612]/5 text-[#1A1612]/70',
  default: 'border-[#1A1612] bg-[#FAF8F3] text-[#1A1612]',
}

const defaultLabels: Record<BadgeVariant, string> = {
  live: 'CANLI',
  development: 'GELİŞTİRMEDE',
  deprecated: 'ESKİ SÜRÜM',
  default: 'BİLGİ',
}

export function Badge({ children, variant = 'default', className, showWhenDev = false }: BadgeProps) {
  // Kural: Dört ürüne de otomatik "Geliştirmede" yazma.
  // Bilmediğin her ürün için rozeti göstermeyen varsayılan uygula.
  if (variant === 'development' && !showWhenDev) {
    return null
  }

  const content = children ?? defaultLabels[variant]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[11px] font-medium tracking-wide uppercase',
        'rounded-none',
        variantClasses[variant],
        className,
      )}
    >
      <span
        className={cn('size-1.5 rounded-full', {
          'bg-emerald-600': variant === 'live',
          'bg-amber-600': variant === 'development',
          'bg-[#1A1612]/40': variant === 'deprecated' || variant === 'default',
        })}
        aria-hidden="true"
      />
      {content}
    </span>
  )
}
