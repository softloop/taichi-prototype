import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface LehrerCardProps {
  name: string
  zertifizierung?: string
  region: string
  angebot?: string | string[]
  kontakt?: string
  website?: string
  beschreibung?: string
  cta?: { text: string; href: string }
}

export default function LehrerCard({
  name,
  zertifizierung,
  region,
  angebot,
  kontakt,
  website,
  beschreibung,
  cta,
}: LehrerCardProps) {
  const angebotText = Array.isArray(angebot) ? angebot.join(', ') : angebot

  return (
    <Card variant="hover" className="flex flex-col h-full">
      <div className="mb-4 aspect-square w-full rounded-lg bg-background-alt flex items-center justify-center">
        <span className="text-4xl text-dark/30">👤</span>
      </div>
      <div className="flex-1">
        <h3 className="mb-1 font-display text-xl font-normal text-dark">{name}</h3>
        {zertifizierung && (
          <p className="mb-3 text-sm font-semibold text-primary">{zertifizierung}</p>
        )}
        <p className="mb-3 text-sm text-dark/70">📍 {region}</p>
        {angebotText && (
          <div className="mb-3">
            <p className="mb-1 text-xs font-semibold text-dark">Angebot:</p>
            <p className="text-sm text-dark/80">{angebotText}</p>
          </div>
        )}
        {kontakt && (
          <div className="mb-3">
            <p className="mb-1 text-xs font-semibold text-dark">Kontakt:</p>
            <p className="text-sm text-dark/80">{kontakt}</p>
          </div>
        )}
        {website && (
          <div className="mb-3">
            <p className="mb-1 text-xs font-semibold text-dark">Website:</p>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              {website}
            </a>
          </div>
        )}
        {beschreibung && <p className="mb-4 text-sm text-dark/80">{beschreibung}</p>}
      </div>
      {cta && (
        <div className="mt-auto pt-4">
          <Button href={cta.href} variant="primary" className="w-full">
            {cta.text}
          </Button>
        </div>
      )}
    </Card>
  )
}






