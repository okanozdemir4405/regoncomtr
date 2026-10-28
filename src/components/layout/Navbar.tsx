'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import tr from '@/i18n/tr'

const navLinks = [
  { href: '#biz-kimiz', label: 'Biz Kimiz', code: '01', id: 'biz-kimiz' },
  { href: '#urunler', label: tr.nav.projects, code: '02', id: 'urunler' },
  { href: '#nasil-calisiyoruz', label: 'Nasıl Çalışıyoruz', code: '03', id: 'nasil-calisiyoruz' },
  { href: '#iletisim', label: tr.nav.contact, code: '04', id: 'iletisim' },
]

/** REGON Wordmark — Fiş ve operasyon damgası stili */
function RegonWordmark({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <span className="font-display text-2xl font-black tracking-tight text-text-primary">
        REGON
      </span>
      <span className="hidden font-mono text-[10px] uppercase tracking-wider text-text-secondary sm:inline-block">
        {'// TEKNOLOJİ'}
      </span>
    </div>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      {open ? (
        <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="square" d="M3 6h18M3 12h18M3 18h18" />
      )}
    </svg>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')

  // Aktif bölümü scroll durumuna göre belirle
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollY = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i]
        if (sec && sec.offsetTop <= scrollY) {
          setActiveId(navLinks[i].id)
          return
        }
      }
      if (window.scrollY < 200) {
        setActiveId('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[#1A1612]/20 bg-background">
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Ana gezinme"
        >
          {/* Logo */}
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink"
          >
            <RegonWordmark />
          </Link>

          {/* Masaüstü linkler */}
          <ul className="hidden items-center gap-6 md:flex" role="list">
            {navLinks.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-colors',
                      isActive
                        ? 'text-accent-ink font-bold border-b border-accent-ink'
                        : 'text-text-secondary hover:text-text-primary',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink',
                    )}
                  >
                    <span
                      className={cn(
                        'text-[10px] transition-opacity',
                        isActive ? 'opacity-100 text-accent-ink' : 'opacity-0 text-accent-ink group-hover:opacity-100',
                      )}
                    >
                      [{link.code}]
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Masaüstü CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/portal"
              className={cn(
                'inline-flex h-9 items-center border border-[#1A1612] bg-[#FAF8F3] px-3.5 font-mono text-xs uppercase tracking-wider text-text-primary',
                'transition-colors hover:bg-[#1A1612] hover:text-[#FAF8F3]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink',
              )}
            >
              {tr.nav.portal}
            </Link>
          </div>

          {/* Mobil hamburger */}
          <button
            type="button"
            className={cn(
              'flex size-11 items-center justify-center border border-[#1A1612]/30 text-text-primary md:hidden',
              'hover:bg-surface-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink',
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? tr.nav.menuClose : tr.nav.menuOpen}
          >
            <MenuIcon open={open} />
          </button>
        </nav>

        {/* Mobil menü */}
        <div
          id="mobile-menu"
          className={cn(
            'overflow-hidden transition-all duration-200 ease-in-out md:hidden',
            open ? 'max-h-80 border-t border-[#1A1612]/15 py-3' : 'max-h-0',
          )}
        >
          <ul className="flex flex-col gap-2" role="list">
            {navLinks.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'flex min-h-11 items-center justify-between border-b border-dashed border-[#1A1612]/15 px-2 font-mono text-xs uppercase tracking-wider',
                      isActive ? 'text-accent-ink font-bold bg-surface-1' : 'text-text-primary hover:bg-surface-1',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-text-muted">[{link.code}]</span>
                  </a>
                </li>
              )
            })}
            <li className="pt-2">
              <Link
                href="/portal"
                className="flex min-h-11 items-center justify-center border border-[#1A1612] bg-[#1A1612] font-mono text-xs uppercase tracking-wider text-[#FAF8F3]"
                onClick={() => setOpen(false)}
              >
                {tr.nav.portal}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}
