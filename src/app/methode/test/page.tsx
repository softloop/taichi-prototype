'use client'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ImageTextSection from '@/components/features/ImageTextSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import FAQ from '@/components/features/FAQ'
import VideoPlaceholder from '@/components/features/VideoPlaceholder'
import BirthDateCalculator from '@/components/features/BirthDateCalculator'
import { atemtypTestDetail } from '@/data/content'
import { useEffect } from 'react'

export default function AtemtypTestPage() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const scrollToElement = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
        const offset = 80 // Account for fixed header if any
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }

    // Handle initial hash in URL
    if (window.location.hash) {
      setTimeout(() => {
        scrollToElement(window.location.hash.substring(1))
      }, 100)
    }

    // Handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement
      if (link && link.getAttribute('href') !== '#') {
        e.preventDefault()
        const targetId = link.getAttribute('href')?.substring(1)
        if (targetId) {
          scrollToElement(targetId)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {atemtypTestDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {atemtypTestDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {atemtypTestDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 1: Drei Wege zum Atemtyp */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {atemtypTestDetail.section1.title}
          </h2>
          <p className="mb-8 text-center text-lg text-dark/80">
            {atemtypTestDetail.section1.desc}
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {atemtypTestDetail.section1.methods.map((method, idx) => (
              <Card key={idx} variant="hover" className="p-6 flex flex-col">
                <h3 className="mb-3 font-display text-xl font-normal text-dark">
                  {method.title}
                </h3>
                <p className="mb-4 flex-1 text-dark/80">{method.desc}</p>
                <div className="mb-4 space-y-2">
                  <div className="text-sm font-semibold text-primary">{method.feature}</div>
                  <div className="text-sm text-dark/70">{method.price}</div>
                </div>
                <Button href={method.cta.href} variant="primary" className="w-full">
                  {method.cta.text}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 2: Atemtyp nach Geburtsdatum */}
      <Section id="geburtsdatum" bg="base">
        <Container className="py-16 md:py-24">
          {/* Titel */}
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
              {atemtypTestDetail.section2.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-dark/80">
              {atemtypTestDetail.section2.desc}
            </p>
          </div>

          {/* Calculator prominent in der Mitte */}
          <div className="mb-8 mx-auto max-w-md">
            <BirthDateCalculator />
          </div>

          {/* Benefits als Trust-Indikatoren */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/50">
              <div className="mb-2 text-3xl">👤</div>
              <div className="text-sm font-semibold text-dark mb-1">Persönlich berechnet</div>
              <div className="text-xs text-dark/70">Vom Meister geprüft</div>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/50">
              <div className="mb-2 text-3xl">🆓</div>
              <div className="text-sm font-semibold text-dark mb-1">Komplett kostenlos</div>
              <div className="text-xs text-dark/70">Keine Registrierung</div>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/50">
              <div className="mb-2 text-3xl">📧</div>
              <div className="text-sm font-semibold text-dark mb-1">Schnell per E-Mail</div>
              <div className="text-xs text-dark/70">Berechnung & Versand</div>
            </div>
          </div>

          {/* Hinweis als dezente Info-Box */}
          <div className="mx-auto max-w-2xl rounded-lg bg-primary/5 border border-primary/20 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-primary text-lg">ℹ️</div>
              <p className="text-sm text-dark/70 leading-relaxed">
                {atemtypTestDetail.section2.hinweis}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 3: Körperlicher Selbsttest */}
      <Section id="selbsttest" bg="white">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={true}
            subline=""
            title={atemtypTestDetail.section3.title}
            desc={atemtypTestDetail.section3.desc}
            cta={{ text: '', href: '#' }}
          />
        </Container>
      </Section>

      {/* Sektion 4: Die Testübungen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {atemtypTestDetail.section4.title}
          </h2>
          <p className="mb-8 text-center text-lg text-dark/80">
            {atemtypTestDetail.section4.desc}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {atemtypTestDetail.section4.tests.map((test, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="mb-4 font-display text-xl font-normal text-dark">
                  {test.title}
                </h3>
                <p className="mb-6 text-dark/80">{test.desc}</p>
                <div className="space-y-3">
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                    <div className="mb-1 text-sm font-semibold text-primary">☽ Einatmer:</div>
                    <div className="text-sm text-dark/80">{test.einatmer}</div>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                    <div className="mb-1 text-sm font-semibold text-primary">☀ Ausatmer:</div>
                    <div className="text-sm text-dark/80">{test.ausatmer}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 5: Video-Anleitung */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <VideoPlaceholder
              title={atemtypTestDetail.section5.title}
              caption={atemtypTestDetail.section5.caption}
            />
          </div>
        </Container>
      </Section>

      {/* Sektion 6: Atemtyp-Bestimmung per Zoom */}
      <Section id="zoom" bg="base">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={true}
            subline={atemtypTestDetail.section6.subline}
            title={atemtypTestDetail.section6.title}
            desc={atemtypTestDetail.section6.desc}
            cta={{ text: '', href: '#' }}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h4 className="mb-4 font-display text-lg font-normal text-dark">Details</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-dark">Format:</span>{' '}
                  <span className="text-dark/80">{atemtypTestDetail.section6.details.format}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Dauer:</span>{' '}
                  <span className="text-dark/80">{atemtypTestDetail.section6.details.dauer}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Inhalt:</span>{' '}
                  <span className="text-dark/80">{atemtypTestDetail.section6.details.inhalt}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Preis:</span>{' '}
                  <span className="text-lg font-semibold text-primary">
                    {atemtypTestDetail.section6.details.preis}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Termine:</span>{' '}
                  <span className="text-dark/80">{atemtypTestDetail.section6.details.termine}</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 flex flex-col justify-between">
              <div>
                <h4 className="mb-4 font-display text-lg font-normal text-dark">Kontakt</h4>
                <p className="text-dark/80">{atemtypTestDetail.section6.kontakt}</p>
              </div>
              <div className="mt-6">
                <Button href={atemtypTestDetail.section6.cta.href} variant="primary" className="w-full">
                  {atemtypTestDetail.section6.cta.text}
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Sektion 7: Dein Ergebnis */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {atemtypTestDetail.section7.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Einatmer */}
            <Card variant="highlight" className="p-6">
              <div className="mb-4 text-center text-5xl">
                {atemtypTestDetail.section7.einatmer.symbol}
              </div>
              <h3 className="mb-6 text-center font-display text-2xl font-normal text-dark">
                {atemtypTestDetail.section7.einatmer.name}
              </h3>
              <div className="space-y-4">
                {atemtypTestDetail.section7.einatmer.aspects.map((aspect, idx) => (
                  <div key={idx} className="border-b border-border/50 pb-3 last:border-0">
                    <div className="mb-1 text-sm font-semibold text-dark">{aspect.label}:</div>
                    <div className="text-dark/80">{aspect.wert}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Ausatmer */}
            <Card variant="hover" className="p-6">
              <div className="mb-4 text-center text-5xl">
                {atemtypTestDetail.section7.ausatmer.symbol}
              </div>
              <h3 className="mb-6 text-center font-display text-2xl font-normal text-dark">
                {atemtypTestDetail.section7.ausatmer.name}
              </h3>
              <div className="space-y-4">
                {atemtypTestDetail.section7.ausatmer.aspects.map((aspect, idx) => (
                  <div key={idx} className="border-b border-border/50 pb-3 last:border-0">
                    <div className="mb-1 text-sm font-semibold text-dark">{aspect.label}:</div>
                    <div className="text-dark/80">{aspect.wert}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Sektion 8: Häufige Fragen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            {atemtypTestDetail.section8.title}
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={atemtypTestDetail.section8.faq} />
          </div>
        </Container>
      </Section>

      {/* Sektion 9: Nächste Schritte */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {atemtypTestDetail.section9.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {atemtypTestDetail.section9.steps.map((step, idx) => (
              <Card key={idx} variant="hover" className="p-6 flex flex-col">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {idx + 1}
                </div>
                <h3 className="mb-3 font-display text-xl font-normal text-dark">{step.title}</h3>
                <p className="mb-6 flex-1 text-dark/80">{step.desc}</p>
                <Button href={step.cta.href} variant="primary" className="w-full">
                  {step.cta.text}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 10: Einführungskurs-Hinweis */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Card variant="highlight" className="p-8 text-center">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="mb-4 font-display text-2xl font-normal text-dark">
                {atemtypTestDetail.section10.title}
              </h3>
              <p className="mb-4 text-lg text-dark/80">
                {atemtypTestDetail.section10.desc}
              </p>
              <p className="mb-6 font-semibold text-primary">
                {atemtypTestDetail.section10.termin}
              </p>
              <Button href={atemtypTestDetail.section10.cta.href} variant="primary">
                {atemtypTestDetail.section10.cta.text}
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {atemtypTestDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {atemtypTestDetail.finalCTA.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {atemtypTestDetail.finalCTA.ctas.map((cta, idx) => (
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
