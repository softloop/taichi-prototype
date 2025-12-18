import Button from '@/components/ui/Button'

interface BuchCardProps {
  title: string
  untertitel: string
  autor: string
  verlag: string
  desc: string
  cta: { text: string; href: string }
}

export default function BuchCard({ title, untertitel, autor, verlag, desc, cta }: BuchCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-start">
        <div className="aspect-[3/4] w-full max-w-[200px] bg-background-alt rounded-lg flex items-center justify-center">
          <span className="text-6xl text-dark/30">📖</span>
        </div>
        <div>
          <h3 className="mb-1 font-display text-2xl font-normal text-dark">{title}</h3>
          <p className="mb-2 text-sm text-dark/70">{untertitel}</p>
          <p className="mb-2 text-sm text-dark/70">
            <strong>Autor:</strong> {autor}
          </p>
          <p className="mb-4 text-sm text-dark/70">
            <strong>Verlag:</strong> {verlag}
          </p>
          <p className="mb-6 text-dark/80">{desc}</p>
          <Button href={cta.href} variant="secondary" className="w-full md:w-auto">
            {cta.text}
          </Button>
        </div>
      </div>
    </div>
  )
}

