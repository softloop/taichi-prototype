import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ImageTextSection from '@/components/features/ImageTextSection'
import VideoPlaceholder from '@/components/features/VideoPlaceholder'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { innereKraftDetail } from '@/data/content'

export default function InnereKraftPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {innereKraftDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {innereKraftDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {innereKraftDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Sektion 1: Was ist innere Kraft? */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={innereKraftDetail.section1.imageLeft}
            subline=""
            title={innereKraftDetail.section1.title}
            desc={innereKraftDetail.section1.desc}
            cta={{ text: '', href: '#' }}
          />
        </Container>
      </Section>

      {/* Sektion 2: Innere Kraft im Alltag */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
            {innereKraftDetail.section2.title}
          </h2>
          <p className="mb-8 text-lg text-dark/80">{innereKraftDetail.section2.intro}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {innereKraftDetail.section2.aspects.map((aspect, idx) => (
              <Card key={idx} variant="hover" className="p-6">
                <h3 className="mb-3 font-display text-xl font-normal text-dark">
                  {aspect.title}
                </h3>
                <p className="text-dark/80">{aspect.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sektion 3: Innere Kraft in der Kampfkunst */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={innereKraftDetail.section3.imageLeft}
            subline=""
            title={innereKraftDetail.section3.title}
            desc={innereKraftDetail.section3.desc}
            cta={{ text: '', href: '#' }}
          />
          <div className="mt-6 rounded-lg bg-primary/10 p-6">
            <p className="text-dark/80">{innereKraftDetail.section3.zusatztext}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 4: Song – Die Kraft der Entspannung */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={innereKraftDetail.section4.imageLeft}
            subline=""
            title={innereKraftDetail.section4.title}
            desc={innereKraftDetail.section4.desc}
            cta={{ text: '', href: '#' }}
          />
        </Container>
      </Section>

      {/* Sektion 5: Tun und Sein */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-display text-3xl font-normal text-dark md:text-4xl">
              {innereKraftDetail.section5.title}
            </h2>
            <p className="mb-6 text-lg text-dark/80">{innereKraftDetail.section5.intro}</p>
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-display text-xl font-normal text-dark">Tun</h3>
                <ul className="space-y-2 text-dark/80">
                  {innereKraftDetail.section5.spalten.tun.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-display text-xl font-normal text-dark">Sein</h3>
                <ul className="space-y-2 text-dark/80">
                  {innereKraftDetail.section5.spalten.sein.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mb-4 text-lg text-dark/80">
              {innereKraftDetail.section5.fortsetzung.split('**').map((part, idx) =>
                idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
              )}
            </p>
            <div className="rounded-lg border-2 border-primary/30 bg-background-alt p-6">
              <p className="text-lg font-semibold text-primary">
                {innereKraftDetail.section5.hervorgehoben}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 6: Körperhaben und Körpersein */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <ImageTextSection
            imageLeft={innereKraftDetail.section6.imageLeft}
            subline=""
            title={innereKraftDetail.section6.title}
            desc={innereKraftDetail.section6.desc}
            cta={{ text: '', href: '#' }}
          />
        </Container>
      </Section>

      {/* Zitat 1 */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="mb-4 text-2xl italic leading-relaxed text-white md:text-3xl">
              {innereKraftDetail.zitat1.text}
            </blockquote>
            <p className="text-lg text-white/70">— {innereKraftDetail.zitat1.author}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 7: Warum entwickeln so wenige innere Kraft? */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-display text-3xl font-normal text-dark md:text-4xl">
              {innereKraftDetail.section7.title}
            </h2>
            <p className="mb-8 text-lg text-dark/80">{innereKraftDetail.section7.intro}</p>
            <div className="mb-8 space-y-6">
              {innereKraftDetail.section7.probleme.map((problem, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-white p-6">
                  <h3 className="mb-2 font-display text-xl font-normal text-dark">
                    {problem.title}
                  </h3>
                  <p className="text-dark/80">{problem.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border-2 border-primary/30 bg-background-alt p-6">
              <p className="text-lg font-semibold text-primary">
                {innereKraftDetail.section7.hervorgehoben}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sektion 8: Video */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <VideoPlaceholder
              title={innereKraftDetail.section8.title}
              caption={innereKraftDetail.section8.caption}
            />
          </div>
        </Container>
      </Section>

      {/* Zitat 2 */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="mb-4 text-2xl italic leading-relaxed text-dark/90 md:text-3xl">
              {innereKraftDetail.zitat2.text}
            </blockquote>
            <p className="text-lg text-dark/60">— {innereKraftDetail.zitat2.author}</p>
          </div>
        </Container>
      </Section>

      {/* Sektion 9: Der Weg zur inneren Kraft */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-display text-3xl font-normal text-dark md:text-4xl">
              {innereKraftDetail.section9.title}
            </h2>
            <p className="mb-8 text-lg text-dark/80">{innereKraftDetail.section9.intro}</p>
            <div className="space-y-6">
              {innereKraftDetail.section9.schritte.map((schritt, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-semibold text-white">
                    {schritt.nummer}
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-normal text-dark">
                      {schritt.title}
                    </h3>
                    <p className="text-dark/80">{schritt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Zitat 3 */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <blockquote className="mb-4 text-2xl italic leading-relaxed text-dark/90 md:text-3xl">
              {innereKraftDetail.zitat3.text}
            </blockquote>
            <p className="text-lg text-dark/60">— {innereKraftDetail.zitat3.author}</p>
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {innereKraftDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">{innereKraftDetail.finalCTA.desc}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {innereKraftDetail.finalCTA.ctas.map((cta, idx) => (
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
