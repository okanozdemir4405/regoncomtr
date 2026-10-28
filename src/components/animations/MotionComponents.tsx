'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import { MOTION, prefersReducedMotion } from '@/lib/animations'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ============================================================
// 1. REVEAL — Scroll ile yukarı doğru zarifçe belirme
// ============================================================
interface RevealProps {
  children: React.ReactNode
  delay?: number
  distance?: number
  className?: string
  as?: React.ElementType
}

export function Reveal({
  children,
  delay = 0,
  distance = MOTION.distance.md,
  className,
  as: Component = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: distance },
        {
          opacity: 1,
          y: 0,
          duration: MOTION.duration.normal,
          delay,
          ease: MOTION.ease.out,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [delay, distance])

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  )
}

// ============================================================
// 2. SPLIT LINES — Başlık satırlarının satır satır açılması
// ============================================================
interface SplitLinesProps {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
}

export function SplitLines({ lines, className, lineClassName, delay = 0 }: SplitLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el || prefersReducedMotion()) return

    const lineElements = el.querySelectorAll('.split-line-inner')
    if (!lineElements.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineElements,
        { y: '110%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: MOTION.duration.slow,
          delay,
          stagger: MOTION.stagger.normal,
          ease: MOTION.ease.smooth,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [delay, lines])

  return (
    <div ref={containerRef} className={cn('overflow-hidden', className)}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden leading-tight">
          <span className={cn('split-line-inner block will-change-transform', lineClassName)}>
            {line}
          </span>
        </span>
      ))}
    </div>
  )
}

// ============================================================
// 3. STAGGER — Liste elemanlarının sırayla belirmesi
// ============================================================
interface StaggerProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function Stagger({
  children,
  className,
  stagger = MOTION.stagger.fast,
  delay = 0,
}: StaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el || prefersReducedMotion()) return

    const items = el.children
    if (!items.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: MOTION.distance.sm },
        {
          opacity: 1,
          y: 0,
          duration: MOTION.duration.normal,
          delay,
          stagger,
          ease: MOTION.ease.out,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [delay, stagger])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

// ============================================================
// 4. COUNT UP — Scroll ile sayan sayaç
// ============================================================
interface CountUpProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({
  end,
  prefix = '',
  suffix = '',
  duration = MOTION.duration.slow,
  className,
}: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    if (prefersReducedMotion()) {
      el.textContent = `${prefix}${end}${suffix}`
      return
    }

    const obj = { val: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: end,
        duration,
        ease: MOTION.ease.out,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`
        },
      })
    }, el)

    return () => ctx.revert()
  }, [end, prefix, suffix, duration])

  return (
    <span ref={spanRef} className={cn('tabular-nums font-mono', className)}>
      {prefix}0{suffix}
    </span>
  )
}

// ============================================================
// 5. PARALLAX LAYER — Sadece transform ile hafif parallax
// ============================================================
interface ParallaxLayerProps {
  children: React.ReactNode
  speed?: number // -0.5 ile 0.5 arası
  className?: string
}

export function ParallaxLayer({ children, speed = 0.15, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const mm = gsap.matchMedia()

    // Sadece 768px üzeri masaüstü ve tablet cihazlarda çalışır
    mm.add('(min-width: 768px)', () => {
      gsap.to(el, {
        y: () => -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => mm.revert()
  }, [speed])

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  )
}

// ============================================================
// 6. LINE DRAW — Kesik çizgilerin çizilerek ilerlemesi
// ============================================================
interface LineDrawProps {
  direction?: 'horizontal' | 'vertical'
  className?: string
}

export function LineDraw({ direction = 'horizontal', className }: LineDrawProps) {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el || prefersReducedMotion()) return

    const isHorizontal = direction === 'horizontal'
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          scaleX: isHorizontal ? 0 : 1,
          scaleY: isHorizontal ? 1 : 0,
          transformOrigin: isHorizontal ? 'left center' : 'top center',
        },
        {
          scaleX: 1,
          scaleY: 1,
          duration: MOTION.duration.crawl,
          ease: MOTION.ease.inOut,
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [direction])

  return (
    <div
      ref={lineRef}
      className={cn(
        direction === 'horizontal'
          ? 'h-[1px] w-full border-t border-dashed border-[#1A1612]/30'
          : 'w-[1px] h-full border-l border-dashed border-[#1A1612]/30',
        'will-change-transform',
        className,
      )}
    />
  )
}

// ============================================================
// 7. MARQUEE — Yavaş ve akıcı operasyon şeridi
// ============================================================
interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  className?: string
  repeat?: number
}

export function Marquee({ children, speed = 25, className, repeat = 3 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track || prefersReducedMotion()) return

    const totalWidth = track.scrollWidth / repeat

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: speed,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      tween.kill()
    }
  }, [speed, repeat])

  return (
    <div className={cn('overflow-hidden whitespace-nowrap', className)}>
      <div ref={trackRef} className="inline-flex items-center will-change-transform">
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="inline-flex items-center shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
