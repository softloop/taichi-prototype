import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function MethodePage() {
  return (
    <>
      <PageHero
        title="Die Methode"
        desc="Atemtyp Tai Chi – authentisches Yang-Stil Tai Chi, individuell abgestimmt auf deinen Atemtyp."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            <Card variant="hover" href="/methode/innere-kraft" className="text-center">
              <div className="mb-4 text-4xl">☯</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Innere Kraft
              </h3>
              <p className="mb-4 text-dark/80">
                Was ist innere Kraft und wie entwickelst du sie?
              </p>
              <Button href="/methode/innere-kraft" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>

            <Card variant="hover" href="/methode/atemtyp" className="text-center">
              <div className="mb-4 text-4xl">☽☀</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Atemtyp Tai Chi
              </h3>
              <p className="mb-4 text-dark/80">
                Wie Sonne und Mond dich prägen – Einatmer oder Ausatmer?
              </p>
              <Button href="/methode/atemtyp" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>

            <Card variant="hover" href="/methode/test" className="text-center">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Atemtyp-Test
              </h3>
              <p className="mb-4 text-dark/80">
                Finde heraus, ob du Einatmer oder Ausatmer bist.
              </p>
              <Button href="/methode/test" variant="secondary" className="w-full">
                Test starten
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>
    </>
  )
}






