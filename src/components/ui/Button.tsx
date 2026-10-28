import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#1A1612] text-[#FAF8F3] hover:bg-[#2C2620] border border-[#1A1612] active:translate-y-[1px]',
  accent:
    'bg-accent text-[#100F0D] hover:bg-accent-hover border border-accent active:translate-y-[1px] font-bold',
  secondary:
    'bg-[#EDE8DD] text-[#1A1612] hover:bg-[#E2DBCF] border border-[#1A1612]/30 active:translate-y-[1px]',
  outline:
    'bg-transparent text-[#1A1612] border border-[#1A1612] hover:bg-[#1A1612]/5 active:translate-y-[1px]',
  ghost:
    'bg-transparent text-[#1A1612] hover:bg-[#1A1612]/5 active:translate-y-[1px]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5 font-mono',
  md: 'h-10 px-4 text-xs font-mono uppercase tracking-wider gap-2',
  lg: 'h-12 px-6 text-sm font-mono uppercase tracking-wider gap-2.5',
}

/**
 * Operasyon masası butonu — keskin hatlar, 1px sınır, net basma hissi, WCAG AA kontrastlı
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex cursor-pointer items-center justify-center font-semibold rounded-none transition-colors duration-100',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-40',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
