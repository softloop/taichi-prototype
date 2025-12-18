import Button from '@/components/ui/Button'

interface LangformCardProps {
  part: string
  symbol: string
  forms: string
  videos: string
  videomaterial: string
  desc: string
  lerndauer: string
  bonus: string
  priceAbo: string
  priceEinmalig: string
  cta: { text: string; href: string }
}

export default function LangformCard({
  part,
  symbol,
  forms,
  videos,
  videomaterial,
  desc,
  lerndauer,
  bonus,
  priceAbo,
  priceEinmalig,
  cta,
}: LangformCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
      {/* Bildplatzhalter */}
      <div className="mb-4 aspect-video w-full bg-background-alt rounded-lg flex items-center justify-center">
        <span className="text-4xl text-dark/30">📷</span>
      </div>
      <div className="mb-4 text-center">
        <div className="mb-2 text-3xl">{symbol}</div>
        <h3 className="mb-1 font-display text-xl font-normal text-dark">{part}</h3>
      </div>
      <div className="mb-4 flex-1 space-y-2 text-sm">
        <div>
          <span className="font-semibold text-dark">Formen:</span>{' '}
          <span className="text-dark/80">{forms}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Videos:</span>{' '}
          <span className="text-dark/80">{videos}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Videomaterial:</span>{' '}
          <span className="text-dark/80">{videomaterial}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Lerndauer:</span>{' '}
          <span className="text-dark/80">{lerndauer}</span>
        </div>
        <div>
          <span className="font-semibold text-dark">Bonus:</span>{' '}
          <span className="text-dark/80">{bonus}</span>
        </div>
      </div>
      <p className="mb-4 text-dark/80">{desc}</p>
      <div className="mt-auto space-y-2">
        <div className="text-center">
          <div className="text-lg font-semibold text-primary">{priceAbo}</div>
          <div className="text-sm text-dark/70">oder</div>
          <div className="text-lg font-semibold text-primary">{priceEinmalig}</div>
        </div>
        <Button href={cta.href} variant="primary" className="w-full">
          {cta.text}
        </Button>
      </div>
    </div>
  )
}

