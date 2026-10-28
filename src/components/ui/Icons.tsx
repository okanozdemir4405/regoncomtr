import { cn } from '@/lib/utils'

interface IconProps {
  className?: string
}

// Tutarlı 24x24 çizgisel (stroke-based) SVG ikon seti
// Emoji KULLANILMAZ. 1.75px tekdüze çizgi kalınlığı.

export function IconPhone({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

export function IconPrinter({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <path d="M6 9V2h12v7" />
      <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
      <path d="M6 14h12v8H6z" />
    </svg>
  )
}

export function IconTerminal({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <rect x="2" y="3" width="20" height="14" rx="0" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 8l3 3-3 3" />
      <path d="M12 14h5" />
    </svg>
  )
}

export function IconMap({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  )
}

export function IconMotorcycle({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <circle cx="5" cy="16" r="3" />
      <circle cx="19" cy="16" r="3" />
      <path d="M12 17h4l3-7h-5l-2 4h-4" />
      <path d="M16 10l-2-4h-3" />
    </svg>
  )
}

export function IconPanels({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <rect x="3" y="3" width="18" height="18" rx="0" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  )
}

export function IconReconciliation({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <rect x="2" y="4" width="20" height="16" rx="0" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
      <line x1="14" y1="15" x2="18" y2="15" />
    </svg>
  )
}

export function IconBranch({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 10h1" />
      <path d="M14 10h1" />
      <path d="M9 14h1" />
      <path d="M14 14h1" />
      <path d="M10 21v-4h4v4" />
    </svg>
  )
}

export function IconBox({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

export function IconTruck({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

export function IconMarketplace({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

export function IconRealtime({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

export function IconMobileDevice({ className }: IconProps) {
  return (
    <svg className={cn('size-5 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="square">
      <rect x="5" y="2" width="14" height="20" rx="0" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg className={cn('size-4 stroke-current', className)} fill="none" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="square">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function ProjectIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'Phone':
      return <IconPhone className={className} />
    case 'Printer':
      return <IconPrinter className={className} />
    case 'Terminal':
      return <IconTerminal className={className} />
    case 'Map':
      return <IconMap className={className} />
    case 'Motorcycle':
      return <IconMotorcycle className={className} />
    case 'Panels':
      return <IconPanels className={className} />
    case 'Reconciliation':
      return <IconReconciliation className={className} />
    case 'Branch':
      return <IconBranch className={className} />
    case 'Box':
      return <IconBox className={className} />
    case 'Truck':
      return <IconTruck className={className} />
    case 'Marketplace':
      return <IconMarketplace className={className} />
    case 'Realtime':
      return <IconRealtime className={className} />
    case 'MobileDevice':
      return <IconMobileDevice className={className} />
    case 'Check':
    default:
      return <IconCheck className={className} />
  }
}
