import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Grid from '@/components/layout/Grid'
import LehrerCard from '@/components/features/LehrerCard'
import { lehrer } from '@/data/lehrer'

export default function LehrerPage() {
  return (
    <>
      <PageHero
        title="Zertifizierte Lehrer"
        desc="Finde einen zertifizierten Lehrer in deiner Nähe."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            {lehrer.map((lehrerItem, idx) => (
              <LehrerCard key={idx} {...lehrerItem} />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}






