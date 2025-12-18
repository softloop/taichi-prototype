import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'

export default function Loading() {
  return (
    <Section bg="base">
      <Container className="py-24">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-dark/80">Lädt...</p>
        </div>
      </Container>
    </Section>
  )
}






