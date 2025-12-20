import Link from 'next/link'
import Button from '@/components/ui/Button'
import VideoPlaceholder from './VideoPlaceholder'

interface BreadcrumbItem {
  label: string
  href: string
}

interface CourseHeroProps {
  breadcrumb: BreadcrumbItem[]
  label: string
  title: string
  subtitle: string
  kurzbeschreibung: string
  bewertung: {
    stars: number
    rating: string
    teilnehmer: number
  }
  preis: {
    aktuell: string
    alt?: string
    abo?: string
  }
  cta: { text: string; href: string }
  vertrauen: string[]
  videoPreview: {
    title: string
    dauer: string
    videoSrc?: string
  }
}

export default function CourseHero({
  breadcrumb,
  label,
  title,
  subtitle,
  kurzbeschreibung,
  bewertung,
  preis,
  cta,
  vertrauen,
  videoPreview,
}: CourseHeroProps) {
  return (
    <div className="bg-background-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-dark/70">
            {breadcrumb.map((item, idx) => (
              <li key={idx} className="flex items-center">
                {idx > 0 && <span className="mx-2">/</span>}
                {idx === breadcrumb.length - 1 ? (
                  <span className="font-semibold text-dark">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Zwei Spalten Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Linke Spalte: Info */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {label}
            </div>
            <h1 className="mb-3 font-display text-4xl font-normal text-dark md:text-5xl">{title}</h1>
            <p className="mb-4 text-xl text-dark/80">{subtitle}</p>
            <p className="mb-6 text-dark/80">{kurzbeschreibung}</p>

            {/* Bewertung */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: bewertung.stars }).map((_, i) => (
                  <span key={i} className="text-primary">
                    ⭐
                  </span>
                ))}
              </div>
              <span className="font-semibold text-dark">{bewertung.rating}</span>
              <span className="text-dark/70">·</span>
              <span className="text-dark/70">{bewertung.teilnehmer} Teilnehmer</span>
            </div>

            {/* Preis */}
            <div className="mb-6">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-3xl font-semibold text-primary">{preis.aktuell}</span>
                {preis.alt && (
                  <span className="text-lg text-dark/60 line-through">{preis.alt}</span>
                )}
                {preis.abo && (
                  <>
                    <span className="text-lg text-dark/70">·</span>
                    <span className="text-lg text-dark/80">{preis.abo}</span>
                  </>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="mb-6">
              <Button href={cta.href} variant="primary" className="w-full md:w-auto">
                {cta.text}
              </Button>
            </div>

            {/* Vertrauen */}
            <div className="flex flex-wrap gap-4 text-sm text-dark/70">
              {vertrauen.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Video Preview */}
          <div>
            <VideoPlaceholder title={videoPreview.title} caption={`Dauer: ${videoPreview.dauer}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

