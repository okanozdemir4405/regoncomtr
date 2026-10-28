import { cn } from '@/lib/utils'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'
type HeadingSize = '4xl' | '3xl' | '2xl' | 'xl' | 'lg'

interface HeadingProps {
  as?: HeadingLevel
  size?: HeadingSize
  children: React.ReactNode
  className?: string
}

const sizeClasses: Record<HeadingSize, string> = {
  '4xl': 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight',
  '3xl': 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight',
  '2xl': 'text-2xl sm:text-3xl font-bold tracking-tight leading-snug',
  xl: 'text-xl sm:text-2xl font-semibold tracking-tight',
  lg: 'text-lg sm:text-xl font-semibold',
}

export function Heading({ as: Tag = 'h2', size = '2xl', children, className }: HeadingProps) {
  return (
    <Tag className={cn('text-text-primary', sizeClasses[size], className)}>
      {children}
    </Tag>
  )
}
