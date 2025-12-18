'use client'

import { useState } from 'react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { wissenPage } from '@/data/content'

export default function WissenPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Implement newsletter subscription
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Danke für Deine Anmeldung!') // Placeholder
      setEmail('')
    }, 1000)
  }

  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {wissenPage.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {wissenPage.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {wissenPage.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 1: Drei Bereiche */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            {wissenPage.section1.bereiche.map((bereich, idx) => (
              <Card key={idx} variant="hover" className="text-center flex flex-col h-full">
                <div className="mb-4 text-5xl">{bereich.icon}</div>
                <h3 className="mb-3 font-display text-2xl font-normal text-dark">
                  {bereich.title}
                </h3>
                <p className="mb-6 flex-1 text-dark/80">{bereich.desc}</p>
                <Button href={bereich.cta.href} variant="secondary" className="w-full">
                  {bereich.cta.text}
                </Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Sektion 2: Neueste Inhalte */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {wissenPage.section2.title}
          </h2>
          <Grid cols={3} gap="lg">
            {/* Neuestes Buch */}
            <Card variant="hover" className="flex flex-col h-full">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {wissenPage.section2.neuestesBuch.label}
              </div>
              <div className="mb-4 aspect-[3/4] w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-4xl text-dark/30">📖</span>
              </div>
              <div className="mb-2 text-sm font-semibold text-primary">
                {wissenPage.section2.neuestesBuch.jahr}
              </div>
              <h3 className="mb-3 font-display text-xl font-normal text-dark">
                {wissenPage.section2.neuestesBuch.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-dark/80">
                {wissenPage.section2.neuestesBuch.beschreibung}
              </p>
              <Button href={wissenPage.section2.neuestesBuch.cta.href} variant="secondary" className="w-full">
                {wissenPage.section2.neuestesBuch.cta.text}
              </Button>
            </Card>

            {/* Neuester Artikel */}
            <Card variant="hover" className="flex flex-col h-full">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {wissenPage.section2.neuesterArtikel.label}
              </div>
              <div className="mb-2 text-sm font-semibold text-primary">
                {wissenPage.section2.neuesterArtikel.datum}
              </div>
              <h3 className="mb-3 font-display text-xl font-normal text-dark">
                {wissenPage.section2.neuesterArtikel.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-dark/80">
                {wissenPage.section2.neuesterArtikel.beschreibung}
              </p>
              <Button href={wissenPage.section2.neuesterArtikel.cta.href} variant="secondary" className="w-full">
                {wissenPage.section2.neuesterArtikel.cta.text}
              </Button>
            </Card>

            {/* Neuestes Video */}
            <Card variant="hover" className="flex flex-col h-full">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {wissenPage.section2.neuestesVideo.label}
              </div>
              <div className="mb-4 aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center relative">
                <span className="text-4xl text-dark/30">▶️</span>
                <div className="absolute bottom-2 right-2 bg-dark/80 text-white text-xs px-2 py-1 rounded">
                  {wissenPage.section2.neuestesVideo.dauer}
                </div>
              </div>
              <h3 className="mb-3 font-display text-xl font-normal text-dark">
                {wissenPage.section2.neuestesVideo.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-dark/80">
                {wissenPage.section2.neuestesVideo.beschreibung}
              </p>
              <Button href={wissenPage.section2.neuestesVideo.cta.href} variant="secondary" className="w-full">
                {wissenPage.section2.neuestesVideo.cta.text}
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Sektion 3: Themen-Einstieg */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-4 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {wissenPage.section3.title}
          </h2>
          <p className="mb-8 text-center text-lg text-dark/80 max-w-2xl mx-auto">
            {wissenPage.section3.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {wissenPage.section3.themen.map((thema, idx) => (
              <Button key={idx} href={thema.href} variant="secondary">
                {thema.name}
              </Button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 4: Zitat */}
      <Section bg="primary-light">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="mb-4 font-display text-2xl italic leading-relaxed text-dark md:text-3xl">
              {wissenPage.section4.quote.text}
            </blockquote>
            <p className="text-lg text-dark/70">— {wissenPage.section4.quote.author}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 5: Newsletter */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
              {wissenPage.section5.title}
            </h2>
            <p className="mb-8 text-lg text-dark/80">
              {wissenPage.section5.desc}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  required
                  className="flex-1 rounded-lg border border-border px-4 py-3 text-dark focus:border-primary focus:outline-none"
                />
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? '...' : 'Anmelden'}
                </Button>
              </div>
              <p className="text-xs text-dark/60">
                {wissenPage.section5.hinweis}
              </p>
            </form>
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {wissenPage.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {wissenPage.finalCTA.desc}
            </p>
            <Button href={wissenPage.finalCTA.cta.href} variant="primary">
              {wissenPage.finalCTA.cta.text}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}







