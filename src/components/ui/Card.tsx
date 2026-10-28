import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

/**
 * Operasyon masası kart bileşeni — temiz kâğıt yüzey, 1px net kenarlık, sıfır cam efekti
 */
export function Card({ children, className, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={cn(
        'border border-[#1A1612]/25 bg-surface-paper rounded-none text-text-primary',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-5 sm:p-6', className)}>{children}</div>
}
