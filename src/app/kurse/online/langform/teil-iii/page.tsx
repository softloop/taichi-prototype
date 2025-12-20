import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Grid from '@/components/layout/Grid'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ImageTextSection from '@/components/features/ImageTextSection'
import CourseHero from '@/components/features/CourseHero'
import QuickFactsCard from '@/components/features/QuickFactsCard'
import AtemtypVariantenCard from '@/components/features/AtemtypVariantenCard'
import LangformTeileCard from '@/components/features/LangformTeileCard'
import FormenAbschnitte from '@/components/features/FormenAbschnitte'
import CourseContentTabs from '@/components/features/CourseContentTabs'
import PreisoptionCard from '@/components/features/PreisoptionCard'
import TestimonialCard from '@/components/features/TestimonialCard'
import FAQ from '@/components/features/FAQ'
import InfoBox from '@/components/features/InfoBox'
import HighlightBox from '@/components/features/HighlightBox'
import { langformTeilIIIDetail } from '@/data/courses'

export default function LangformTeilIIIPage() {
  return (
    <>
      {/* Hero / Kurs-Header */}
      <Section bg="base">
        <Container className="py-0">
          <CourseHero {...langformTeilIIIDetail.hero} />
        </Container>
      </Section>

      {/* Sektion 1: Kurs-Übersicht (Quick Facts) */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={4} gap="lg">
            {langformTeilIIIDetail.quickFacts.map((fact, idx) => (
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
            title={langformTeilIIIDetail.ueberKurs.title}
            desc={langformTeilIIIDetail.ueberKurs.desc}
            cta={{ text: '', href: '#' }}
            imageSrc={langformTeilIIIDetail.ueberKurs.imageSrc}
          />
        </Container>
      </Section>

      {/* Sektion 3: Die drei Teile der Langform */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
              {langformTeilIIIDetail.dreiTeile.title}
            </h2>
            <p className="text-lg text-dark/80">{langformTeilIIIDetail.dreiTeile.desc}</p>
          </div>
          <Grid cols={3} gap="lg">
            {langformTeilIIIDetail.dreiTeile.teile.map((teil, idx) => (
              <LangformTeileCard key={idx} {...teil} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Sektion 4: Zwei Varianten – ein Kurs */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
              {langformTeilIIIDetail.atemtypVarianten.title}
            </h2>
            <p className="mb-8 text-lg text-dark/80">
              {langformTeilIIIDetail.atemtypVarianten.intro}
            </p>
          </div>
          <Grid cols={2} gap="lg" className="mb-8">
            {langformTeilIIIDetail.atemtypVarianten.varianten.map((variante, idx) => (
              <AtemtypVariantenCard key={idx} {...variante} />
            ))}
          </Grid>
          <div className="text-center">
            <Button href={langformTeilIIIDetail.atemtypVarianten.cta.href} variant="secondary">
              {langformTeilIIIDetail.atemtypVarianten.cta.text}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Sektion 5: Was Du bekommst */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            Was Du bekommst
          </h2>
          <Grid cols={3} gap="lg">
            {/* Kursinhalte */}
            <Card className="p-6">
              <h3 className="mb-4 font-display text-xl font-normal text-dark">Kursinhalte</h3>
              <ul className="space-y-3">
                {langformTeilIIIDetail.wasDuBekommst.kursinhalte.map((item, idx) => (
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
                {langformTeilIIIDetail.wasDuBekommst.materialien.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-dark/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
            {/* Zugang */}
            <Card className="p-6">
              <h3 className="mb-4 font-display text-xl font-normal text-dark">Zugang & Bonus</h3>
              <ul className="space-y-3">
                {langformTeilIIIDetail.wasDuBekommst.zugang.map((item, idx) => (
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

      {/* Sektion 6: Die 38 Formen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <FormenAbschnitte
            title={langformTeilIIIDetail.formen.title}
            abschnitte={langformTeilIIIDetail.formen.abschnitte}
            hinweis={langformTeilIIIDetail.formen.hinweis}
          />
        </Container>
      </Section>

      {/* Sektion 7: Kursinhalt */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <CourseContentTabs {...langformTeilIIIDetail.kursinhalt} />
        </Container>
      </Section>

      {/* Sektion 8: Voraussetzungen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {langformTeilIIIDetail.voraussetzungen.title}
            </h2>
            <div className="mb-6 space-y-4">
              {langformTeilIIIDetail.voraussetzungen.punkte.map((punkt, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-white p-4">
                  <span className="mt-1 text-primary">✓</span>
                  <span className="text-dark/80">{punkt}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary-light p-4">
              <p className="text-center text-sm text-dark/80">
                {langformTeilIIIDetail.voraussetzungen.hinweis}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 9: Dein Lehrer */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={true}
            title={langformTeilIIIDetail.lehrer.name}
            desc={`${langformTeilIIIDetail.lehrer.titel}\n\n${langformTeilIIIDetail.lehrer.text}`}
            cta={langformTeilIIIDetail.lehrer.cta}
            imageSrc={langformTeilIIIDetail.lehrer.imageSrc}
          />
        </Container>
      </Section>

      {/* Sektion 10: Testimonials */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            Das sagen unsere Teilnehmer
          </h2>
          <Grid cols={3} gap="lg">
            {langformTeilIIIDetail.testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} name={testimonial.name} text={testimonial.text} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Sektion 11: FAQ */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            Häufige Fragen
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={langformTeilIIIDetail.faq} />
          </div>
        </Container>
      </Section>

      {/* Sektion 12: Preisoptionen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {langformTeilIIIDetail.preisoptionen.title}
          </h2>
          <Grid cols={2} gap="lg" className="mb-8">
            {langformTeilIIIDetail.preisoptionen.optionen.map((option, idx) => (
              <PreisoptionCard key={idx} {...option} />
            ))}
          </Grid>
          {/* Paket Tip - Teil III hat einen anderen Hinweis */}
          {langformTeilIIIDetail.preisoptionen.paketTip.preis && (
            <div className="mb-6 mx-auto max-w-2xl">
              <HighlightBox
                title={langformTeilIIIDetail.preisoptionen.paketTip.title}
                desc={`${langformTeilIIIDetail.preisoptionen.paketTip.desc} ${langformTeilIIIDetail.preisoptionen.paketTip.preis}`}
                cta={langformTeilIIIDetail.preisoptionen.paketTip.cta}
              />
            </div>
          )}
          {langformTeilIIIDetail.preisoptionen.paketTip.desc && !langformTeilIIIDetail.preisoptionen.paketTip.preis && (
            <div className="mb-6 mx-auto max-w-2xl">
              <InfoBox
                title={langformTeilIIIDetail.preisoptionen.paketTip.title}
                content={langformTeilIIIDetail.preisoptionen.paketTip.desc}
                type="info"
              />
            </div>
          )}
          {/* Wien Rabatt */}
          <div className="mx-auto max-w-2xl">
            <InfoBox
              title={langformTeilIIIDetail.preisoptionen.wienRabatt.title}
              content={langformTeilIIIDetail.preisoptionen.wienRabatt.desc}
              type="info"
              cta={langformTeilIIIDetail.preisoptionen.wienRabatt.cta}
            />
          </div>
        </Container>
      </Section>

      {/* Sektion 13: Nach der Langform: Die innere Arbeit beginnt */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {langformTeilIIIDetail.naechsterSchritt.title}
            </h2>
            <div className="mb-8 space-y-4">
              {langformTeilIIIDetail.naechsterSchritt.kurse.map((kurs, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="mb-2 font-display text-xl font-normal text-dark">
                    {kurs.name}
                  </h3>
                  <p className="mb-4 text-dark/80">{kurs.desc}</p>
                  <div className="font-semibold text-primary">{kurs.preis}</div>
                </Card>
              ))}
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary-light p-6">
              <p className="text-center text-dark/80 whitespace-pre-line">
                {langformTeilIIIDetail.naechsterSchritt.beschreibung}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 14: Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-normal text-white md:text-4xl">
              {langformTeilIIIDetail.finalCTA.title}
            </h2>
            <div className="mb-6">
              <div className="flex flex-wrap items-baseline justify-center gap-2">
                <span className="text-3xl font-semibold text-primary">
                  {langformTeilIIIDetail.finalCTA.preis}
                </span>
                <span className="text-lg text-white/80">
                  {langformTeilIIIDetail.finalCTA.preisAbo}
                </span>
              </div>
            </div>
            <div className="mb-8">
              <Button href={langformTeilIIIDetail.finalCTA.cta.href} variant="primary">
                {langformTeilIIIDetail.finalCTA.cta.text}
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              {langformTeilIIIDetail.finalCTA.vertrauen.map((item, idx) => (
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

