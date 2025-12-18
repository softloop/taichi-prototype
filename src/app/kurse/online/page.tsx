import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Grid from '@/components/layout/Grid'
import CourseCard from '@/components/features/CourseCard'
import VertiefungItem from '@/components/features/VertiefungItem'
import Card from '@/components/ui/Card'
import { kurzform, langform, vertiefung, meisterpaket } from '@/data/courses'

export default function OnlineKursePage() {
  return (
    <>
      <PageHero
        title="Online Kurse"
        desc="Lerne authentisches Tai Chi in deinem eigenen Tempo – von der kostenlosen Kurzform bis zu den 7 Vertiefungsstufen."
      />

      {/* Kurzform */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle="Kostenloser Einstieg"
            title={kurzform.title}
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-lg text-dark/80">{kurzform.desc}</p>
              <ul className="mb-8 space-y-3">
                {kurzform.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-dark/80">
                    <span className="mr-3 text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <CourseCard
              title={kurzform.title}
              price={kurzform.price}
              desc={kurzform.desc}
              features={kurzform.features}
            />
          </div>
        </Container>
      </Section>

      {/* Langform */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle="Die komplette Form"
            title="Tai Chi Langform"
            className="mb-12"
          />
          <Grid cols={3} gap="lg">
            {langform.map((part, idx) => (
              <CourseCard
                key={idx}
                title={`${part.part} - ${part.symbol}`}
                price={part.price}
                desc={part.desc}
                features={[
                  `${part.forms}`,
                  `Dauer: ${part.duration}`,
                ]}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Vertiefung */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle="Die 7 Tore"
            title="Vertiefungsstufen"
            className="mb-12"
          />
          <Grid cols={3} gap="lg">
            {vertiefung.map((item, idx) => (
              <VertiefungItem key={idx} {...item} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Meisterpaket */}
      <Section bg="primary-light">
        <Container className="py-16 md:py-24">
          <Card variant="highlight" className="max-w-2xl mx-auto text-center">
            <h3 className="mb-4 font-display text-3xl font-normal text-dark">
              {meisterpaket.title}
            </h3>
            <div className="mb-4 text-4xl font-semibold text-primary">
              {meisterpaket.price}
            </div>
            <p className="mb-6 text-dark/80">{meisterpaket.desc}</p>
          </Card>
        </Container>
      </Section>
    </>
  )
}






