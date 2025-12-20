import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'

interface PraesenzKursCardProps {
  tags: { fuerWen: string; niveau: string; kursart: string }
  title: string
  subtitle: string
  leitung: string
  ort: string
  termine: string
  uhrzeit?: string
  dauer: string
  beschreibung: string
  voraussetzung: string
  preis: string
  hinweis?: string
  abschluss?: string
}

const tagLabels: Record<string, string> = {
  schueler: 'Schüler',
  lehrer: 'Lehrer',
  meisterschueler: 'Meisterschüler',
  einsteiger: 'Einsteiger',
  fortgeschritten: 'Fortgeschritten',
  vertiefung: 'Vertiefung',
  samstagskurs: 'Samstagskurs',
  retreat: 'Retreat',
  ausbildung: 'Ausbildung',
}

export default function PraesenzKursCard({
  tags,
  title,
  subtitle,
  leitung,
  ort,
  termine,
  uhrzeit,
  dauer,
  beschreibung,
  voraussetzung,
  preis,
  hinweis,
  abschluss,
}: PraesenzKursCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        <Tag variant="outline">{tagLabels[tags.fuerWen]}</Tag>
        <Tag variant="outline">{tagLabels[tags.niveau]}</Tag>
        <Tag variant="outline">{tagLabels[tags.kursart]}</Tag>
      </div>

      {/* Titel & Untertitel */}
      <h3 className="mb-2 font-display text-2xl font-normal text-dark">{title}</h3>
      <p className="mb-6 text-lg font-semibold text-primary">{subtitle}</p>

      {/* Details */}
      <div className="mb-6 space-y-2 text-sm text-dark/80">
        <div>
          <span className="font-semibold text-dark">👤 Leitung:</span> {leitung}
        </div>
        <div>
          <span className="font-semibold text-dark">📍 Ort:</span> {ort}
        </div>
        <div>
          <span className="font-semibold text-dark">📅 Termine:</span> {termine}
        </div>
        {uhrzeit && (
          <div>
            <span className="font-semibold text-dark">⏱ Uhrzeit:</span> {uhrzeit}
          </div>
        )}
        <div>
          <span className="font-semibold text-dark">⏱ Dauer:</span> {dauer}
        </div>
      </div>

      {/* Beschreibung */}
      <p className="mb-4 text-dark/80">{beschreibung}</p>

      {/* Voraussetzung */}
      <div className="mb-4 text-sm">
        <span className="font-semibold text-dark">Voraussetzung:</span>{' '}
        <span className="text-dark/80">{voraussetzung}</span>
      </div>

      {/* Hinweis */}
      {hinweis && (
        <div className="mb-4 rounded bg-primary/10 p-3 text-sm text-primary">
          <span className="font-semibold">Hinweis:</span> {hinweis}
        </div>
      )}

      {/* Abschluss */}
      {abschluss && (
        <div className="mb-4 text-sm">
          <span className="font-semibold text-primary">Abschluss:</span>{' '}
          <span className="text-dark/80">{abschluss}</span>
        </div>
      )}

      {/* Preis & CTA */}
      <div className="border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-primary">{preis}</span>
          <Button href="#" variant="primary">
            Details →
          </Button>
        </div>
      </div>
    </div>
  )
}





