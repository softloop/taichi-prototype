import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'

interface LehrerCardProps {
  name: string
  region: string
  atemtyp: string
  angebot: string
}

export default function LehrerCard({ name, region, atemtyp, angebot }: LehrerCardProps) {
  return (
    <Card variant="hover">
      <h3 className="mb-2 font-display text-xl font-normal text-dark">{name}</h3>
      <div className="mb-4 flex flex-wrap gap-2">
        <Tag variant="outline">{region}</Tag>
        <Tag variant="outline">{atemtyp}</Tag>
      </div>
      <p className="text-sm text-dark/80">{angebot}</p>
    </Card>
  )
}






