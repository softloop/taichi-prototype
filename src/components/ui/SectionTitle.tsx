interface SectionTitleProps {
  subtitle?: string
  title: string
  className?: string
}

export default function SectionTitle({ subtitle, title, className = '' }: SectionTitleProps) {
  return (
    <div className={className}>
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl font-normal md:text-4xl">{title}</h2>
    </div>
  )
}



