import Button from '@/components/ui/Button'

interface VertiefungCardProps {
  tor: string
  title: string
  desc: string
  priceAbo: string | null
  priceEinmalig: string
  cta?: { text: string; href: string }
}

export default function VertiefungCard({ tor, title, desc, priceAbo, priceEinmalig, cta }: VertiefungCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md flex flex-col h-full">
      {/* Bildplatzhalter */}
      {cta && (
        <div className="mb-4 aspect-video w-full bg-background-alt rounded-lg flex items-center justify-center">
          <span className="text-4xl text-dark/30">📷</span>
        </div>
      )}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
          {tor}
        </div>
        <h3 className="font-display text-xl font-normal text-dark">{title}</h3>
      </div>
      <p className="mb-4 flex-1 text-dark/80">{desc}</p>
      <div className="mb-4 text-sm">
        {priceAbo ? (
          <div>
            <span className="font-semibold text-dark">{priceAbo}</span>
            <span className="text-dark/70"> · </span>
            <span className="font-semibold text-primary">{priceEinmalig}</span>
          </div>
        ) : (
          <div className="font-semibold text-primary">{priceEinmalig}</div>
        )}
      </div>
      {cta && (
        <Button href={cta.href} variant="primary" className="w-full">
          {cta.text}
        </Button>
      )}
    </div>
  )
}

