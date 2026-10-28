import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, projects } from '@/content/projects'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { ProjectIcon } from '@/components/ui/Icons'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return {}

  return {
    title: `${project.name} | ${project.tagline} | Regon Teknoloji`,
    description: `${project.descriptionShort} ${project.problemSolved}`,
    openGraph: {
      title: `${project.name} — Regon Teknoloji`,
      description: project.descriptionShort,
      type: 'article',
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <div className="py-12 sm:py-20 bg-background text-text-primary">
      <Container>
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Geri Dönüş Linki */}
          <Link
            href="/#urunler"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-secondary hover:text-accent-ink"
          >
            <span>←</span>
            <span>Tüm Ürünler ve Operasyon Masasına Dön</span>
          </Link>

          {/* Başlık Kartı */}
          <div className="border border-[#1A1612] bg-surface-paper p-6 sm:p-10 lg:p-12 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase text-accent-ink font-bold">
                {`// SİSTEM DOKÜMANI // ${project.stepLabel}`}
              </span>
              <Badge variant={project.status} />
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-text-primary">
                {project.name}
              </h1>
              {project.subname && (
                <p className="font-mono text-xs text-text-muted">
                  {project.subname}
                </p>
              )}
              <p className="font-mono text-base sm:text-lg font-semibold text-accent-ink border-l-2 border-accent-ink pl-3 py-1">
                {project.tagline}
              </p>
            </div>

            {/* Kime Hitap Eder & Hangi Sorunu Çözer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-dashed border-[#1A1612]/30">
              <div className="border border-[#1A1612]/20 bg-surface-1 p-4 space-y-1">
                <strong className="font-mono uppercase text-accent-ink block font-bold">
                  KİME HİTAP EDER:
                </strong>
                <p className="text-text-secondary leading-relaxed">
                  {project.targetAudience}
                </p>
              </div>
              <div className="border border-[#1A1612]/20 bg-surface-1 p-4 space-y-1">
                <strong className="font-mono uppercase text-accent-ink block font-bold">
                  HANGİ SORUNU ÇÖZER:
                </strong>
                <p className="text-text-secondary leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
            </div>

            {/* Uzun Açıklama */}
            <div className="border-t border-[#1A1612]/20 pt-4">
              <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-text-secondary">
                {project.descriptionLong}
              </p>
            </div>
          </div>

          {/* Ana Hero Görseli */}
          <div className="space-y-2">
            <PhotoSlot
              no={project.heroSlotNo}
              caption={`// Slot ${String(project.heroSlotNo).padStart(2, '0')}: ${project.name} Ana Operasyon Görseli`}
            />
          </div>

          {/* Nasıl Çalışır Stepper */}
          <div className="border border-[#1A1612] bg-surface-paper p-6 sm:p-10 space-y-6">
            <p className="font-mono text-xs uppercase font-bold text-accent-ink">
              {'// NASIL ÇALIŞIR: SAHADAKİ OPERASYONEL ADIMLAR'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.workflowSteps.map((ws) => (
                <div
                  key={ws.step}
                  className="flex items-start gap-3 border border-[#1A1612]/20 bg-surface-1 p-4"
                >
                  <span className="shrink-0 flex size-7 items-center justify-center border border-[#1A1612] bg-accent font-mono text-xs font-black text-[#100F0D]">
                    {ws.step}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-display text-sm font-bold text-text-primary">
                      {ws.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {ws.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tüm Teknik Özellikler */}
          <div className="border border-[#1A1612] bg-surface-paper p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1A1612]/20 pb-3">
              <h2 className="font-display text-xl font-bold">
                Tüm Teknik Özellikler ve Mimari Kapasite
              </h2>
              <span className="font-mono text-xs text-text-muted">
                {project.features.length} Kalem
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.features.map((f, idx) => (
                <div
                  key={f.label}
                  className="border border-[#1A1612]/20 bg-surface-1 p-4 space-y-1.5"
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-text-primary">
                    <span className="text-accent-ink">{String(idx + 1).padStart(2, '0')}.</span>
                    <ProjectIcon name={f.icon} />
                    <span>{f.label}</span>
                  </div>
                  {f.description && (
                    <p className="text-xs text-text-secondary leading-relaxed pl-5">
                      {f.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Ekran Görüntüleri ve Mobil Slotları */}
          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold">
              Ekran Görüntüleri ve Arayüz Galerisi
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.detailSlotNos.map((slotNo) => (
                <PhotoSlot
                  key={slotNo}
                  no={slotNo}
                  caption={`// Slot ${String(slotNo).padStart(2, '0')}`}
                />
              ))}
            </div>
          </div>

          {/* Alt Aksiyon Butonları */}
          <div className="flex flex-wrap items-center justify-between gap-4 border border-[#1A1612] bg-surface-1 p-6 font-mono text-xs">
            <div className="space-y-1">
              <p className="font-bold text-text-primary">
                Bu ürünü işletmenizde canlıya almak ister misiniz?
              </p>
              <p className="text-text-muted">
                Doğrudan teknik ekiple iletişime geçerek yerinde kurulum ve demo talep edin.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/#iletisim"
                className="border border-[#1A1612] bg-[#FAF8F3] px-5 py-2.5 uppercase font-bold text-text-primary hover:bg-[#1A1612] hover:text-[#FAF8F3] transition-colors"
              >
                İletişim Masası
              </Link>
              <Link
                href="/portal"
                className="border border-[#1A1612] bg-accent px-5 py-2.5 uppercase font-bold text-[#100F0D] hover:bg-accent-hover transition-colors shadow-[2px_2px_0px_#1A1612]"
              >
                Müşteri Portalı
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
