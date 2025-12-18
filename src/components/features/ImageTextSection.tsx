import { ReactNode } from 'react'
import Button from '@/components/ui/Button'

interface ImageTextSectionProps {
  imageLeft: boolean
  subline?: string
  title: string
  desc: string | ReactNode
  cta: { text: string; href: string }
  imageSrc?: string
  imageAlt?: string
}

export default function ImageTextSection({
  imageLeft,
  subline,
  title,
  desc,
  cta,
  imageSrc,
  imageAlt,
}: ImageTextSectionProps) {
  const imagePlaceholder = (
    <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
      <span className="text-dark/40 text-sm">Bildplatzhalter</span>
    </div>
  )

  const image = imageSrc ? (
    <img src={imageSrc} alt={imageAlt || title} className="w-full rounded-lg object-cover" />
  ) : (
    imagePlaceholder
  )

  const textContent = (
    <div>
      {subline && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
          {subline}
        </p>
      )}
      <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">{title}</h2>
      <div className="mb-6 text-lg leading-relaxed text-dark/80">{desc}</div>
      {cta.text && (
        <Button href={cta.href} variant="primary">
          {cta.text}
        </Button>
      )}
    </div>
  )

  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
      {imageLeft ? (
        <>
          <div>{image}</div>
          <div>{textContent}</div>
        </>
      ) : (
        <>
          <div>{textContent}</div>
          <div>{image}</div>
        </>
      )}
    </div>
  )
}

