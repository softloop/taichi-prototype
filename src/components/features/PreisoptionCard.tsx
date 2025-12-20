import Button from '@/components/ui/Button'

interface PreisoptionCardProps {
  title: string
  preis: string
  beschreibung: string
  vorteil: string
  cta: { text: string; href: string }
}

export default function PreisoptionCard({
  title,
  preis,
  beschreibung,
  vorteil,
  cta,
}: PreisoptionCardProps) {
  return (
    <div className="rounded-lg border-2 border-border bg-white p-6 text-center shadow-sm">
      <h3 className="mb-4 font-display text-xl font-normal text-dark">{title}</h3>
      <div className="mb-2 text-3xl font-semibold text-primary">{preis}</div>
      <p className="mb-4 text-dark/80">{beschreibung}</p>
      <p className="mb-6 text-sm text-dark/70">✓ {vorteil}</p>
      <Button href={cta.href} variant="primary" className="w-full">
        {cta.text}
      </Button>
    </div>
  )
}

