'use client'

import { useState, useMemo } from 'react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Grid from '@/components/layout/Grid'
import CourseFilter from '@/components/features/CourseFilter'
import PraesenzKursCard from '@/components/features/PraesenzKursCard'
import PaketCard from '@/components/features/PaketCard'
import InfoBox from '@/components/features/InfoBox'
import FAQ from '@/components/features/FAQ'
import { praesenzKurseDetail } from '@/data/courses'

export default function PraesenzKursePage() {
  const [filters, setFilters] = useState({
    fuerWen: 'alle',
    niveau: 'alle',
    kursart: 'alle',
  })

  const filteredKurse = useMemo(() => {
    return praesenzKurseDetail.kurse.filter((kurs) => {
      if (filters.fuerWen !== 'alle' && kurs.tags.fuerWen !== filters.fuerWen) return false
      if (filters.niveau !== 'alle' && kurs.tags.niveau !== filters.niveau) return false
      if (filters.kursart !== 'alle' && kurs.tags.kursart !== filters.kursart) return false
      return true
    })
  }, [filters])

  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {praesenzKurseDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {praesenzKurseDetail.hero.title}
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-lg text-dark/80">
              Samstagskurse in Wien und das Oster-Retreat in den Wiener Alpen – tauche ein in die Praxis unter direkter Anleitung von Meister Frieder Anders und seinem Team.
            </p>
            <p className="text-sm font-semibold text-dark">
              Auskunft zu allen Kursen: {praesenzKurseDetail.hero.kontakt}
            </p>
          </div>
        </Container>
      </Section>

      {/* Filter */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <CourseFilter
            fuerWen={praesenzKurseDetail.filter.fuerWen}
            niveau={praesenzKurseDetail.filter.niveau}
            kursart={praesenzKurseDetail.filter.kursart}
            onFilterChange={setFilters}
          />

          {/* Kurse */}
          <Grid cols={2} gap="lg">
            {filteredKurse.length > 0 ? (
              filteredKurse.map((kurs) => <PraesenzKursCard key={kurs.id} {...kurs} />)
            ) : (
              <div className="col-span-2 py-12 text-center text-dark/60">
                Keine Kurse gefunden. Bitte wähle andere Filter.
              </div>
            )}
          </Grid>
        </Container>
      </Section>

      {/* Paketpreise */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-8 text-center font-display text-4xl font-normal text-dark">
            Paketpreise
          </h2>
          
          <div className="mb-12">
            <h3 className="mb-6 text-center font-display text-2xl font-normal text-dark">Wien</h3>
            <Grid cols={2} gap="lg">
              {praesenzKurseDetail.pakete.wien.map((paket, idx) => (
                <PaketCard key={idx} {...paket} />
              ))}
            </Grid>
          </div>

          <div>
            <h3 className="mb-6 text-center font-display text-2xl font-normal text-dark">Ostern</h3>
            <Grid cols={2} gap="lg">
              {praesenzKurseDetail.pakete.ostern.map((paket, idx) => (
                <PaketCard key={idx} {...paket} />
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Info-Boxen */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={2} gap="lg">
            {praesenzKurseDetail.infoBoxen.map((box, idx) => (
              <InfoBox key={idx} {...box} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Kursorte */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            Kursorte
          </h2>
          <Grid cols={2} gap="lg">
            {praesenzKurseDetail.kursorte.map((ort, idx) => (
              <div key={idx} className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 font-display text-xl font-normal text-dark">{ort.name}</h3>
                <div className="space-y-2 text-sm text-dark/80">
                  <div>
                    <span className="font-semibold text-dark">Ort:</span> {ort.ort}
                  </div>
                  <div>
                    <span className="font-semibold text-dark">Adresse:</span> {ort.adresse}
                  </div>
                  {ort.anfahrt && (
                    <div>
                      <span className="font-semibold text-dark">Anfahrt:</span> {ort.anfahrt}
                    </div>
                  )}
                  {ort.website && (
                    <div>
                      <span className="font-semibold text-dark">Website:</span>{' '}
                      <a href={`https://${ort.website}`} className="text-primary hover:underline">
                        {ort.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            Häufige Fragen
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={praesenzKurseDetail.faq} />
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {praesenzKurseDetail.finalCTA.title}
            </h2>
            <p className="mb-4 text-lg text-white/80">{praesenzKurseDetail.finalCTA.desc}</p>
            <p className="text-lg font-semibold text-white">
              {praesenzKurseDetail.finalCTA.kontakt}
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
