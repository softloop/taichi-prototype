import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function WissenPage() {
  return (
    <>
      <PageHero
        title="Wissen"
        desc="Vertiefe dein Verständnis von Tai Chi durch Bücher, Artikel und Videos."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            <Card variant="hover" href="/wissen/buecher" className="text-center">
              <div className="mb-4 text-4xl">📚</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Bücher
              </h3>
              <p className="mb-4 text-dark/80">
                Publikationen von Meister Anders
              </p>
              <Button href="/wissen/buecher" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>

            <Card variant="hover" href="/wissen/blog" className="text-center">
              <div className="mb-4 text-4xl">✍️</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Blog
              </h3>
              <p className="mb-4 text-dark/80">
                Artikel rund um Tai Chi
              </p>
              <Button href="/wissen/blog" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>

            <Card variant="hover" href="/wissen/filmarchiv" className="text-center">
              <div className="mb-4 text-4xl">🎬</div>
              <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                Filmarchiv
              </h3>
              <p className="mb-4 text-dark/80">
                Videos & Demonstrationen
              </p>
              <Button href="/wissen/filmarchiv" variant="secondary" className="w-full">
                Mehr erfahren
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>
    </>
  )
}



