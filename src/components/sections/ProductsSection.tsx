'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { ProductDetailDrawer } from '@/components/ui/ProductDetailDrawer'
import { projects } from '@/content/projects'
import type { Project } from '@/types/project'
import { cn } from '@/lib/utils'

export function ProductsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeSlug, setActiveSlug] = useState<string>(projects[0].slug)
  const productRefs = useRef<Record<string, HTMLElement | null>>({})

  // Scroll takibi ile aktif ürünü ve sipariş yolculuğu durumunu güncelle
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      for (let i = projects.length - 1; i >= 0; i--) {
        const p = projects[i]
        const el = productRefs.current[p.slug]
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSlug(p.slug)
          return
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const activeProject = projects.find((p) => p.slug === activeSlug) ?? projects[0]

  return (
    <section id="urunler" className="relative py-20 sm:py-28 border-b border-[#1A1612]/20 bg-background">
      <Container>
        {/* Bölüm Başlığı — Editoryal ve Sola Yaslı */}
        <div className="mb-14 border-b border-[#1A1612] pb-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent-ink mb-2">
                {'// 02 · ÜRÜN MİMARİSİ & SİPARİŞ YOLCULUĞU'}
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-text-primary">
                Adisyondan kapıya dört bağımsız yazılım.
              </h2>
            </div>
            <p className="font-mono text-xs text-text-secondary max-w-sm">
              Siparişin yolculuğu tek bir operasyon masasında birleşir. İlgilendiğiniz ürünün detaylarını sayfa içi akıcı çekmeceden tek dokunuşla inceleyebilirsiniz.
            </p>
          </div>
        </div>

        {/* Ana Düzen: Sol Pinned Sipariş Yolculuğu Konsolu, Sağ Kompakt Vitrin Kartları */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Sol Kolon: Pinned Sipariş Yolculuğu Konsolu (Desktop'ta Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <div className="border border-[#1A1612] bg-surface-paper p-5 space-y-4 shadow-[2px_2px_0px_#1A1612]">
              <div className="flex items-center justify-between border-b border-dashed border-[#1A1612]/30 pb-3">
                <span className="font-mono text-xs font-bold text-accent-ink">
                  {'// SİPARİŞ #0042 TAKİBİ'}
                </span>
                <span className="size-2 rounded-full bg-accent animate-pulse" />
              </div>

              {/* Aktif Durum Damgası */}
              <div className="border-l-2 border-accent-ink bg-surface-1 p-3">
                <p className="font-mono text-[10px] uppercase text-text-muted">GÜNCEL OPERASYON ADIMI:</p>
                <p className="font-mono text-xs font-bold text-text-primary pt-0.5">
                  {activeProject.orderJourneyState}
                </p>
              </div>

              {/* 4 Ürün Hızlı Seçim Stepper'ı */}
              <nav aria-label="Sipariş yolculuğu adımları" className="space-y-1.5 pt-1">
                {projects.map((p, idx) => {
                  const isActive = p.slug === activeSlug
                  return (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => {
                        const target = productRefs.current[p.slug]
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }
                      }}
                      className={cn(
                        'w-full text-left px-3 py-2 font-mono text-xs flex items-center justify-between transition-colors border',
                        isActive
                          ? 'border-[#1A1612] bg-[#1A1612] text-[#FAF8F3] font-bold'
                          : 'border-transparent text-text-secondary hover:bg-surface-1 hover:text-text-primary',
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span className={cn('text-[10px]', isActive ? 'text-accent' : 'text-text-muted')}>
                          0{idx + 1}.
                        </span>
                        <span>{p.name}</span>
                      </div>
                      {p.isStar && (
                        <span className={cn('text-[10px] font-bold', isActive ? 'text-accent' : 'text-accent-ink')}>
                          ★ VİTRİN
                        </span>
                      )}
                    </button>
                  )
                })}
              </nav>

              <div className="pt-2 border-t border-dashed border-[#1A1612]/20 text-[11px] font-mono text-text-secondary">
                <span>* Her ürün bağımsız lisanslanabilir ve çalışabilir.</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Kompakt & Vurucu Vitrin Kartları (Minimal Scroll ile 4 Ürün) */}
          <div className="lg:col-span-8 space-y-8">
            {projects.map((product) => {
              const isCurrent = product.slug === activeSlug
              return (
                <article
                  key={product.slug}
                  ref={(el) => {
                    productRefs.current[product.slug] = el
                  }}
                  id={product.slug}
                  className={cn(
                    'scroll-mt-28 border transition-all duration-200 bg-surface-paper p-6 sm:p-8 relative',
                    product.isStar ? 'border-2 border-[#1A1612]' : 'border-[#1A1612]/30',
                    isCurrent && 'shadow-[4px_4px_0px_#1A1612]',
                  )}
                >
                  {/* Yıldız Rozeti */}
                  {product.isStar && (
                    <div className="absolute -top-3.5 left-6 bg-accent px-3 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider text-[#100F0D] border border-[#1A1612]">
                      ★ VİTRİNİN YILDIZI // ANA DAĞITIM MOTORU
                    </div>
                  )}

                  <div className="space-y-5">
                    {/* Üst Bilgi Satırı */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-[#1A1612]/25 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-accent-ink">
                          {product.stepLabel}
                        </span>
                        {product.subname && (
                          <span className="font-mono text-[10px] text-text-muted hidden sm:inline">
                            [ {product.subname} ]
                          </span>
                        )}
                      </div>
                      <Badge variant={product.status} />
                    </div>

                    {/* Başlık ve Vurucu Slogan */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:items-baseline">
                      <div className="sm:col-span-5">
                        <h3 className="font-display text-2xl sm:text-3xl font-black text-text-primary">
                          {product.name}
                        </h3>
                      </div>
                      <div className="sm:col-span-7">
                        <p className="font-mono text-xs sm:text-sm font-semibold text-text-primary border-l-2 border-accent-ink pl-3 py-0.5">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Somut Kısa Açıklama */}
                    <p className="text-xs sm:text-sm leading-relaxed text-text-secondary">
                      {product.descriptionShort}
                    </p>

                    {/* Kompakt Vitrin Hero Slot */}
                    <div className="pt-1">
                      <PhotoSlot
                        no={product.heroSlotNo}
                        caption={`// Slot ${String(product.heroSlotNo).padStart(2, '0')}: ${product.name} Ana Vitrin Görseli`}
                      />
                    </div>

                    {/* Öne Çıkan 3 Teknik Özellik Hapı */}
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                      {product.features.slice(0, 3).map((f) => (
                        <span
                          key={f.label}
                          className="border border-[#1A1612]/20 bg-surface-1 px-2.5 py-1 text-text-primary"
                        >
                          {f.label}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="border border-dashed border-[#1A1612]/30 px-2 py-1 text-accent-ink font-semibold">
                          +{product.features.length - 3} Teknik Detay
                        </span>
                      )}
                    </div>

                    {/* Aksiyon Butonları: Drawer Açılışı & SEO Sayfası */}
                    <div className="pt-3 border-t border-[#1A1612]/20 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(product)}
                        className="inline-flex items-center gap-2 border border-[#1A1612] bg-[#1A1612] px-5 py-2.5 font-mono text-xs uppercase font-bold text-[#FAF8F3] hover:bg-accent hover:border-accent hover:text-[#100F0D] transition-colors shadow-[2px_2px_0px_#1A1612] cursor-pointer"
                      >
                        <span>Teknik Detaylar & Akış</span>
                        <span>→</span>
                      </button>

                      <Link
                        href={`/projeler/${product.slug}`}
                        className="font-mono text-xs text-text-secondary hover:text-accent-ink underline underline-offset-4"
                      >
                        Kalıcı Rota Sayfası
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Container>

      {/* Kademeli Genişletilmiş Çekmece / Modal */}
      <ProductDetailDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
