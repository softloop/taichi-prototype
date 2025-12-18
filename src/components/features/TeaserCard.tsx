import Link from 'next/link'

interface TeaserCardProps {
  title: string
  desc: string
  price: string
  href?: string
}

export default function TeaserCard({ title, desc, price, href }: TeaserCardProps) {
  const cardContent = (
    <>
      <div className="flex-1">
        <h3 className="mb-2 font-display text-xl font-normal text-dark">{title}</h3>
        <p className="mb-4 text-dark/80">{desc}</p>
      </div>
      <div className="mt-auto">
        <div className="mb-4 text-lg font-semibold text-primary">{price}</div>
        {href && (
          <span className="text-sm font-semibold text-primary transition-colors">
            Mehr erfahren →
          </span>
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md h-full flex flex-col"
      >
        {cardContent}
      </Link>
    )
  }

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
      {cardContent}
    </div>
  )
}

