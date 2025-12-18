import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'

interface FeaturedVideoProps {
  kategorie: string
  title: string
  datum: string
  beschreibung: string
  dauer: string
  cta: { text: string; href: string }
}

export default function FeaturedVideo({
  kategorie,
  title,
  datum,
  beschreibung,
  dauer,
  cta,
}: FeaturedVideoProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className="aspect-video bg-background-alt rounded-lg flex items-center justify-center relative group cursor-pointer">
        <svg className="h-20 w-20 text-primary/50 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>
      <div>
        <div className="mb-3">
          <Tag variant="primary">{kategorie}</Tag>
        </div>
        <h2 className="mb-3 font-display text-3xl font-normal text-dark">{title}</h2>
        <div className="mb-4 text-sm text-dark/60 space-y-1">
          <div>{datum}</div>
          <div>Dauer: {dauer}</div>
        </div>
        <p className="mb-6 text-dark/80">{beschreibung}</p>
        <Button href={cta.href} variant="primary">
          {cta.text}
        </Button>
      </div>
    </div>
  )
}
