interface QuickFactsCardProps {
  icon: string
  title: string
  text: string
}

export default function QuickFactsCard({ icon, title, text }: QuickFactsCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
      <div className="mb-3 text-4xl">{icon}</div>
      <h3 className="mb-2 font-semibold text-dark">{title}</h3>
      <p className="text-sm text-dark/80">{text}</p>
    </div>
  )
}


