import Button from '@/components/ui/Button'

interface HighlightBoxProps {
  badge?: string
  title: string
  subtitle?: string
  desc?: string
  features?: string[]
  priceOld?: string
  priceNew?: string
  priceAbo?: string
  priceEinmalig?: string
  cta?: { text: string; href: string }
  className?: string
}

export default function HighlightBox({
  badge,
  title,
  subtitle,
  desc,
  features,
  priceOld,
  priceNew,
  priceAbo,
  priceEinmalig,
  cta,
  className = '',
}: HighlightBoxProps) {
  return (
    <div className={`rounded-lg border-2 border-primary bg-background-alt p-8 shadow-lg ${className}`}>
      {/* Bildplatzhalter */}
      {cta && (
        <div className="mb-6 aspect-video w-full bg-background rounded-lg flex items-center justify-center">
          <span className="text-4xl text-dark/30">📷</span>
        </div>
      )}
      {badge && (
        <div className="mb-4 text-center text-sm font-semibold text-primary">{badge}</div>
      )}
      <h3 className="mb-2 text-center font-display text-2xl font-normal text-dark md:text-3xl">
        {title}
      </h3>
      {subtitle && (
        <p className="mb-4 text-center text-lg font-semibold text-dark">{subtitle}</p>
      )}
      {desc && <p className="mb-6 text-center text-dark/80">{desc}</p>}
      {features && (
        <ul className="mb-6 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-dark/80">
              <span className="mr-2 text-primary">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <div className="mb-6 text-center">
        {priceOld && priceNew && (
          <div className="mb-2">
            <span className="text-lg text-dark/60 line-through">{priceOld}</span>
            <span className="ml-2 text-2xl font-semibold text-primary">{priceNew}</span>
          </div>
        )}
        {priceAbo && priceEinmalig && (
          <div className="space-y-1">
            <div className="text-lg font-semibold text-dark">{priceAbo}</div>
            <div className="text-sm text-dark/70">oder</div>
            <div className="text-lg font-semibold text-primary">{priceEinmalig}</div>
          </div>
        )}
        {!priceAbo && priceEinmalig && (
          <div className="text-2xl font-semibold text-primary">{priceEinmalig}</div>
        )}
      </div>
      {cta && (
        <div className="text-center">
          <Button href={cta.href} variant="primary">
            {cta.text}
          </Button>
        </div>
      )}
    </div>
  )
}

