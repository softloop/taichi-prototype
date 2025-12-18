import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Grid from '@/components/layout/Grid'
import ImageTextSection from '@/components/features/ImageTextSection'
import Button from '@/components/ui/Button'
import { ueberUnsPage } from '@/data/content'

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {ueberUnsPage.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {ueberUnsPage.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {ueberUnsPage.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Drei Bild-Text-Sektionen */}
      {ueberUnsPage.sections.map((section, idx) => (
        <Section key={idx} bg={idx % 2 === 0 ? 'white' : 'base'}>
          <Container className="py-16 md:py-24">
            <ImageTextSection {...section} />
          </Container>
        </Section>
      ))}

      {/* Kurztext: Unsere Geschichte */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-display text-3xl font-normal text-dark md:text-4xl">
              {ueberUnsPage.geschichte.title}
            </h2>
            <p className="text-lg leading-relaxed text-dark/80">
              {ueberUnsPage.geschichte.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Zahlen & Fakten */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {ueberUnsPage.zahlen.title}
          </h2>
          <Grid cols={4} gap="lg">
            {ueberUnsPage.zahlen.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-2 font-display text-4xl font-normal text-primary md:text-5xl">
                  {stat.number}
                </div>
                <p className="text-dark/80">{stat.description}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Zitat */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="mb-4 text-2xl italic leading-relaxed text-dark/90 md:text-3xl">
              {ueberUnsPage.zitat.text}
            </blockquote>
            <p className="text-lg text-dark/60">— {ueberUnsPage.zitat.author}</p>
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {ueberUnsPage.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {ueberUnsPage.finalCTA.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {ueberUnsPage.finalCTA.ctas.map((cta, idx) => (
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






