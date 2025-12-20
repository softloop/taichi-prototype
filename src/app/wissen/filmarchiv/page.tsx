'use client'

import { useState, useMemo } from 'react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import VideoFilter from '@/components/features/VideoFilter'
import FeaturedVideo from '@/components/features/FeaturedVideo'
import VideoCardExtended from '@/components/features/VideoCardExtended'
import { filmarchivDetail } from '@/data/content'

export default function FilmarchivPage() {
  const [selectedKategorie, setSelectedKategorie] = useState('Alle')
  const [selectedThema, setSelectedThema] = useState('Alle')
  const [selectedAtemtyp, setSelectedAtemtyp] = useState('Alle')

  // Filter videos based on selections
  const filteredVideos = useMemo(() => {
    return filmarchivDetail.videos.filter((video) => {
      const kategorieMatch = selectedKategorie === 'Alle' || video.kategorie === selectedKategorie
      const themaMatch = selectedThema === 'Alle' || video.thema.includes(selectedThema)
      
      let atemtypMatch = true
      if (selectedAtemtyp !== 'Alle') {
        if (selectedAtemtyp === 'Einatmer (lunar)') {
          atemtypMatch = video.atemtyp === 'Einatmer (lunar)'
        } else if (selectedAtemtyp === 'Ausatmer (solar)') {
          atemtypMatch = video.atemtyp === 'Ausatmer (solar)'
        } else if (selectedAtemtyp === 'Beide') {
          atemtypMatch = video.atemtyp === 'Beide'
        }
      }

      return kategorieMatch && themaMatch && atemtypMatch
    })
  }, [selectedKategorie, selectedThema, selectedAtemtyp])

  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {filmarchivDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {filmarchivDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {filmarchivDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 1: Featured Video */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <FeaturedVideo {...filmarchivDetail.featuredVideo} />
        </Container>
      </Section>

      {/* Sektion 2: Filter & Alle Videos */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          {/* Filter */}
          <div className="mb-12">
            <VideoFilter
              kategorien={filmarchivDetail.filters.kategorien}
              themen={filmarchivDetail.filters.themen}
              atemtypen={filmarchivDetail.filters.atemtypen}
              selectedKategorie={selectedKategorie}
              selectedThema={selectedThema}
              selectedAtemtyp={selectedAtemtyp}
              onKategorieChange={setSelectedKategorie}
              onThemaChange={setSelectedThema}
              onAtemtypChange={setSelectedAtemtyp}
            />
          </div>

          {/* Alle Videos */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-3xl font-normal text-dark md:text-4xl">
              Alle Videos
            </h2>
            <div className="text-sm text-dark/60">
              {filteredVideos.length} {filteredVideos.length === 1 ? 'Video' : 'Videos'}
            </div>
          </div>
          {filteredVideos.length > 0 ? (
            <Grid cols={3} gap="lg">
              {filteredVideos.map((video, idx) => (
                <VideoCardExtended key={idx} {...video} />
              ))}
            </Grid>
          ) : (
            <div className="text-center py-12">
              <p className="text-dark/60">Keine Videos gefunden. Bitte ändere die Filter.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* Sektion 3: Historische Aufnahmen */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {filmarchivDetail.historischeAufnahmen.title}
          </h2>
          <p className="mb-8 mx-auto max-w-3xl text-center text-lg text-dark/80">
            {filmarchivDetail.historischeAufnahmen.desc}
          </p>
          <div className="mx-auto max-w-2xl">
            <Card variant="highlight" className="p-8">
              <div className="mb-6 aspect-video bg-background-alt rounded-lg flex items-center justify-center">
                <svg className="h-16 w-16 text-primary/50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <h3 className="mb-4 font-display text-2xl font-normal text-dark">
                {filmarchivDetail.historischeAufnahmen.featured.title}
              </h3>
              <p className="mb-6 text-dark/80">
                {filmarchivDetail.historischeAufnahmen.featured.beschreibung}
              </p>
              <Button href={filmarchivDetail.historischeAufnahmen.featured.cta.href} variant="primary">
                {filmarchivDetail.historischeAufnahmen.featured.cta.text}
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Sektion 4: Hinweis zu Lernvideos */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Card variant="highlight" className="p-8 text-center">
              <div className="mb-4 text-4xl">🎬</div>
              <h3 className="mb-4 font-display text-2xl font-normal text-dark">
                {filmarchivDetail.hinweisLernvideos.title}
              </h3>
              <p className="mb-6 text-lg text-dark/80">
                {filmarchivDetail.hinweisLernvideos.desc}
              </p>
              <Button href={filmarchivDetail.hinweisLernvideos.cta.href} variant="primary">
                {filmarchivDetail.hinweisLernvideos.cta.text}
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Sektion 5: Weitere Ressourcen */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {filmarchivDetail.weitereRessourcen.title}
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-center text-lg text-dark/80">
            {filmarchivDetail.weitereRessourcen.desc}
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            {filmarchivDetail.weitereRessourcen.ressourcen.map((ressource, idx) => (
              <Card key={idx} variant="hover" className="p-6 text-center">
                <div className="mb-4 text-4xl">{ressource.icon}</div>
                <h3 className="mb-3 font-display text-xl font-normal text-dark">
                  {ressource.title}
                </h3>
                <p className="mb-6 text-dark/80">{ressource.desc}</p>
                <Button href={ressource.cta.href} variant="secondary" className="w-full">
                  {ressource.cta.text}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 6: Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {filmarchivDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {filmarchivDetail.finalCTA.desc}
            </p>
            <Button href={filmarchivDetail.finalCTA.cta.href} variant="primary">
              {filmarchivDetail.finalCTA.cta.text}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
