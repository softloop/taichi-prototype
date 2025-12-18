import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import Grid from '@/components/layout/Grid'
import Button from '@/components/ui/Button'
import { kursUebersicht } from '@/data/courses'
import TeaserCard from '@/components/features/TeaserCard'

export default function KursePage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="mb-4 font-display text-4xl font-normal md:text-5xl text-dark">
              {kursUebersicht.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {kursUebersicht.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Online-Kurse */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={kursUebersicht.online.subtitle}
            title={kursUebersicht.online.title}
            className="mb-4 text-center"
          />
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-dark/80">
            {kursUebersicht.online.desc}
          </p>
          <Grid cols={3} gap="lg" className="mb-8">
            {kursUebersicht.online.teaser.map((teaser, idx) => (
              <TeaserCard key={idx} {...teaser} />
            ))}
          </Grid>
          <div className="text-center">
            <Button href={kursUebersicht.online.cta.href} variant="secondary">
              {kursUebersicht.online.cta.text} →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Live & Zoom */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={kursUebersicht.live.subtitle}
            title={kursUebersicht.live.title}
            className="mb-4 text-center"
          />
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-dark/80">
            {kursUebersicht.live.desc}
          </p>
          <Grid cols={3} gap="lg" className="mb-8">
            {kursUebersicht.live.teaser.map((teaser, idx) => (
              <TeaserCard key={idx} {...teaser} />
            ))}
          </Grid>
          {kursUebersicht.live.additional && kursUebersicht.live.additional.length > 0 && (
            <div className="mb-6 text-center">
              <p className="mb-2 text-sm font-semibold text-dark">Zusätzlich:</p>
              <ul className="space-y-1 text-sm text-dark/80">
                {kursUebersicht.live.additional.map((item, idx) => (
                  <li key={idx}>
                    {item.text} – {item.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {kursUebersicht.live.nextStart && (
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold text-dark">
                Nächster Start: {kursUebersicht.live.nextStart}
              </p>
            </div>
          )}
          <div className="text-center">
            <Button href={kursUebersicht.live.cta.href} variant="secondary">
              {kursUebersicht.live.cta.text} →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Präsenz */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={kursUebersicht.praesenz.subtitle}
            title={kursUebersicht.praesenz.title}
            className="mb-4 text-center"
          />
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-dark/80">
            {kursUebersicht.praesenz.desc}
          </p>
          <Grid cols={3} gap="lg" className="mb-8">
            {kursUebersicht.praesenz.teaser.map((teaser, idx) => (
              <TeaserCard key={idx} {...teaser} />
            ))}
          </Grid>
          {kursUebersicht.praesenz.osterRetreat && kursUebersicht.praesenz.osterRetreat.length > 0 && (
            <div className="mb-6">
              <p className="mb-4 text-center text-sm font-semibold text-dark">
                Oster-Retreat Kurse:
              </p>
              <ul className="mx-auto max-w-2xl space-y-2 text-sm text-dark/80">
                {kursUebersicht.praesenz.osterRetreat.map((kurs, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{kurs.title}</span>
                    <span className="text-dark/60">– {kurs.teacher}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {kursUebersicht.praesenz.location && (
            <div className="mb-8 text-center">
              <p className="text-sm text-dark/70">
                <strong>Kursort Wien:</strong> {kursUebersicht.praesenz.location}
              </p>
            </div>
          )}
          <div className="text-center">
            <Button href={kursUebersicht.praesenz.cta.href} variant="secondary">
              {kursUebersicht.praesenz.cta.text} →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Orientierungs-Box */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl rounded-lg border border-border bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-center font-display text-2xl font-normal text-dark">
              {kursUebersicht.orientierung.title}
            </h2>
            <p className="mb-8 text-center text-dark/80">
              {kursUebersicht.orientierung.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {kursUebersicht.orientierung.ctas.map((cta, idx) => (
                <Button key={idx} href={cta.href} variant={idx === 0 ? 'secondary' : 'primary'}>
                  {cta.text}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
