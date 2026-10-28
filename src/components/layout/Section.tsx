import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: React.ElementType
}

/**
 * Sayfa bölümleri için standart dikey boşluk sağlar.
 */
export function Section({ children, className, id, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={cn('py-16 sm:py-20 lg:py-28', className)}>
      {children}
    </Tag>
  )
}
