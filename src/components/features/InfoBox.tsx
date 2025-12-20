interface InfoBoxProps {
  title: string
  content: string
}

export default function InfoBox({ title, content }: InfoBoxProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6">
      <h3 className="mb-3 font-display text-xl font-normal text-dark">{title}</h3>
      <div className="whitespace-pre-line text-dark/80">{content}</div>
    </div>
  )
}





