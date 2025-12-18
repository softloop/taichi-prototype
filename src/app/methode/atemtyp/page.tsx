import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ImageTextSection from '@/components/features/ImageTextSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import FAQ from '@/components/features/FAQ'
import { atemtypDetail } from '@/data/content'

export default function AtemtypPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {atemtypDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {atemtypDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {atemtypDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 1: Was ist Atemtyp Tai Chi? */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={atemtypDetail.section1.imageLeft}
            subline=""
            title={atemtypDetail.section1.title}
            desc={atemtypDetail.section1.desc}
            cta={{ text: '', href: '#' }}
          />
          <div className="mt-6 rounded-lg bg-primary/10 p-6">
            <p className="text-dark/80">{atemtypDetail.section1.zusatztext}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 2: Sonne und Mond */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={atemtypDetail.section2.imageLeft}
            subline=""
            title={atemtypDetail.section2.title}
            desc={atemtypDetail.section2.desc.split('**').map((part, idx) =>
              idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
            )}
            cta={{ text: '', href: '#' }}
          />
          <div className="mt-6 rounded-lg border-2 border-primary/30 bg-background-alt p-6">
            <p className="text-lg font-semibold text-primary">
              {atemtypDetail.section2.hervorgehoben}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 3: Die zwei Atemtypen */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            {atemtypDetail.section3.title}
          </h2>
          <p className="mb-8 text-center text-lg text-dark/80">{atemtypDetail.section3.intro}</p>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Einatmer */}
            <Card variant="highlight" className="p-6">
              <div className="mb-4 text-center text-5xl">
                {atemtypDetail.section3.einatmer.symbol}
              </div>
              <h3 className="mb-6 text-center font-display text-2xl font-normal text-dark">
                {atemtypDetail.section3.einatmer.name}
              </h3>
              <div className="mb-6 space-y-3">
                {atemtypDetail.section3.einatmer.aspekte.map((aspekt, idx) => (
                  <div key={idx} className="border-b border-border/50 pb-3 last:border-0">
                    <div className="mb-1 text-sm font-semibold text-dark">{aspekt.label}:</div>
                    <div className="text-dark/80">{aspekt.wert}</div>
                  </div>
                ))}
              </div>
              <p className="text-dark/80">{atemtypDetail.section3.einatmer.beschreibung}</p>
            </Card>

            {/* Ausatmer */}
            <Card variant="hover" className="p-6">
              <div className="mb-4 text-center text-5xl">
                {atemtypDetail.section3.ausatmer.symbol}
              </div>
              <h3 className="mb-6 text-center font-display text-2xl font-normal text-dark">
                {atemtypDetail.section3.ausatmer.name}
              </h3>
              <div className="mb-6 space-y-3">
                {atemtypDetail.section3.ausatmer.aspekte.map((aspekt, idx) => (
                  <div key={idx} className="border-b border-border/50 pb-3 last:border-0">
                    <div className="mb-1 text-sm font-semibold text-dark">{aspekt.label}:</div>
                    <div className="text-dark/80">{aspekt.wert}</div>
                  </div>
                ))}
              </div>
              <p className="text-dark/80">{atemtypDetail.section3.ausatmer.beschreibung}</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Sektion 4: Atemtyp und Körperhaltung */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {atemtypDetail.section4.title}
            </h2>
            <p className="mb-6 text-center text-lg leading-relaxed text-dark/80">
              {atemtypDetail.section4.desc}
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {atemtypDetail.section4.haltungen.map((haltung, idx) => (
              <div key={idx} className="rounded-lg border border-border bg-white p-6">
                <div className="mb-4 aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
                  <span className="text-dark/40 text-sm">Bildplatzhalter</span>
                </div>
                <h4 className="mb-2 font-display text-xl font-normal text-dark">
                  {haltung.typ}
                </h4>
                <p className="text-dark/80">{haltung.haltung}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-primary/10 p-6">
            <p className="text-dark/80">{atemtypDetail.section4.zusatztext}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 5: Warum ist der Atemtyp so wichtig? */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={atemtypDetail.section5.imageLeft}
            subline=""
            title={atemtypDetail.section5.title}
            desc={atemtypDetail.section5.desc}
            cta={{ text: '', href: '#' }}
          />
          <div className="mt-6 rounded-lg border-2 border-primary/30 bg-background-alt p-6">
            <p className="text-lg font-semibold text-primary">
              {atemtypDetail.section5.hervorgehoben}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 6: Die historische Verwirrung */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              {atemtypDetail.section6.title}
            </h2>
            <p className="mb-6 text-center text-lg text-dark/80">{atemtypDetail.section6.desc}</p>
            <div className="mb-6 rounded-lg border-2 border-primary/30 bg-background-alt p-6">
              <p className="text-center text-lg font-semibold text-primary">
                {atemtypDetail.section6.hervorgehoben}
              </p>
            </div>
            <p className="text-center text-lg text-dark/80">{atemtypDetail.section6.zusatztext}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 7: Terlusollogie */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={atemtypDetail.section7.imageLeft}
            subline=""
            title={atemtypDetail.section7.title}
            desc={atemtypDetail.section7.desc.split('**').map((part, idx) =>
              idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
            )}
            cta={{ text: '', href: '#' }}
          />
          <div className="mt-6 space-y-4">
            <p className="text-dark/80">{atemtypDetail.section7.zusatztext}</p>
            <p className="text-sm italic text-dark/60">{atemtypDetail.section7.literatur}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 8: Was bedeutet das für Deine Praxis? */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-display text-3xl font-normal text-dark md:text-4xl">
              {atemtypDetail.section8.title}
            </h2>
            <p className="mb-8 text-lg text-dark/80">{atemtypDetail.section8.intro}</p>
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              {atemtypDetail.section8.punkte.map((punkt, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-white p-6">
                  <h4 className="mb-2 font-display text-xl font-normal text-dark">
                    {punkt.bereich}
                  </h4>
                  <p className="text-dark/80">{punkt.veraenderung}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border-2 border-primary/30 bg-background-alt p-6">
              <p className="text-lg font-semibold text-primary">
                {atemtypDetail.section8.hervorgehoben}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Zitat */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="mb-4 text-2xl italic leading-relaxed text-white md:text-3xl">
              {atemtypDetail.zitat.text}
            </blockquote>
            <p className="text-lg text-white/70">— {atemtypDetail.zitat.author}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 9: Die Lernvideos */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={atemtypDetail.section9.imageLeft}
            subline=""
            title={atemtypDetail.section9.title}
            desc={atemtypDetail.section9.desc}
            cta={{ text: '', href: '#' }}
          />
          <div className="mt-6 rounded-lg bg-primary/10 p-6">
            <p className="text-dark/80">
              <strong>Hinweis:</strong> {atemtypDetail.section9.hinweis}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 10: FAQ */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            Häufige Fragen zum Atemtyp
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={atemtypDetail.faq} />
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {atemtypDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">{atemtypDetail.finalCTA.desc}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {atemtypDetail.finalCTA.ctas.map((cta, idx) => (
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
