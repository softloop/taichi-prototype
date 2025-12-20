import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Grid from '@/components/layout/Grid'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ImageTextSection from '@/components/features/ImageTextSection'
import CourseHero from '@/components/features/CourseHero'
import QuickFactsCard from '@/components/features/QuickFactsCard'
import AtemtypVariantenCard from '@/components/features/AtemtypVariantenCard'
import CourseContentTabs from '@/components/features/CourseContentTabs'
import TestimonialCard from '@/components/features/TestimonialCard'
import FAQ from '@/components/features/FAQ'
import { kurzformDetail } from '@/data/courses'
import Link from 'next/link'

export default function KurzformPage() {
  return (
    <>
      {/* Hero / Kurs-Header */}
      <Section bg="base">
        <Container className="py-0">
          <CourseHero {...kurzformDetail.hero} />
        </Container>
      </Section>

      {/* Sektion 1: Kurs-Übersicht (Quick Facts) */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={4} gap="lg">
            {kurzformDetail.quickFacts.map((fact, idx) => (
              <QuickFactsCard key={idx} {...fact} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Sektion 2: Über diesen Kurs */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={false}
            title={kurzformDetail.ueberKurs.title}
            desc={kurzformDetail.ueberKurs.desc}
            cta={{ text: '', href: '#' }}
            imageSrc={kurzformDetail.ueberKurs.imageSrc}
          />
        </Container>
      </Section>

      {/* Sektion 3: Zwei Varianten – ein Kurs */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
              {kurzformDetail.atemtypVarianten.title}
            </h2>
            <p className="mb-8 text-lg text-dark/80">
              {kurzformDetail.atemtypVarianten.intro}
            </p>
          </div>
          <Grid cols={2} gap="lg" className="mb-8">
            {kurzformDetail.atemtypVarianten.varianten.map((variante, idx) => (
              <AtemtypVariantenCard key={idx} {...variante} />
            ))}
          </Grid>
          <div className="text-center">
            <Button href={kurzformDetail.atemtypVarianten.cta.href} variant="secondary">
              {kurzformDetail.atemtypVarianten.cta.text}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Sektion 4: Was Du bekommst */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            Was Du bekommst
          </h2>
          <Grid cols={3} gap="lg">
            {/* Kursinhalte */}
            <Card className="p-6">
              <h3 className="mb-4 font-display text-xl font-normal text-dark">Kursinhalte</h3>
              <ul className="space-y-3">
                {kurzformDetail.wasDuBekommst.kursinhalte.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-dark/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
            {/* Materialien */}
            <Card className="p-6">
              <h3 className="mb-4 font-display text-xl font-normal text-dark">Materialien</h3>
              <ul className="space-y-3">
                {kurzformDetail.wasDuBekommst.materialien.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-dark/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
            {/* Zugang */}
            <Card className="p-6">
              <h3 className="mb-4 font-display text-xl font-normal text-dark">Zugang</h3>
              <ul className="space-y-3">
                {kurzformDetail.wasDuBekommst.zugang.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-dark/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Sektion 5: Kursinhalt */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <CourseContentTabs {...kurzformDetail.kursinhalt} />
        </Container>
      </Section>

      {/* Sektion 6: Für wen ist dieser Kurs? */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {kurzformDetail.fuerWen.title}
            </h2>
            <ul className="space-y-4">
              {kurzformDetail.fuerWen.punkte.map((punkt, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-white p-4">
                  <span className="mt-1 text-primary">✓</span>
                  <span className="text-dark/80">{punkt}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Sektion 7: Dein Lehrer */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={true}
            title={kurzformDetail.lehrer.name}
            desc={`${kurzformDetail.lehrer.titel}\n\n${kurzformDetail.lehrer.text}`}
            cta={kurzformDetail.lehrer.cta}
            imageSrc={kurzformDetail.lehrer.imageSrc}
          />
        </Container>
      </Section>

      {/* Sektion 8: Testimonials */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            Das sagen unsere Teilnehmer
          </h2>
          <Grid cols={3} gap="lg">
            {kurzformDetail.testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} name={testimonial.name} text={testimonial.text} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Sektion 9: FAQ */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            Häufige Fragen
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={kurzformDetail.faq} />
          </div>
        </Container>
      </Section>

      {/* Sektion 10: Wie geht es danach weiter? */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {kurzformDetail.naechsterSchritt.title}
            </h2>
            <Card className="mb-6 p-6">
              <h3 className="mb-2 font-display text-xl font-normal text-dark">
                {kurzformDetail.naechsterSchritt.kurs.name}
              </h3>
              <p className="mb-4 text-dark/80">{kurzformDetail.naechsterSchritt.kurs.desc}</p>
              <div className="font-semibold text-primary">
                {kurzformDetail.naechsterSchritt.kurs.preis}
              </div>
            </Card>
            <p className="text-center italic text-dark/70">
              {kurzformDetail.naechsterSchritt.hinweis}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 11: Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-normal text-white md:text-4xl">
              {kurzformDetail.finalCTA.title}
            </h2>
            <div className="mb-6">
              <span className="text-3xl font-semibold text-primary">{kurzformDetail.finalCTA.preis}</span>
            </div>
            <div className="mb-8">
              <Button href={kurzformDetail.finalCTA.cta.href} variant="primary">
                {kurzformDetail.finalCTA.cta.text}
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              {kurzformDetail.finalCTA.vertrauen.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

