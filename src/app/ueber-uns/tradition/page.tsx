import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ImageTextSection from '@/components/features/ImageTextSection'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { traditionDetail } from '@/data/content'

export default function TraditionPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {traditionDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {traditionDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {traditionDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 1: Tradition */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              {traditionDetail.section1.subline && (
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {traditionDetail.section1.subline}
                </p>
              )}
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {traditionDetail.section1.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {traditionDetail.section1.desc}
              </p>
              <div className="rounded-lg border border-primary/20 bg-background-alt p-6">
                <p className="text-dark/80 italic">{traditionDetail.section1.zusatztext}</p>
              </div>
            </div>
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Historisches Foto</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 2: Moderne */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Modernes Setting</span>
              </div>
            </div>
            <div>
              {traditionDetail.section2.subline && (
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {traditionDetail.section2.subline}
                </p>
              )}
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {traditionDetail.section2.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {traditionDetail.section2.desc}
              </p>
              <div className="rounded-lg border border-primary/20 bg-background-alt p-6">
                <p className="text-dark/80 italic">{traditionDetail.section2.zusatztext}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 3: Keine Jünger */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="mb-4 text-2xl italic leading-relaxed text-dark/90 md:text-3xl">
              {traditionDetail.section3.quote.text}
            </blockquote>
            <p className="text-lg text-dark/60">— {traditionDetail.section3.quote.author}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 4: Offenheit statt Geheimnisse */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {traditionDetail.section4.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {traditionDetail.section4.desc}
              </p>
              <div className="mb-6 rounded-lg border border-primary/20 bg-background-alt p-6">
                <p className="text-dark/80">{traditionDetail.section4.zusatztext}</p>
              </div>
              <div className="rounded-lg border-2 border-primary/30 bg-background-alt p-6">
                <p className="font-semibold text-dark">{traditionDetail.section4.hervorgehoben}</p>
              </div>
            </div>
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Meister Anders mit Schülern</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 5: Der philosophische Daoismus */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Kalligraphie oder Dao-Symbol</span>
              </div>
            </div>
            <div>
              {traditionDetail.section5.subline && (
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {traditionDetail.section5.subline}
                </p>
              )}
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {traditionDetail.section5.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {traditionDetail.section5.desc}
              </p>
              <div className="rounded-lg border border-primary/20 bg-background-alt p-6">
                <p className="text-dark/80 italic">{traditionDetail.section5.zusatztext}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 6: Die Reise um die Welt */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="mb-4 text-2xl italic leading-relaxed text-dark/90 md:text-3xl">
              {traditionDetail.section6.quote.text}
            </blockquote>
            <p className="text-lg text-dark/60">— {traditionDetail.section6.quote.author}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 7: Was uns unterscheidet */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {traditionDetail.section7.title}
          </h2>
          <div className="mx-auto max-w-5xl">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/30">
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-dark"></th>
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-dark">Traditionelle Schulen</th>
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-primary">Tai Chi Academy</th>
                  </tr>
                </thead>
                <tbody>
                  {traditionDetail.section7.vergleich.map((item, idx) => (
                    <tr key={idx} className="border-b border-border">
                      <td className="px-4 py-4 font-semibold text-dark">{item.aspekt}</td>
                      <td className="px-4 py-4 text-dark/80">{item.traditionell}</td>
                      <td className="px-4 py-4 text-dark/80">{item.academy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {traditionDetail.section7.vergleich.map((item, idx) => (
                <Card key={idx} variant="default">
                  <div className="mb-3 font-semibold text-dark">{item.aspekt}</div>
                  <div className="space-y-3">
                    <div>
                      <div className="mb-1 text-sm font-semibold text-dark/70">Traditionelle Schulen:</div>
                      <div className="text-dark/80">{item.traditionell}</div>
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-semibold text-primary">Tai Chi Academy:</div>
                      <div className="text-dark/80">{item.academy}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 8: Für wen ist die Tai Chi Academy? */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {traditionDetail.section8.title}
            </h2>
            <p className="mb-8 text-center text-lg text-dark/80">
              {traditionDetail.section8.desc}
            </p>
            <div className="space-y-4">
              {traditionDetail.section8.punkte.map((punkt, idx) => (
                <div key={idx} className="flex items-start gap-4 rounded-lg border border-primary/20 bg-white p-4">
                  <span className="mt-1 text-xl text-primary">✓</span>
                  <p className="flex-1 text-dark/80">{punkt}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 9: Nicht für jeden */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {traditionDetail.section9.title}
            </h2>
            <div className="space-y-4">
              {traditionDetail.section9.punkte.map((punkt, idx) => (
                <div key={idx} className="flex items-start gap-4 rounded-lg border border-red-200 bg-red-50/50 p-4">
                  <span className="mt-1 text-xl text-red-500">✗</span>
                  <p className="flex-1 text-dark/80">{punkt}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 10: Bashō-Zitat */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="mb-6 text-2xl italic leading-relaxed text-dark/90 md:text-3xl">
              {traditionDetail.section10.quote.text}
            </blockquote>
            <p className="mb-8 text-lg text-dark/60">— {traditionDetail.section10.quote.author}</p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-dark/80">
              {traditionDetail.section10.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 11: Die Lehrer-Ausbildung */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {traditionDetail.section11.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {traditionDetail.section11.desc}
              </p>
              {traditionDetail.section11.cta && (
                <Button href={traditionDetail.section11.cta.href} variant="primary">
                  {traditionDetail.section11.cta.text}
                </Button>
              )}
            </div>
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Lehrer bei Fortbildung</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {traditionDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {traditionDetail.finalCTA.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {traditionDetail.finalCTA.ctas.map((cta, idx) => (
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






