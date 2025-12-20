import Card from '@/components/ui/Card'

interface LangformTeileCardProps {
  teil: string
  symbol: string
  name: string
  formen: string
  status: string
  active: boolean
}

export default function LangformTeileCard({
  teil,
  symbol,
  name,
  formen,
  status,
  active,
}: LangformTeileCardProps) {
  return (
    <Card className={`p-6 text-center ${active ? 'border-2 border-primary bg-primary-light' : ''}`}>
      <div className="mb-2 text-5xl">{symbol}</div>
      <h3 className="mb-1 font-display text-xl font-normal text-dark">{teil}</h3>
      <p className="mb-2 text-lg font-semibold text-dark">{name}</p>
      <p className="mb-3 text-dark/80">{formen}</p>
      <p className={`text-sm font-semibold ${active ? 'text-primary' : 'text-dark/70'}`}>
        {status}
      </p>
    </Card>
  )
}

