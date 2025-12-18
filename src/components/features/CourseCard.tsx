import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'

interface CourseCardProps {
  title: string
  price: string
  desc: string
  features?: string[]
  tag?: string
  day?: string
  date?: string
  duration?: string
  href?: string
}

export default function CourseCard({
  title,
  price,
  desc,
  features,
  tag,
  day,
  date,
  duration,
  href,
}: CourseCardProps) {
  return (
    <Card variant="hover" className="flex flex-col h-full">
      <div className="flex-1">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="font-display text-xl font-normal text-dark">{title}</h3>
          {tag && <Tag variant="primary">{tag}</Tag>}
        </div>
        <div className="mb-4">
          <div className="text-2xl font-semibold text-primary">{price}</div>
          {day && <div className="mt-1 text-sm text-dark/70">{day}</div>}
          {date && <div className="mt-1 text-sm text-dark/70">{date}</div>}
          {duration && <div className="mt-1 text-sm text-dark/70">{duration}</div>}
        </div>
        <p className="mb-4 text-dark/80">{desc}</p>
        {features && (
          <ul className="mb-4 space-y-2 text-sm text-dark/70">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      {href && (
        <div className="mt-auto pt-4">
          <Button href={href} variant="primary" className="w-full">
            Mehr erfahren
          </Button>
        </div>
      )}
    </Card>
  )
}



