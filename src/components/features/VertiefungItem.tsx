import Card from '@/components/ui/Card'

interface VertiefungItemProps {
  tor: string
  title: string
  desc: string
}

export default function VertiefungItem({ tor, title, desc }: VertiefungItemProps) {
  return (
    <Card variant="hover" className="relative">
      <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
        {tor}
      </div>
      <div className="pt-4">
        <h3 className="mb-2 font-display text-xl font-normal text-dark">{title}</h3>
        <p className="text-dark/80">{desc}</p>
      </div>
    </Card>
  )
}






