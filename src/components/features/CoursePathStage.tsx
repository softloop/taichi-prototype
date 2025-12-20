import Button from '@/components/ui/Button'

interface CoursePathStageProps {
  number: number
  name: string
  price: string
  desc: string
  features: string[]
  cta: { text: string; href: string }
  isLast?: boolean
}

export default function CoursePathStage({ number, name, price, desc, features, cta, isLast }: CoursePathStageProps) {
  return (
    <>
      <div className="text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
          {number}
        </div>
        <h3 className="mb-2 font-display text-2xl font-normal text-dark">{name}</h3>
        <p className="mb-2 text-lg font-semibold text-primary">{price}</p>
        <p className="mb-4 text-dark/80">{desc}</p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm text-dark/70">
              • {feature}
            </li>
          ))}
        </ul>
        <Button href={cta.href} variant="primary">
          {cta.text}
        </Button>
      </div>
      {!isLast && (
        <div className="hidden md:flex items-center justify-center">
          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  )
}





