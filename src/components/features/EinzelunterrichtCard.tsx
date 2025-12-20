import Button from '@/components/ui/Button'

interface EinzelunterrichtCardProps {
  title: string
  desc: string
  format: string
  termine: string
  preis: string
  kontakt: string
  cta: { text: string; href: string }
}

export default function EinzelunterrichtCard({
  title,
  desc,
  format,
  termine,
  preis,
  kontakt,
  cta,
}: EinzelunterrichtCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-8 shadow-sm">
      <h3 className="mb-4 font-display text-2xl font-normal text-dark">{title}</h3>
      <p className="mb-6 text-dark/80">{desc}</p>
      
      <div className="mb-6 space-y-3 text-sm">
        <div>
          <span className="font-semibold text-dark">Format:</span>{' '}
          <span className="text-dark/80">{format}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Termine:</span>{' '}
          <span className="text-dark/80">{termine}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Preis:</span>{' '}
          <span className="text-lg font-semibold text-primary">{preis}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Kontakt:</span>{' '}
          <span className="text-dark/80">{kontakt}</span>
        </div>
      </div>
      
      <Button href={cta.href} variant="primary" className="w-full">
        {cta.text}
      </Button>
    </div>
  )
}





