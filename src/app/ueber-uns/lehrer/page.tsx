'use client'

import { useState, useMemo } from 'react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Grid from '@/components/layout/Grid'
import LehrerCard from '@/components/features/LehrerCard'
import FAQ from '@/components/features/FAQ'
import HighlightBox from '@/components/features/HighlightBox'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { lehrerDetail } from '@/data/content'

export default function LehrerPage() {
  const [filterRegion, setFilterRegion] = useState('Alle')
  const [filterAngebot, setFilterAngebot] = useState('Alle')

  const filteredLehrer = useMemo(() => {
    return lehrerDetail.section3.lehrer.filter((lehrer) => {
      if (filterRegion !== 'Alle' && !lehrer.region.toLowerCase().includes(filterRegion.toLowerCase())) {
        return false
      }
      if (filterAngebot !== 'Alle') {
        const angebotText = Array.isArray(lehrer.angebot) ? lehrer.angebot.join(' ') : lehrer.angebot || ''
        if (!angebotText.toLowerCase().includes(filterAngebot.toLowerCase().replace('/', ''))) {
          return false
        }
      }
      return true
    })
  }, [filterRegion, filterAngebot])

  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {lehrerDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {lehrerDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {lehrerDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 1: Das Lehrer-Netzwerk */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {lehrerDetail.section1.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {lehrerDetail.section1.desc}
              </p>
              <div className="mb-6 rounded-lg border border-primary/20 bg-background-alt p-6">
                <p className="text-dark/80 italic">{lehrerDetail.section1.zusatztext}</p>
              </div>
              <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
                <p className="text-sm text-dark/80">{lehrerDetail.section1.infobox}</p>
              </div>
            </div>
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Gruppenbild der Lehrer</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 2: Filter */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {lehrerDetail.section2.title}
          </h2>
          <div className="mx-auto max-w-3xl rounded-lg border border-border bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-dark">
                  Region
                </label>
                <select
                  value={filterRegion}
                  onChange={(e) => setFilterRegion(e.target.value)}
                  className="w-full rounded border border-border bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-dark focus:border-primary focus:outline-none"
                >
                  {lehrerDetail.section2.regionen.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-dark">
                  Angebot
                </label>
                <select
                  value={filterAngebot}
                  onChange={(e) => setFilterAngebot(e.target.value)}
                  className="w-full rounded border border-border bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-dark focus:border-primary focus:outline-none"
                >
                  {lehrerDetail.section2.angebote.map((angebot) => (
                    <option key={angebot} value={angebot}>
                      {angebot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 3: Lehrer-Kacheln */}
      <Section id="section3" bg="white">
        <Container className="py-16 md:py-24">
          {filteredLehrer.length > 0 ? (
            <Grid cols={2} gap="lg">
              {filteredLehrer.map((lehrer, idx) => (
                <LehrerCard key={idx} {...lehrer} />
              ))}
            </Grid>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-dark/80">Keine Lehrer gefunden. Bitte wähle andere Filter.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* Sektion 4: Kein Lehrer in der Nähe? */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <HighlightBox
              badge="🌍 KEIN LEHRER IN DEINER NÄHE?"
              title={lehrerDetail.section4.title}
              desc={lehrerDetail.section4.desc}
              features={lehrerDetail.section4.optionen}
            />
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {lehrerDetail.section4.ctas.map((cta, idx) => (
                <Button key={idx} href={cta.href} variant="primary">
                  {cta.text}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 5: Zwei Zertifizierungsstufen */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {lehrerDetail.section5.title}
          </h2>
          <Grid cols={2} gap="lg">
            <Card variant="default" className="p-8 text-center">
              <div className="mb-4 text-5xl">{lehrerDetail.section5.kursleiter.symbol}</div>
              <h3 className="mb-4 font-display text-xl font-normal text-dark">
                {lehrerDetail.section5.kursleiter.titel}
              </h3>
              <div className="space-y-3 text-left">
                <div>
                  <div className="mb-1 text-sm font-semibold text-dark">Berechtigung:</div>
                  <div className="text-sm text-dark/80">{lehrerDetail.section5.kursleiter.berechtigung}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm font-semibold text-dark">Ausbildung:</div>
                  <div className="text-sm text-dark/80">{lehrerDetail.section5.kursleiter.ausbildung}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm font-semibold text-dark">Voraussetzung:</div>
                  <div className="text-sm text-dark/80">{lehrerDetail.section5.kursleiter.voraussetzung}</div>
                </div>
              </div>
            </Card>
            <Card variant="highlight" className="p-8 text-center">
              <div className="mb-4 text-5xl">{lehrerDetail.section5.lehrer.symbol}</div>
              <h3 className="mb-4 font-display text-xl font-normal text-dark">
                {lehrerDetail.section5.lehrer.titel}
              </h3>
              <div className="space-y-3 text-left">
                <div>
                  <div className="mb-1 text-sm font-semibold text-dark">Berechtigung:</div>
                  <div className="text-sm text-dark/80">{lehrerDetail.section5.lehrer.berechtigung}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm font-semibold text-dark">Ausbildung:</div>
                  <div className="text-sm text-dark/80">{lehrerDetail.section5.lehrer.ausbildung}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm font-semibold text-dark">Voraussetzung:</div>
                  <div className="text-sm text-dark/80">{lehrerDetail.section5.lehrer.voraussetzung}</div>
                </div>
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Sektion 6: Selbst Lehrer werden */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Ausbildungssituation</span>
              </div>
            </div>
            <div>
              {lehrerDetail.section6.subline && (
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {lehrerDetail.section6.subline}
                </p>
              )}
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {lehrerDetail.section6.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {lehrerDetail.section6.desc}
              </p>
              <div className="rounded-lg border border-primary/20 bg-background-alt p-6">
                <p className="text-dark/80">{lehrerDetail.section6.zusatztext}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 7: Der Weg zum Lehrer */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {lehrerDetail.section7.title}
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {lehrerDetail.section7.schritte.map((schritt, idx) => (
              <div key={idx} className="flex gap-6 border-l-2 border-primary/30 pl-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    {schritt.nummer}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="mb-2 font-display text-xl font-normal text-dark">{schritt.titel}</h3>
                  <p className="text-dark/80">{schritt.beschreibung}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 8: Ausbildungs-Übersicht */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {lehrerDetail.section8.title}
          </h2>
          <Grid cols={2} gap="lg">
            <Card variant="default" className="p-8 flex flex-col h-full">
              <h3 className="mb-6 font-display text-2xl font-normal text-dark">
                {lehrerDetail.section8.kursleiter.titel}
              </h3>
              <div className="mb-6 flex-1 space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-dark">Dauer:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.kursleiter.dauer}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Ort:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.kursleiter.ort}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Voraussetzung:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.kursleiter.voraussetzung}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Preis:</span>{' '}
                  <span className="text-lg font-semibold text-primary">{lehrerDetail.section8.kursleiter.preis}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Abschluss:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.kursleiter.abschluss}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Nächster Start:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.kursleiter.naechsterStart}</span>
                </div>
              </div>
              <Button href={lehrerDetail.section8.kursleiter.cta.href} variant="primary" className="w-full">
                {lehrerDetail.section8.kursleiter.cta.text}
              </Button>
            </Card>
            <Card variant="highlight" className="p-8 flex flex-col h-full">
              <h3 className="mb-6 font-display text-2xl font-normal text-dark">
                {lehrerDetail.section8.lehrer.titel}
              </h3>
              <div className="mb-6 flex-1 space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-dark">Dauer:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.lehrer.dauer}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Ort:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.lehrer.ort}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Voraussetzung:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.lehrer.voraussetzung}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Preis:</span>{' '}
                  <span className="text-lg font-semibold text-primary">{lehrerDetail.section8.lehrer.preis}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Abschluss:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.lehrer.abschluss}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark">Einstieg:</span>{' '}
                  <span className="text-dark/80">{lehrerDetail.section8.lehrer.einstieg}</span>
                </div>
              </div>
              <Button href={lehrerDetail.section8.lehrer.cta.href} variant="primary" className="w-full">
                {lehrerDetail.section8.lehrer.cta.text}
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Sektion 9: Vorteile als zertifizierter Lehrer */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {lehrerDetail.section9.title}
          </h2>
          <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
            {lehrerDetail.section9.vorteile.map((vorteil, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-lg border border-primary/20 bg-white p-4">
                <span className="mt-0.5 text-primary text-lg">✓</span>
                <p className="flex-1 text-dark/80">{vorteil}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 10: Das jährliche Lehrer-Treffen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {lehrerDetail.section10.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {lehrerDetail.section10.desc}
              </p>
              <Card className="p-6">
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-dark">Termin:</span>{' '}
                    <span className="text-dark/80">{lehrerDetail.section10.details.termin}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-dark">Dauer:</span>{' '}
                    <span className="text-dark/80">{lehrerDetail.section10.details.dauer}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-dark">Ort:</span>{' '}
                    <span className="text-dark/80">{lehrerDetail.section10.details.ort}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-dark">Preis:</span>{' '}
                    <span className="text-dark/80">{lehrerDetail.section10.details.preis}</span>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Lehrer-Treffen</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 11: FAQ */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {lehrerDetail.section11.title}
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={lehrerDetail.section11.faq} />
          </div>
        </Container>
      </Section>

      {/* Sektion 12: Kontakt für Interessenten */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <HighlightBox
              badge="🎓 INTERESSE AN DER AUSBILDUNG?"
              title={lehrerDetail.section12.title}
              desc={lehrerDetail.section12.desc}
              features={[
                `📞 ${lehrerDetail.section12.kontakt.telefon}`,
                `✉️ ${lehrerDetail.section12.kontakt.email}`,
              ]}
            />
            <div className="mt-6 text-center">
              <Button href={lehrerDetail.section12.cta.href} variant="primary">
                {lehrerDetail.section12.cta.text}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {lehrerDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {lehrerDetail.finalCTA.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {lehrerDetail.finalCTA.ctas.map((cta, idx) => (
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
