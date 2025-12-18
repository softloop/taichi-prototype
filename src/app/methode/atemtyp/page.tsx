import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { atemtyp } from '@/data/content'

export default function AtemtypPage() {
  return (
    <>
      <PageHero
        title="Atemtyp Tai Chi"
        desc="So wie Sonne und Mond unseren Planeten beeinflussen, haben sie auch eine Wirkung auf unseren menschlichen Organismus."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-lg text-dark/80">{atemtyp.intro}</p>
            <div className="mb-12 rounded-lg bg-primary-light p-6 text-center">
              <p className="text-xl font-semibold text-dark">
                {atemtyp.keyMessage}
              </p>
            </div>

            <Grid cols={2} gap="lg">
              <Card variant="highlight">
                <div className="mb-4 text-5xl text-center">{atemtyp.einatmer.symbol}</div>
                <h3 className="mb-4 text-center font-display text-2xl font-normal text-dark">
                  {atemtyp.einatmer.name}
                </h3>
                <ul className="mb-4 space-y-2">
                  {atemtyp.einatmer.traits.map((trait, idx) => (
                    <li key={idx} className="flex items-start text-dark/80">
                      <span className="mr-2 text-primary">•</span>
                      {trait}
                    </li>
                  ))}
                </ul>
                <p className="text-dark/80">{atemtyp.einatmer.desc}</p>
              </Card>

              <Card variant="hover">
                <div className="mb-4 text-5xl text-center">{atemtyp.ausatmer.symbol}</div>
                <h3 className="mb-4 text-center font-display text-2xl font-normal text-dark">
                  {atemtyp.ausatmer.name}
                </h3>
                <ul className="mb-4 space-y-2">
                  {atemtyp.ausatmer.traits.map((trait, idx) => (
                    <li key={idx} className="flex items-start text-dark/80">
                      <span className="mr-2 text-primary">•</span>
                      {trait}
                    </li>
                  ))}
                </ul>
                <p className="text-dark/80">{atemtyp.ausatmer.desc}</p>
              </Card>
            </Grid>

            <div className="mt-12 text-center">
              <Button href="/methode/test" variant="primary">
                Finde deinen Atemtyp
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl font-normal italic text-white md:text-3xl">
              {atemtyp.quote.text}
            </p>
            <p className="mt-6 text-white/70">— {atemtyp.quote.author}</p>
          </div>
        </Container>
      </Section>
    </>
  )
}



