import Card from '@/components/ui/Card'

interface Form {
  nummer: number
  deutsch: string
  chinesisch: string
}

interface FormenListeProps {
  title: string
  formen: Form[]
  hinweis: string
}

export default function FormenListe({ title, formen, hinweis }: FormenListeProps) {
  return (
    <div>
      <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mb-6 max-w-3xl">
        <div className="space-y-3">
          {formen.map((form) => (
            <Card key={form.nummer} className="p-4">
              <div className="grid grid-cols-[auto_1fr_1fr] gap-4 items-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {form.nummer}
                </span>
                <span className="font-semibold text-dark">{form.deutsch}</span>
                <span className="text-sm text-dark/70 italic">{form.chinesisch}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-3xl rounded-lg border border-primary/20 bg-primary-light p-4">
        <p className="text-center text-sm italic text-dark/80">{hinweis}</p>
      </div>
    </div>
  )
}


