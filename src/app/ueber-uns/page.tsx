import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        title="Über uns"
        desc="Deutschlands älteste Tai-Chi-Schule – authentische Tradition, moderne Vermittlung."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            <Card variant="hover" href="/ueber-uns/meister" className="text-center">
              <div className="mb-4 text-4xl">👨‍🏫</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Der Meister
              </h3>
              <p className="mb-4 text-dark/80">
                Großmeister Frieder Anders – 6. Generation Yang-Tradition
              </p>
              <Button href="/ueber-uns/meister" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>

            <Card variant="hover" href="/ueber-uns/tradition" className="text-center">
              <div className="mb-4 text-4xl">⚖️</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Tradition & Moderne
              </h3>
              <p className="mb-4 text-dark/80">
                Philosophie zwischen Ost und West
              </p>
              <Button href="/ueber-uns/tradition" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>

            <Card variant="hover" href="/ueber-uns/lehrer" className="text-center">
              <div className="mb-4 text-4xl">👥</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Zertifizierte Lehrer
              </h3>
              <p className="mb-4 text-dark/80">
                Finde einen Lehrer in deiner Nähe
              </p>
              <Button href="/ueber-uns/lehrer" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>
    </>
  )
}






