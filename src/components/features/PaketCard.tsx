import Button from '@/components/ui/Button'

interface PaketCardProps {
  name: string
  inhalt: string
  statt: string
  preis: string
}

export default function PaketCard({ name, inhalt, statt, preis }: PaketCardProps) {
  return (
    <div className="rounded-lg border-2 border-primary/30 bg-background-alt p-6">
      <h3 className="mb-3 font-display text-xl font-normal text-dark">{name}</h3>
      <p className="mb-4 text-dark/80">{inhalt}</p>
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-sm text-dark/60 line-through">{statt}</span>
        <span className="text-2xl font-semibold text-primary">{preis}</span>
      </div>
      <Button href="#" variant="primary" className="w-full">
        Paket buchen →
      </Button>
    </div>
  )
}



