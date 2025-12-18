interface VorteileCardProps {
  icon: string
  title: string
  desc: string
}

export default function VorteileCard({ icon, title, desc }: VorteileCardProps) {
  return (
    <div className="text-center">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 font-display text-xl font-normal text-dark">{title}</h3>
      <p className="text-dark/80">{desc}</p>
    </div>
  )
}

