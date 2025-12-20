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
import FormenListe from '@/components/features/FormenListe'
import CourseContentTabs from '@/components/features/CourseContentTabs'
import PreisoptionCard from '@/components/features/PreisoptionCard'
import TestimonialCard from '@/components/features/TestimonialCard'
import FAQ from '@/components/features/FAQ'
import InfoBox from '@/components/features/InfoBox'
import HighlightBox from '@/components/features/HighlightBox'
import { langformTeilIDetail } from '@/data/courses'
import Link from 'next/link'

export default function LangformTeilIPage() {
  return (
    <>
      {/* Hero / Kurs-Header */}
      <Section bg="base">
        <Container className="py-0">
          <CourseHero {...langformTeilIDetail.hero} />
        </Container>
      </Section>

      {/* Sektion 1: Kurs-Übersicht (Quick Facts) */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={4} gap="lg">
            {langformTeilIDetail.quickFacts.map((fact, idx) => (
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
            title={langformTeilIDetail.ueberKurs.title}
            desc={langformTeilIDetail.ueberKurs.desc}
            cta={{ text: '', href: '#' }}
            imageSrc={langformTeilIDetail.ueberKurs.imageSrc}
          />
        </Container>
      </Section>

      {/* Sektion 3: Die drei Teile der Langform */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
              {langformTeilIDetail.dreiTeile.title}
            </h2>
            <p className="text-lg text-dark/80">{langformTeilIDetail.dreiTeile.desc}</p>
          </div>
          <Grid cols={3} gap="lg">
            {langformTeilIDetail.dreiTeile.teile.map((teil, idx) => (
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
              {langformTeilIDetail.atemtypVarianten.title}
            </h2>
            <p className="mb-8 text-lg text-dark/80">
              {langformTeilIDetail.atemtypVarianten.intro}
            </p>
          </div>
          <Grid cols={2} gap="lg" className="mb-8">
            {langformTeilIDetail.atemtypVarianten.varianten.map((variante, idx) => (
              <AtemtypVariantenCard key={idx} {...variante} />
            ))}
          </Grid>
          <div className="text-center">
            <Button href={langformTeilIDetail.atemtypVarianten.cta.href} variant="secondary">
              {langformTeilIDetail.atemtypVarianten.cta.text}
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
                {langformTeilIDetail.wasDuBekommst.kursinhalte.map((item, idx) => (
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
                {langformTeilIDetail.wasDuBekommst.materialien.map((item, idx) => (
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
                {langformTeilIDetail.wasDuBekommst.zugang.map((item, idx) => (
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

      {/* Sektion 6: Die 13 Formen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <FormenListe
            title={langformTeilIDetail.formen.title}
            formen={langformTeilIDetail.formen.formenListe}
            hinweis={langformTeilIDetail.formen.hinweis}
          />
        </Container>
      </Section>

      {/* Sektion 7: Kursinhalt */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <CourseContentTabs {...langformTeilIDetail.kursinhalt} />
        </Container>
      </Section>

      {/* Sektion 8: Voraussetzungen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {langformTeilIDetail.voraussetzungen.title}
            </h2>
            <div className="mb-6 space-y-4">
              {langformTeilIDetail.voraussetzungen.punkte.map((punkt, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-white p-4">
                  <span className="mt-1 text-primary">✓</span>
                  <span className="text-dark/80">{punkt}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary-light p-4">
              <p className="text-center text-sm text-dark/80">
                {langformTeilIDetail.voraussetzungen.hinweis.split('kostenlose Kurzform')[0]}
                <Link
                  href={langformTeilIDetail.voraussetzungen.kurzformLink.href}
                  className="font-semibold text-primary hover:underline"
                >
                  {langformTeilIDetail.voraussetzungen.kurzformLink.text}
                </Link>
                {langformTeilIDetail.voraussetzungen.hinweis.split('kostenlose Kurzform')[1]}
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
            title={langformTeilIDetail.lehrer.name}
            desc={`${langformTeilIDetail.lehrer.titel}\n\n${langformTeilIDetail.lehrer.text}`}
            cta={langformTeilIDetail.lehrer.cta}
            imageSrc={langformTeilIDetail.lehrer.imageSrc}
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
            {langformTeilIDetail.testimonials.map((testimonial, idx) => (
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
            <FAQ items={langformTeilIDetail.faq} />
          </div>
        </Container>
      </Section>

      {/* Sektion 12: Preisoptionen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {langformTeilIDetail.preisoptionen.title}
          </h2>
          <Grid cols={2} gap="lg" className="mb-8">
            {langformTeilIDetail.preisoptionen.optionen.map((option, idx) => (
              <PreisoptionCard key={idx} {...option} />
            ))}
          </Grid>
          {/* Paket Tip */}
          <div className="mb-6 mx-auto max-w-2xl">
            <HighlightBox
              title={langformTeilIDetail.preisoptionen.paketTip.title}
              desc={`${langformTeilIDetail.preisoptionen.paketTip.desc} ${langformTeilIDetail.preisoptionen.paketTip.preis}`}
              cta={langformTeilIDetail.preisoptionen.paketTip.cta}
            />
          </div>
          {/* Wien Rabatt */}
          <div className="mx-auto max-w-2xl">
            <InfoBox
              title={langformTeilIDetail.preisoptionen.wienRabatt.title}
              content={langformTeilIDetail.preisoptionen.wienRabatt.desc}
              type="info"
              cta={langformTeilIDetail.preisoptionen.wienRabatt.cta}
            />
          </div>
        </Container>
      </Section>

      {/* Sektion 13: Wie geht es danach weiter? */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {langformTeilIDetail.naechsterSchritt.title}
            </h2>
            <Card className="p-6">
              <h3 className="mb-2 font-display text-xl font-normal text-dark">
                {langformTeilIDetail.naechsterSchritt.kurs.name}
              </h3>
              <p className="mb-4 text-dark/80">{langformTeilIDetail.naechsterSchritt.kurs.desc}</p>
              <div className="font-semibold text-primary">
                {langformTeilIDetail.naechsterSchritt.kurs.preis}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Sektion 14: Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-normal text-white md:text-4xl">
              {langformTeilIDetail.finalCTA.title}
            </h2>
            <div className="mb-6">
              <div className="flex flex-wrap items-baseline justify-center gap-2">
                <span className="text-3xl font-semibold text-primary">
                  {langformTeilIDetail.finalCTA.preis}
                </span>
                <span className="text-lg text-white/80">
                  {langformTeilIDetail.finalCTA.preisAbo}
                </span>
              </div>
            </div>
            <div className="mb-8">
              <Button href={langformTeilIDetail.finalCTA.cta.href} variant="primary">
                {langformTeilIDetail.finalCTA.cta.text}
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              {langformTeilIDetail.finalCTA.vertrauen.map((item, idx) => (
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

