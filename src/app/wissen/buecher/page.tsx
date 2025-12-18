import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import { buecher } from '@/data/buecher'

export default function BuecherPage() {
  return (
    <>
      <PageHero
        title="Bücher"
        desc="Publikationen von Großmeister Frieder Anders"
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={2} gap="lg">
            {buecher.map((buch, idx) => (
              <Card key={idx} variant="hover">
                <div className="mb-4 flex items-center justify-between">
                  <Tag variant="primary">{buch.year}</Tag>
                </div>
                <h3 className="mb-4 font-display text-2xl font-normal text-dark">
                  {buch.title}
                </h3>
                <p className="text-dark/80">{buch.desc}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}



