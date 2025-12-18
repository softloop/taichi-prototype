'use client'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import Grid from '@/components/layout/Grid'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { liveKurseDetail } from '@/data/courses'
import WebinarCard from '@/components/features/WebinarCard'
import ZoomMeetingCard from '@/components/features/ZoomMeetingCard'
import EinzelunterrichtCard from '@/components/features/EinzelunterrichtCard'
import VorteileCard from '@/components/features/VorteileCard'
import HighlightBox from '@/components/features/HighlightBox'
import FAQ from '@/components/features/FAQ'

export default function LiveKursePage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {liveKurseDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {liveKurseDetail.hero.title}
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-lg text-dark/80">
              {liveKurseDetail.hero.desc}
            </p>
            <p className="text-sm font-semibold text-dark">
              Nächster Start: {liveKurseDetail.hero.nextStart}
            </p>
          </div>
        </Container>
      </Section>

      {/* Einleitungs-Karten */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            <Card
              variant="hover"
              className="group relative p-6 cursor-pointer transition-all hover:shadow-lg"
              onClick={() => {
                document.getElementById('webinare')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <h3 className="mb-3 font-display text-xl font-normal text-dark">
                {liveKurseDetail.einleitung[0].title}
              </h3>
              <p className="mb-4 text-dark/80">{liveKurseDetail.einleitung[0].desc}</p>
              {/* Scroll-Indikator */}
              <div className="flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <span className="mr-2">Zum Abschnitt scrollen</span>
                <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </Card>
            <Card
              variant="hover"
              className="group relative p-6 cursor-pointer transition-all hover:shadow-lg"
              onClick={() => {
                document.getElementById('zoom-meeting')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <h3 className="mb-3 font-display text-xl font-normal text-dark">
                {liveKurseDetail.einleitung[1].title}
              </h3>
              <p className="mb-4 text-dark/80">{liveKurseDetail.einleitung[1].desc}</p>
              {/* Scroll-Indikator */}
              <div className="flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <span className="mr-2">Zum Abschnitt scrollen</span>
                <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </Card>
            <Card
              variant="hover"
              className="group relative p-6 cursor-pointer transition-all hover:shadow-lg"
              onClick={() => {
                document.getElementById('einzelunterricht')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <h3 className="mb-3 font-display text-xl font-normal text-dark">
                {liveKurseDetail.einleitung[2].title}
              </h3>
              <p className="mb-4 text-dark/80">{liveKurseDetail.einleitung[2].desc}</p>
              {/* Scroll-Indikator */}
              <div className="flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <span className="mr-2">Zum Abschnitt scrollen</span>
                <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Webinare */}
      <Section id="webinare" bg="base">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={liveKurseDetail.webinare.subtitle}
            title={liveKurseDetail.webinare.title}
            className="mb-4 text-center"
          />
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-dark/80">
            {liveKurseDetail.webinare.desc}
          </p>
          <div className="mx-auto max-w-2xl space-y-8">
            {liveKurseDetail.webinare.items.map((webinar, idx) => (
              <WebinarCard key={idx} {...webinar} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Zoom-Meeting */}
      <Section id="zoom-meeting" bg="white">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={liveKurseDetail.zoomMeeting.subtitle}
            title={liveKurseDetail.zoomMeeting.title}
            className="mb-4 text-center"
          />
          <div className="mx-auto max-w-2xl">
            <ZoomMeetingCard {...liveKurseDetail.zoomMeeting} />
          </div>
        </Container>
      </Section>

      {/* Einzelunterricht */}
      <Section id="einzelunterricht" bg="base">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={liveKurseDetail.einzelunterricht.subtitle}
            title={liveKurseDetail.einzelunterricht.title}
            className="mb-4 text-center"
          />
          <div className="mx-auto max-w-2xl">
            <EinzelunterrichtCard {...liveKurseDetail.einzelunterricht} />
          </div>
        </Container>
      </Section>

      {/* Kombi-Tipp */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <HighlightBox
              badge={liveKurseDetail.kombiTip.title}
              title={liveKurseDetail.kombiTip.subtitle}
              features={liveKurseDetail.kombiTip.steps}
              className="mb-4"
            />
            <div className="flex flex-wrap justify-center gap-4">
              {liveKurseDetail.kombiTip.ctas.map((cta, idx) => (
                <Button key={idx} href={cta.href} variant={idx === 0 ? 'secondary' : 'primary'}>
                  {cta.text}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Vorteile */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            {liveKurseDetail.vorteile.title}
          </h2>
          <Grid cols={3} gap="lg">
            {liveKurseDetail.vorteile.items.map((item, idx) => (
              <VorteileCard key={idx} {...item} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Technische Voraussetzungen */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl rounded-lg border-2 border-primary/30 bg-background-alt p-8">
            <h3 className="mb-6 text-center font-display text-xl font-normal text-dark">
              {liveKurseDetail.technik.title}
            </h3>
            <ul className="space-y-3">
              {liveKurseDetail.technik.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-dark/80">
                  <span className="mr-3 text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            Häufige Fragen
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={liveKurseDetail.faq} />
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {liveKurseDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">{liveKurseDetail.finalCTA.desc}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {liveKurseDetail.finalCTA.ctas.map((cta, idx) => (
                <Button key={idx} href={cta.href} variant="primary">
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
