import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import { meister } from '@/data/content'

export default function MeisterPage() {
  return (
    <>
      <PageHero
        title={meister.name}
        subtitle={meister.title}
        desc={meister.intro}
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle title="Lebensweg" className="mb-8" />
            <div className="space-y-4">
              {meister.milestones.map((milestone, idx) => (
                <Card key={idx} variant="hover">
                  <p className="text-dark/80">{milestone}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}



