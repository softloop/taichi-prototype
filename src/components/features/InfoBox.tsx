import Button from '@/components/ui/Button'

interface InfoBoxProps {
  title: string
  content: string
  cta?: { text: string; href: string }
}

export default function InfoBox({ title, content, cta }: InfoBoxProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6">
      <h3 className="mb-3 font-display text-xl font-normal text-dark">{title}</h3>
      <div className="mb-4 whitespace-pre-line text-dark/80">{content}</div>
      {cta && (
        <div className="mt-4">
          <Button href={cta.href} variant="secondary">
            {cta.text}
          </Button>
        </div>
      )}
    </div>
  )
}






