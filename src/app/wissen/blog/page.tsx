'use client'

import { useState, useMemo } from 'react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Grid from '@/components/layout/Grid'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import BlogCard from '@/components/features/BlogCard'
import BlogFilter from '@/components/features/BlogFilter'
import { blogDetail } from '@/data/content'
import { blogPosts, blogArchive, blogThemenCounts, BlogPost } from '@/data/blog'

export default function BlogPage() {
  const [selectedJahr, setSelectedJahr] = useState('Alle')
  const [selectedThema, setSelectedThema] = useState('Alle')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const artikelProSeite = blogDetail.section3.artikelProSeite

  // Filter-Funktion
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Jahr-Filter
      if (selectedJahr !== 'Alle' && post.jahr.toString() !== selectedJahr) {
        return false
      }

      // Thema-Filter
      if (selectedThema !== 'Alle') {
        if (!post.themen || !post.themen.includes(selectedThema)) {
          return false
        }
      }

      // Such-Filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = post.title.toLowerCase().includes(query)
        const matchesDesc = post.beschreibung?.toLowerCase().includes(query) || false
        if (!matchesTitle && !matchesDesc) {
          return false
        }
      }

      return true
    })
  }, [selectedJahr, selectedThema, searchQuery])

  // Featured Articles (3 neueste)
  const featuredPosts = filteredPosts.slice(0, 3)

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / artikelProSeite)
  const startIndex = (currentPage - 1) * artikelProSeite
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + artikelProSeite)

  // Reset page when filters change
  const handleJahrChange = (jahr: string) => {
    setSelectedJahr(jahr)
    setCurrentPage(1)
  }

  const handleThemaChange = (thema: string) => {
    setSelectedThema(thema)
    setCurrentPage(1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {blogDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {blogDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {blogDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>


      {/* Sektion 2: Neueste Artikel (Featured) */}
      {featuredPosts.length > 0 && (
        <Section bg="white">
          <Container className="py-16 md:py-24">
            <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {blogDetail.section2.title}
            </h2>
            <Grid cols={3} gap="lg">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} {...post} variant="featured" />
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      {/* Sektion 3: Alle Artikel (Archiv) mit Sidebar */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_350px]">
            {/* Hauptinhalt: Artikel-Liste */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-display text-3xl font-normal text-dark md:text-4xl">
                  {blogDetail.section3.title}
                </h2>
                {filteredPosts.length > 0 && (
                  <p className="text-sm text-dark/60">
                    {filteredPosts.length} Artikel{filteredPosts.length !== 1 ? '' : ''}
                  </p>
                )}
              </div>

              {paginatedPosts.length > 0 ? (
                <>
                  <div className="mb-8 space-y-6">
                    {paginatedPosts.map((post) => (
                      <BlogCard key={post.slug} {...post} variant="compact" />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-sm font-semibold text-dark disabled:text-dark/30 disabled:cursor-not-allowed hover:text-primary transition-colors"
                      >
                        ← Zurück
                      </button>
                      {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
                        let pageNum
                        if (totalPages <= 10) {
                          pageNum = i + 1
                        } else if (currentPage <= 5) {
                          pageNum = i + 1
                        } else if (currentPage >= totalPages - 4) {
                          pageNum = totalPages - 9 + i
                        } else {
                          pageNum = currentPage - 5 + i
                        }
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-4 py-2 text-sm font-semibold transition-colors rounded-full ${
                              currentPage === pageNum
                                ? 'bg-primary text-white'
                                : 'bg-background-alt text-dark hover:bg-primary/10'
                            }`}
                          >
                            {pageNum}
                          </button>
                        )
                      })}
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 text-sm font-semibold text-dark disabled:text-dark/30 disabled:cursor-not-allowed hover:text-primary transition-colors"
                      >
                        Weiter →
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-lg text-dark/60">Keine Artikel gefunden.</p>
                </div>
              )}

              <p className="mt-8 text-center text-sm text-dark/60">
                {blogDetail.section3.info}
              </p>
            </div>

            {/* Sidebar: Filter & Tag-Cloud */}
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="space-y-8">
                {/* Filter */}
                <div className="rounded-lg border border-border bg-white p-6">
                  <BlogFilter
                    jahre={blogDetail.section1.jahre}
                    themen={blogDetail.section1.themen}
                    suchePlaceholder={blogDetail.section1.suchePlaceholder}
                    selectedJahr={selectedJahr}
                    selectedThema={selectedThema}
                    searchQuery={searchQuery}
                    onJahrChange={handleJahrChange}
                    onThemaChange={handleThemaChange}
                    onSearchChange={handleSearchChange}
                  />
                </div>

                {/* Beliebte Themen (Tag-Cloud) */}
                <div className="rounded-lg border border-border bg-white p-6">
                  <h3 className="mb-4 font-display text-xl font-normal text-dark">
                    {blogDetail.section5.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(blogThemenCounts)
                      .sort((a, b) => b[1] - a[1])
                      .map(([thema, count]) => {
                        return (
                          <button
                            key={thema}
                            onClick={() => {
                              setSelectedThema(thema)
                              setCurrentPage(1)
                            }}
                            className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors ${
                              selectedThema === thema
                                ? 'bg-primary text-white'
                                : 'bg-background-alt text-dark hover:bg-primary/10'
                            }`}
                          >
                            {thema} ({count})
                          </button>
                        )
                      })}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>


      {/* Sektion 6: Über den Autor */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] rounded-lg bg-background-alt overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl text-dark/30">
                📷
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {blogDetail.section6.title}
              </h2>
              <p className="mb-4 text-lg font-semibold text-dark">{blogDetail.section6.name}</p>
              <p className="mb-8 text-lg text-dark/80">{blogDetail.section6.desc}</p>
              <Button href={blogDetail.section6.cta.href} variant="secondary">
                {blogDetail.section6.cta.text}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 7: Newsletter */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
              {blogDetail.section7.title}
            </h2>
            <p className="mb-8 text-lg text-dark/80">{blogDetail.section7.desc}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Newsletter-Anmeldung hier implementieren
                alert('Newsletter-Anmeldung wird implementiert')
              }}
              className="mb-4 flex gap-4"
            >
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                required
                className="flex-1 rounded-lg border border-border bg-white px-4 py-3 text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" variant="primary">
                Anmelden
              </Button>
            </form>
            <p className="text-sm text-dark/60">{blogDetail.section7.hinweis}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 8: Weitere Ressourcen */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-4 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {blogDetail.section8.title}
          </h2>
          <p className="mb-12 mx-auto max-w-2xl text-center text-lg text-dark/80">
            {blogDetail.section8.desc}
          </p>
          <Grid cols={2} gap="lg" className="mx-auto max-w-4xl">
            {blogDetail.section8.ressourcen.map((ressource, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-white p-8 text-center shadow-sm"
              >
                <div className="mb-4 text-5xl">{ressource.icon}</div>
                <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                  {ressource.title}
                </h3>
                <p className="mb-6 text-dark/80">{ressource.desc}</p>
                <Button href={ressource.cta.href} variant="secondary">
                  {ressource.cta.text}
                </Button>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Sektion 9: Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {blogDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">{blogDetail.finalCTA.desc}</p>
            <Button href={blogDetail.finalCTA.cta.href} variant="primary">
              {blogDetail.finalCTA.cta.text}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
