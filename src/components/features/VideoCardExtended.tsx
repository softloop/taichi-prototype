import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'

interface VideoCardExtendedProps {
  title: string
  kategorie: string
  atemtyp?: string | null
  datum: string
  thema: string
  beschreibung?: string
  cta: { text: string; href: string }
}

export default function VideoCardExtended({
  title,
  kategorie,
  atemtyp,
  datum,
  thema,
  beschreibung,
  cta,
}: VideoCardExtendedProps) {
  return (
    <Card variant="hover" className="flex flex-col h-full">
      <div className="mb-4 aspect-video bg-background-alt rounded-lg flex items-center justify-center relative group">
        <svg className="h-12 w-12 text-primary/50 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>
      <div className="mb-3 flex items-center gap-2 flex-wrap">
        <Tag variant="default">{kategorie}</Tag>
        {atemtyp && (
          <Tag variant="outline">
            {atemtyp === 'Einatmer (lunar)' ? '☽ lunar' : atemtyp === 'Ausatmer (solar)' ? '☀ solar' : '☽ & ☀'}
          </Tag>
        )}
      </div>
      <h3 className="mb-2 font-display text-lg font-normal text-dark line-clamp-2">{title}</h3>
      <div className="mb-2 text-sm text-dark/60 space-y-1">
        <div>{datum}</div>
        <div className="text-xs">{thema}</div>
      </div>
      {beschreibung && (
        <p className="mb-4 text-sm text-dark/80 line-clamp-2 flex-1">{beschreibung}</p>
      )}
      <div className="mt-auto">
        <Button href={cta.href} variant="secondary" className="w-full text-sm">
          {cta.text}
        </Button>
      </div>
    </Card>
  )
}
