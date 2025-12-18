import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ImageTextSection from '@/components/features/ImageTextSection'
import Button from '@/components/ui/Button'
import { methodePage } from '@/data/content'

export default function MethodePage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {methodePage.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {methodePage.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {methodePage.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Drei Bild-Text-Sektionen */}
      {methodePage.sections.map((section, idx) => (
        <Section key={idx} bg={idx % 2 === 0 ? 'white' : 'base'}>
          <Container className="py-16 md:py-24">
            <ImageTextSection {...section} />
          </Container>
        </Section>
      ))}

      {/* Kurztext */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-display text-3xl font-normal text-dark md:text-4xl">
              {methodePage.kurztext.title}
            </h2>
            <p className="text-lg leading-relaxed text-dark/80">
              {methodePage.kurztext.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Zitat */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="mb-4 text-2xl italic leading-relaxed text-dark/90 md:text-3xl">
              {methodePage.zitat.text}
            </blockquote>
            <p className="text-lg text-dark/60">— {methodePage.zitat.author}</p>
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 font-display text-4xl font-normal text-white">
              {methodePage.finalCTA.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {methodePage.finalCTA.ctas.map((cta, idx) => (
                <Button key={idx} href={cta.href} variant="primary">
                  {cta.text}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
