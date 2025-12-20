import Button from '@/components/ui/Button'

interface ZoomMeetingCardProps {
  title: string
  desc: string
  voraussetzung: string
  termine: string
  uhrzeit: string
  dauer: string
  preis: string
  rabatt: string
  cta: { text: string; href: string }
}

export default function ZoomMeetingCard({
  title,
  desc,
  voraussetzung,
  termine,
  uhrzeit,
  dauer,
  preis,
  rabatt,
  cta,
}: ZoomMeetingCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-8 shadow-sm">
      <h3 className="mb-4 font-display text-2xl font-normal text-dark">{title}</h3>
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
        <div>
          <span className="font-semibold text-dark">Preis:</span>{' '}
          <span className="text-lg font-semibold text-primary">{preis}</span>
        </div>
        <div>
          <span className="font-semibold text-primary">Rabatt:</span>{' '}
          <span className="text-dark/80">{rabatt}</span>
        </div>
      </div>
      
      <Button href={cta.href} variant="primary" className="w-full">
        {cta.text}
      </Button>
    </div>
  )
}





