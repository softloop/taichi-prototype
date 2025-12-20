import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Card from '@/components/ui/Card'
import { impressumDetail } from '@/data/content'

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {impressumDetail.title}
            </h1>
            <p className="mx-auto max-w-3xl text-sm text-dark/80">
              {impressumDetail.subtitle}
            </p>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Anbieter */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                Anbieter
              </h2>
              <div className="space-y-3 text-dark/80">
                <div>
                  <span className="font-semibold text-dark">Firmenname:</span>{' '}
                  {impressumDetail.anbieter.firmenname}
                </div>
                <div>
                  <span className="font-semibold text-dark">Rechtsform:</span>{' '}
                  {impressumDetail.anbieter.rechtsform}
                </div>
                <div>
                  <span className="font-semibold text-dark">Anschrift:</span>{' '}
                  {impressumDetail.anbieter.anschrift}
                </div>
                <div>
                  <span className="font-semibold text-dark">E-Mail:</span>{' '}
                  <a
                    href={`mailto:${impressumDetail.anbieter.email}`}
                    className="text-primary hover:underline"
                  >
                    {impressumDetail.anbieter.email}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-dark">Telefon:</span>{' '}
                  <a
                    href={`tel:${impressumDetail.anbieter.telefon.replace(/\s/g, '')}`}
                    className="text-primary hover:underline"
                  >
                    {impressumDetail.anbieter.telefon}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-dark">Website:</span>{' '}
                  {impressumDetail.anbieter.website}
                </div>
              </div>
            </Card>

            {/* Registereintrag */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                Registereintrag
              </h2>
              <div className="space-y-3 text-dark/80">
                <div>
                  <span className="font-semibold text-dark">Registergericht:</span>{' '}
                  {impressumDetail.register.registergericht}
                </div>
                <div>
                  <span className="font-semibold text-dark">Registernummer:</span>{' '}
                  {impressumDetail.register.registernummer}
                </div>
                <div>
                  <span className="font-semibold text-dark">USt-IdNr.:</span>{' '}
                  {impressumDetail.register.ustId}
                </div>
              </div>
            </Card>

            {/* Vertretungsberechtigter */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                Vertretungsberechtigter
              </h2>
              <div className="text-dark/80">
                <div>
                  <span className="font-semibold text-dark">Geschäftsführer:</span>{' '}
                  {impressumDetail.vertretung.geschaeftsfuehrer}
                </div>
              </div>
            </Card>

            {/* Inhaltlich Verantwortlicher */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                Inhaltlich Verantwortlicher (gem. § 55 Abs. 2 RStV)
              </h2>
              <div className="space-y-3 text-dark/80">
                <div>
                  <span className="font-semibold text-dark">Name:</span>{' '}
                  {impressumDetail.verantwortlicher.name}
                </div>
                <div>
                  <span className="font-semibold text-dark">Anschrift:</span>{' '}
                  {impressumDetail.verantwortlicher.anschrift}
                </div>
              </div>
            </Card>

            {/* Streitschlichtung */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                Streitschlichtung
              </h2>
              <div className="space-y-4 text-dark/80">
                <div>
                  <div className="mb-2 font-semibold text-dark">EU-Streitschlichtung:</div>
                  <p>{impressumDetail.streitschlichtung.eu}</p>
                </div>
                <div>
                  <div className="mb-2 font-semibold text-dark">Verbraucherstreitbeilegung:</div>
                  <p>{impressumDetail.streitschlichtung.verbraucher}</p>
                </div>
              </div>
            </Card>

            {/* Haftungsausschluss */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                Haftungsausschluss
              </h2>
              <div className="space-y-4 text-dark/80">
                <div>
                  <div className="mb-2 font-semibold text-dark">Haftung für Inhalte:</div>
                  <p>{impressumDetail.haftungsausschluss.inhalte}</p>
                </div>
                <div>
                  <div className="mb-2 font-semibold text-dark">Haftung für Links:</div>
                  <p>{impressumDetail.haftungsausschluss.links}</p>
                </div>
              </div>
            </Card>

            {/* Urheberrecht */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                Urheberrecht
              </h2>
              <p className="text-dark/80">{impressumDetail.urheberrecht}</p>
            </Card>

            {/* Bildnachweise */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                Bildnachweise
              </h2>
              <p className="text-dark/80">{impressumDetail.bildnachweise}</p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}




