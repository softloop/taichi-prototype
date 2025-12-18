import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'

interface BuchCardProps {
  titel: string
  untertitel?: string
  autor: string
  jahr?: string
  verlag: string
  isbn?: string
  preis?: string
  beschreibung: string
  themen?: string[]
  cta: { text: string; href: string }
}

export default function BuchCard({
  titel,
  untertitel,
  autor,
  jahr,
  verlag,
  isbn,
  preis,
  beschreibung,
  themen,
  cta,
}: BuchCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-start">
        <div className="aspect-[3/4] w-full max-w-[200px] bg-background-alt rounded-lg flex items-center justify-center">
          <span className="text-6xl text-dark/30">📖</span>
        </div>
        <div>
          <h3 className="mb-1 font-display text-2xl font-normal text-dark">{titel}</h3>
          {untertitel && <p className="mb-2 text-sm text-dark/70">{untertitel}</p>}
          <div className="mb-4 space-y-1 text-sm text-dark/70">
            <p>
              <strong>Autor:</strong> {autor}
            </p>
            {jahr && (
              <p>
                <strong>Jahr:</strong> {jahr}
              </p>
            )}
            <p>
              <strong>Verlag:</strong> {verlag}
            </p>
            {isbn && (
              <p>
                <strong>ISBN:</strong> {isbn}
              </p>
            )}
            {preis && (
              <p>
                <strong>Preis:</strong> <span className="font-semibold text-primary">{preis}</span>
              </p>
            )}
          </div>
          <p className="mb-4 text-dark/80">{beschreibung}</p>
          {themen && themen.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {themen.map((thema, idx) => (
                <Tag key={idx} variant="outline">
                  {thema}
                </Tag>
              ))}
            </div>
          )}
          <Button href={cta.href} variant="secondary" className="w-full md:w-auto">
            {cta.text}
          </Button>
        </div>
      </div>
    </div>
  )
}

