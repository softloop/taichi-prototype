import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import { tradition } from '@/data/content'

export default function TraditionPage() {
  return (
    <>
      <PageHero
        title="Tradition & Moderne"
        desc="Authentisches Tai Chi in der Yang-Familientradition, vermittelt mit modernem Verständnis."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <SectionTitle title="Die Tradition" className="mb-6" />
              <p className="text-lg text-dark/80">{tradition.tradition}</p>
            </div>

            <div>
              <SectionTitle title="Die Moderne" className="mb-6" />
              <p className="text-lg text-dark/80">{tradition.moderne}</p>
            </div>

            <Card variant="highlight" className="text-center">
              <p className="font-display text-2xl font-normal italic text-dark">
                {tradition.quote}
              </p>
            </Card>

            <div>
              <SectionTitle title="Offenheit" className="mb-6" />
              <p className="text-lg text-dark/80">{tradition.offenheit}</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}



