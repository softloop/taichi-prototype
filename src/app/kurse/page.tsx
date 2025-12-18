import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function KursePage() {
  return (
    <>
      <PageHero
        title="Kurse"
        desc="Entdecke unser vielfältiges Angebot – von kostenlosen Online-Kursen bis hin zu intensiven Präsenz-Seminaren."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            <Card variant="hover" href="/kurse/online" className="text-center">
              <div className="mb-4 text-4xl">💻</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Online
              </h3>
              <p className="mb-4 text-dark/80">
                Kurzform, Langform & Vertiefungsstufen – lerne in deinem eigenen Tempo.
              </p>
              <Button href="/kurse/online" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>

            <Card variant="hover" href="/kurse/live" className="text-center">
              <div className="mb-4 text-4xl">📹</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Live & Zoom
              </h3>
              <p className="mb-4 text-dark/80">
                Gruppenunterricht, Meetings & Webinare mit direktem Feedback.
              </p>
              <Button href="/kurse/live" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>

            <Card variant="hover" href="/kurse/praesenz" className="text-center">
              <div className="mb-4 text-4xl">🏛️</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Präsenz
              </h3>
              <p className="mb-4 text-dark/80">
                Intensivseminare, Retreats & Bildungsurlaub in besonderer Atmosphäre.
              </p>
              <Button href="/kurse/praesenz" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>
    </>
  )
}



