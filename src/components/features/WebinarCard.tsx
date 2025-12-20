import Button from '@/components/ui/Button'

interface WebinarCardProps {
  title: string
  subtitle: string
  desc: string
  voraussetzung: string
  termine: string
  uhrzeit: string
  dauer: string
  besonderheit?: string
  preis: string
  literatur?: string
  cta: { text: string; href: string }
}

export default function WebinarCard({
  title,
  subtitle,
  desc,
  voraussetzung,
  termine,
  uhrzeit,
  dauer,
  besonderheit,
  preis,
  literatur,
  cta,
}: WebinarCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-8 shadow-sm">
      <h3 className="mb-2 font-display text-2xl font-normal text-dark">{title}</h3>
      <p className="mb-4 text-lg font-semibold text-primary">{subtitle}</p>
      <p className="mb-6 text-dark/80">{desc}</p>
      
      <div className="mb-6 space-y-3 text-sm">
        <div>
          <span className="font-semibold text-dark">Voraussetzung:</span>{' '}
          <span className="text-dark/80">{voraussetzung}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Termine:</span>{' '}
          <span className="text-dark/80">{termine}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Uhrzeit:</span>{' '}
          <span className="text-dark/80">{uhrzeit}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Dauer:</span>{' '}
          <span className="text-dark/80">{dauer}</span>
        </div>
        {besonderheit && (
          <div>
            <span className="font-semibold text-primary">Besonderheit:</span>{' '}
            <span className="text-dark/80">{besonderheit}</span>
          </div>
        )}
        <div>
          <span className="font-semibold text-dark">Preis:</span>{' '}
          <span className="text-lg font-semibold text-primary">{preis}</span>
        </div>
        {literatur && (
          <div>
            <span className="font-semibold text-dark">Literatur:</span>{' '}
            <span className="text-dark/80 italic">{literatur}</span>
          </div>
        )}
      </div>
      
      <Button href={cta.href} variant="primary" className="w-full">
        {cta.text}
      </Button>
    </div>
  )
}





