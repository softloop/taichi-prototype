interface AtemtypVariantenCardProps {
  symbol: string
  name: string
  eigenschaften: string[]
  lektionen: number
}

export default function AtemtypVariantenCard({
  symbol,
  name,
  eigenschaften,
  lektionen,
}: AtemtypVariantenCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <div className="mb-4 text-center">
        <div className="mb-2 text-5xl">{symbol}</div>
        <h3 className="font-display text-xl font-normal text-dark">{name}</h3>
      </div>
      <ul className="mb-4 space-y-2">
        {eigenschaften.map((eigenschaft, idx) => (
          <li key={idx} className="text-dark/80">
            {eigenschaft}
          </li>
        ))}
      </ul>
      <div className="border-t border-border pt-4 text-center">
        <span className="font-semibold text-primary">{lektionen} Lektionen</span>
      </div>
    </div>
  )
}


