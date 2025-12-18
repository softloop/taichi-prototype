import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'

interface VideoCardProps {
  title: string
  duration: string
  category: string
  href?: string
}

export default function VideoCard({ title, duration, category, href }: VideoCardProps) {
  return (
    <Card variant="hover" href={href}>
      <div className="mb-4 aspect-video bg-background-alt rounded flex items-center justify-center">
        <svg className="h-12 w-12 text-primary/50" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>
      <div className="mb-2 flex items-center justify-between">
        <Tag variant="default">{category}</Tag>
        <span className="text-sm text-dark/60">{duration}</span>
      </div>
      <h3 className="font-display text-lg font-normal text-dark">{title}</h3>
    </Card>
  )
}






