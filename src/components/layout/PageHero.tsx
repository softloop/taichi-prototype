interface PageHeroProps {
  subtitle?: string
  title: string
  titleHighlight?: string
  desc?: string
}

export default function PageHero({ subtitle, title, titleHighlight, desc }: PageHeroProps) {
  return (
    <div className="bg-background-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {subtitle && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            {subtitle}
          </p>
        )}
        <h1 className="font-display text-4xl font-normal md:text-5xl lg:text-6xl">
          {title}
          {titleHighlight && (
            <>
              {' '}
              <span className="text-primary">{titleHighlight}</span>
            </>
          )}
        </h1>
        {desc && (
          <p className="mt-6 max-w-2xl text-lg text-dark/80">{desc}</p>
        )}
      </div>
    </div>
  )
}






