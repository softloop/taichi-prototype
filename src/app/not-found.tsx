import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Section bg="base">
      <Container className="py-24 md:py-32">
        <div className="text-center">
          <h1 className="mb-4 font-display text-6xl font-normal text-dark md:text-8xl">
            404
          </h1>
          <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
            Seite nicht gefunden
          </h2>
          <p className="mb-8 text-lg text-dark/80">
            Die gesuchte Seite existiert leider nicht.
          </p>
          <Button href="/" variant="primary">
            Zur Startseite
          </Button>
        </div>
      </Container>
    </Section>
  )
}






