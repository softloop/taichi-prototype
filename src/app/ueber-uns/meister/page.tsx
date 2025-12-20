import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import VideoPlaceholder from '@/components/features/VideoPlaceholder'
import BuchCard from '@/components/features/BuchCard'
import HighlightBox from '@/components/features/HighlightBox'
import Button from '@/components/ui/Button'
import Grid from '@/components/layout/Grid'
import Card from '@/components/ui/Card'
import { meisterDetail } from '@/data/content'

export default function MeisterPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {meisterDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {meisterDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {meisterDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 1: Portrait */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Portrait Meister Frieder Anders</span>
              </div>
            </div>
            <div>
              <h2 className="mb-2 font-display text-3xl font-normal text-dark md:text-4xl">
                {meisterDetail.section1.title}
              </h2>
              <p className="mb-4 text-lg font-semibold text-primary">
                {meisterDetail.section1.subtitle}
              </p>
              <p className="text-lg leading-relaxed text-dark/80">
                {meisterDetail.section1.desc}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 2: Der Weg */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-display text-3xl font-normal text-dark md:text-4xl">
              {meisterDetail.section2.title}
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-dark/80">
              {meisterDetail.section2.desc}
            </p>
            <div className="space-y-6">
              {meisterDetail.section2.timeline.map((item, idx) => (
                <div key={idx} className="flex gap-6 border-l-2 border-primary/30 pl-6">
                  <div className="flex-shrink-0">
                    <div className="font-display text-xl font-semibold text-primary md:text-2xl">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-dark/80">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 3: Der Lehrer */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {meisterDetail.section3.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {meisterDetail.section3.desc}
              </p>
              <div className="rounded-lg border border-primary/20 bg-background-alt p-6">
                <p className="text-dark/80 italic">{meisterDetail.section3.zusatztext}</p>
              </div>
            </div>
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Meister Chu King-Hung</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 4: Die Erkenntnis */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                <span className="text-dark/40 text-sm">Bildplatzhalter: Meister Anders mit Schülern</span>
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
                {meisterDetail.section4.title}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-dark/80">
                {meisterDetail.section4.desc}
              </p>
              <div className="rounded-lg border border-primary/20 bg-background-alt p-6">
                <p className="text-dark/80">{meisterDetail.section4.zusatztext}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 5: Die Weitergabe */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-display text-3xl font-normal text-dark md:text-4xl">
              {meisterDetail.section5.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-dark/80">
              {meisterDetail.section5.desc}
            </p>
            <div className="mb-8 rounded-lg border-2 border-primary/30 bg-background-alt p-8 text-center">
              <blockquote className="mb-4 font-display text-2xl italic leading-relaxed text-dark md:text-3xl">
                {meisterDetail.section5.quote.text}
              </blockquote>
              <p className="text-lg text-dark/60">— {meisterDetail.section5.quote.author}</p>
            </div>
            <p className="text-lg leading-relaxed text-dark/80">
              {meisterDetail.section5.zusatztext}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 6: Traditionslinie */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {meisterDetail.section6.title}
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-dark/80">
            {meisterDetail.section6.desc}
          </p>
          <Grid cols={3} gap="lg">
            {meisterDetail.section6.generations.map((gen, idx) => (
              <Card key={idx} variant="hover" className="text-center">
                <div className="mb-4 aspect-square w-full rounded-lg bg-background-alt flex items-center justify-center">
                  <span className="text-4xl text-dark/30">👤</span>
                </div>
                <div className="mb-2 font-display text-xl font-normal text-dark">
                  {gen.name}
                </div>
                <div className="mb-4 text-sm font-semibold text-primary">{gen.years}</div>
                <p className="text-sm text-dark/80">{gen.beschreibung}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Sektion 7: Video */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <VideoPlaceholder
              title={meisterDetail.section7.title}
              caption={meisterDetail.section7.caption}
            />
          </div>
        </Container>
      </Section>

      {/* Sektion 8: Publikationen */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {meisterDetail.section8.title}
          </h2>
          <div className="mx-auto max-w-4xl space-y-8">
            {meisterDetail.section8.buecher.map((buch, idx) => (
              <BuchCard key={idx} {...buch} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 9: Persönlicher Unterricht */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <HighlightBox
              badge={meisterDetail.section9.badge}
              title={meisterDetail.section9.title}
              features={meisterDetail.section9.features}
              cta={meisterDetail.section9.cta}
            />
          </div>
        </Container>
      </Section>

      {/* Zitat */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="mb-4 text-2xl italic leading-relaxed text-dark/90 md:text-3xl">
              {meisterDetail.zitat.text}
            </blockquote>
            <p className="text-lg text-dark/60">— {meisterDetail.zitat.author}</p>
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {meisterDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {meisterDetail.finalCTA.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {meisterDetail.finalCTA.ctas.map((cta, idx) => (
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






