import Card from '@/components/ui/Card'

interface TestimonialCardProps {
  name: string
  text: string
}

export default function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <Card variant="highlight">
      <p className="mb-4 italic text-dark/90">&ldquo;{text}&rdquo;</p>
      <p className="text-sm font-semibold text-dark">— {name}</p>
    </Card>
  )
}



