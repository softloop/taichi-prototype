import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Card from '@/components/ui/Card'
import ContactForm from '@/components/features/ContactForm'
import { kontaktDetail } from '@/data/content'

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {kontaktDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {kontaktDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Kontaktmöglichkeiten */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {kontaktDetail.kontaktmoeglichkeiten.map((kontakt, idx) => (
              <Card key={idx} variant="hover" className="p-6 text-center">
                <div className="mb-4 text-4xl">{kontakt.icon}</div>
                <div className="mb-2 font-semibold text-dark">{kontakt.label}</div>
                {kontakt.href ? (
                  <a
                    href={kontakt.href}
                    className="text-primary hover:underline break-all"
                  >
                    {kontakt.value}
                  </a>
                ) : (
                  <div className="text-dark/80 text-sm">{kontakt.value}</div>
                )}
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-dark/60">
            {kontaktDetail.reaktionszeit}
          </p>
        </Container>
      </Section>

      {/* Kontaktformular */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
              Kontaktformular
            </h2>
            <Card className="p-8">
              <ContactForm betreffOptions={kontaktDetail.formular.betreffOptions} />
            </Card>
          </div>
        </Container>
      </Section>

      {/* Kursorte */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            Kursorte
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {kontaktDetail.kursorte.map((ort, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="mb-4 font-display text-xl font-normal text-dark">
                  {ort.name}
                </h3>
                <div className="mb-2 font-semibold text-dark">{ort.ort}</div>
                <div className="mb-4 text-sm text-dark/80">{ort.adresse}</div>
                {ort.kontakt && (
                  <div className="mb-4 space-y-1 text-sm text-dark/80">
                    {ort.kontakt.map((k, i) => (
                      <div key={i}>
                        {k.includes('@') ? (
                          <a href={`mailto:${k.split(':')[1]?.trim()}`} className="text-primary hover:underline">
                            {k}
                          </a>
                        ) : (
                          k
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {ort.hinweis && (
                  <p className="text-xs text-dark/60 italic">{ort.hinweis}</p>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Media */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-8 text-center font-display text-3xl font-normal text-dark md:text-4xl">
            Social Media
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {kontaktDetail.socialMedia.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-white px-6 py-3 text-dark hover:border-primary hover:bg-primary/5 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Presse */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Card variant="highlight" className="p-8 text-center max-w-2xl mx-auto">
            <h3 className="mb-4 font-display text-2xl font-normal text-dark">
              Für Presse & Medien
            </h3>
            <p className="mb-4 text-dark/80">{kontaktDetail.presse.text}</p>
            <p className="text-sm text-dark/60">{kontaktDetail.presse.betreff}</p>
          </Card>
        </Container>
      </Section>
    </>
  )
}
