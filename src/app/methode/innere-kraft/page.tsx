import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import { innereKraft } from '@/data/content'

export default function InnereKraftPage() {
  return (
    <>
      <PageHero
        title="Innere Kraft"
        desc="Die Fähigkeit, mit Herausforderungen umzugehen und aus dir selbst heraus Energie zu schöpfen."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-12 text-xl italic text-dark/90">
              {innereKraft.intro}
            </p>

            <SectionTitle title="Was bedeutet innere Kraft?" className="mb-8" />
            <Grid cols={2} gap="lg">
              {innereKraft.points.map((point, idx) => (
                <Card key={idx} variant="hover">
                  <h3 className="mb-2 font-display text-xl font-normal text-dark">
                    {point.title}
                  </h3>
                  <p className="text-dark/80">{point.desc}</p>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle title="Innere Kraft in der Kampfkunst" className="mb-6" />
            <p className="text-lg text-dark/80">{innereKraft.kampfkunst}</p>
          </div>
        </Container>
      </Section>

      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl font-normal italic text-white md:text-3xl">
              {innereKraft.quote.text}
            </p>
            <p className="mt-6 text-white/70">— {innereKraft.quote.author}</p>
          </div>
        </Container>
      </Section>
    </>
  )
}



