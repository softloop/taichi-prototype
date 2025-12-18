import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Grid from '@/components/layout/Grid'
import BuchCard from '@/components/features/BuchCard'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { buecherDetail } from '@/data/content'

export default function BuecherPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {buecherDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {buecherDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {buecherDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 1: Einleitung */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-dark/80">
              {buecherDetail.section1.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 2: Bücher-Liste */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="space-y-8">
            {buecherDetail.section2.buecher.map((buch, idx) => (
              <BuchCard key={idx} {...buch} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 3: Welches Buch passt zu mir? */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {buecherDetail.section3.title}
          </h2>
          <div className="mx-auto max-w-4xl">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/30">
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-dark">Du bist...</th>
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-primary">Empfehlung</th>
                  </tr>
                </thead>
                <tbody>
                  {buecherDetail.section3.empfehlungen.map((item, idx) => (
                    <tr key={idx} className="border-b border-border">
                      <td className="px-4 py-4 font-semibold text-dark">{item.zielgruppe}</td>
                      <td className="px-4 py-4 text-dark/80">{item.empfehlung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {buecherDetail.section3.empfehlungen.map((item, idx) => (
                <Card key={idx} variant="default">
                  <div className="mb-2 font-semibold text-dark">{item.zielgruppe}</div>
                  <div className="text-dark/80">{item.empfehlung}</div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 4: Die Bücher im Vergleich */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {buecherDetail.section4.title}
          </h2>
          <div className="mx-auto max-w-5xl">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/30">
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-dark">Buch</th>
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-dark">Typ</th>
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-dark">Thema</th>
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-dark">Niveau</th>
                    <th className="px-4 py-3 text-left font-display text-lg font-normal text-dark">Preis</th>
                  </tr>
                </thead>
                <tbody>
                  {buecherDetail.section4.vergleich.map((item, idx) => (
                    <tr key={idx} className="border-b border-border">
                      <td className="px-4 py-4 font-semibold text-dark">{item.buch}</td>
                      <td className="px-4 py-4 text-dark/80">{item.typ}</td>
                      <td className="px-4 py-4 text-dark/80">{item.thema}</td>
                      <td className="px-4 py-4 text-dark/80">{item.niveau}</td>
                      <td className="px-4 py-4 text-dark/80">{item.preis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {buecherDetail.section4.vergleich.map((item, idx) => (
                <Card key={idx} variant="default">
                  <div className="mb-3 font-semibold text-dark">{item.buch}</div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-dark/70">Typ:</span> {item.typ}
                    </div>
                    <div>
                      <span className="font-semibold text-dark/70">Thema:</span> {item.thema}
                    </div>
                    <div>
                      <span className="font-semibold text-dark/70">Niveau:</span> {item.niveau}
                    </div>
                    <div>
                      <span className="font-semibold text-dark/70">Preis:</span> {item.preis}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 5: Zitat */}
      <Section bg="primary-light">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="mb-4 font-display text-2xl italic leading-relaxed text-dark md:text-3xl">
              {buecherDetail.section5.quote.text}
            </blockquote>
            <p className="text-lg text-dark/70">— {buecherDetail.section5.quote.author}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 6: Hinweis zu Bezugsquellen */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {buecherDetail.section6.title}
          </h2>
          <p className="mb-12 mx-auto max-w-2xl text-center text-lg text-dark/80">
            {buecherDetail.section6.desc}
          </p>
          <Grid cols={3} gap="lg">
            {buecherDetail.section6.bezugsquellen.map((quelle, idx) => (
              <Card key={idx} variant="hover" className="text-center">
                <div className="mb-4 text-4xl">{quelle.icon}</div>
                <h3 className="mb-2 font-display text-lg font-normal text-dark">{quelle.name}</h3>
                <p className="text-sm text-dark/80">{quelle.info}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Sektion 7: Weitere Ressourcen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-4 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {buecherDetail.section7.title}
          </h2>
          <p className="mb-12 mx-auto max-w-2xl text-center text-lg text-dark/80">
            {buecherDetail.section7.desc}
          </p>
          <Grid cols={2} gap="lg">
            {buecherDetail.section7.ressourcen.map((ressource, idx) => (
              <Card key={idx} variant="hover" className="text-center flex flex-col">
                <div className="mb-4 text-5xl">{ressource.icon}</div>
                <h3 className="mb-3 font-display text-xl font-normal text-dark">{ressource.title}</h3>
                <p className="mb-6 flex-1 text-dark/80">{ressource.desc}</p>
                <Button href={ressource.cta.href} variant="secondary" className="w-full">
                  {ressource.cta.text}
                </Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {buecherDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {buecherDetail.finalCTA.desc}
            </p>
            <Button href={buecherDetail.finalCTA.cta.href} variant="primary">
              {buecherDetail.finalCTA.cta.text}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
