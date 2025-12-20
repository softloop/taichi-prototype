import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Card from '@/components/ui/Card'
import { datenschutzDetail } from '@/data/content'

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {datenschutzDetail.title}
            </h1>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* 1. Datenschutz auf einen Blick */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {datenschutzDetail.section1.title}
              </h2>
              <p className="text-dark/80">{datenschutzDetail.section1.desc}</p>
            </Card>

            {/* 2. Verantwortliche Stelle */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                {datenschutzDetail.section2.title}
              </h2>
              <div className="space-y-3 text-dark/80 mb-4">
                <div>
                  <span className="font-semibold text-dark">Verantwortlicher:</span>{' '}
                  {datenschutzDetail.section2.verantwortlicher}
                </div>
                <div>
                  <span className="font-semibold text-dark">Anschrift:</span>{' '}
                  {datenschutzDetail.section2.anschrift}
                </div>
                <div>
                  <span className="font-semibold text-dark">E-Mail:</span>{' '}
                  <a
                    href={`mailto:${datenschutzDetail.section2.email}`}
                    className="text-primary hover:underline"
                  >
                    {datenschutzDetail.section2.email}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-dark">Telefon:</span>{' '}
                  <a
                    href={`tel:${datenschutzDetail.section2.telefon.replace(/\s/g, '')}`}
                    className="text-primary hover:underline"
                  >
                    {datenschutzDetail.section2.telefon}
                  </a>
                </div>
              </div>
              <p className="text-sm text-dark/70 italic">{datenschutzDetail.section2.hinweis}</p>
            </Card>

            {/* 3. Datenerfassung */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                {datenschutzDetail.section3.title}
              </h2>
              <div className="space-y-6 text-dark/80">
                {/* Cookies */}
                <div>
                  <h3 className="mb-3 font-display text-xl font-normal text-dark">Cookies</h3>
                  <p className="mb-3">{datenschutzDetail.section3.cookies.beschreibung}</p>
                  <p className="mb-2 font-semibold text-dark">Wir verwenden:</p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    {datenschutzDetail.section3.cookies.arten.map((art, idx) => (
                      <li key={idx}>{art}</li>
                    ))}
                  </ul>
                  <p className="text-sm">{datenschutzDetail.section3.cookies.hinweis}</p>
                </div>

                {/* Server-Log-Dateien */}
                <div>
                  <h3 className="mb-3 font-display text-xl font-normal text-dark">
                    Server-Log-Dateien
                  </h3>
                  <p className="mb-3">{datenschutzDetail.section3.serverLogs.beschreibung}</p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    {datenschutzDetail.section3.serverLogs.daten.map((daten, idx) => (
                      <li key={idx}>{daten}</li>
                    ))}
                  </ul>
                  <p className="text-sm">{datenschutzDetail.section3.serverLogs.hinweis}</p>
                </div>

                {/* Kontaktformular */}
                <div>
                  <h3 className="mb-3 font-display text-xl font-normal text-dark">
                    Kontaktformular / E-Mail
                  </h3>
                  <p>{datenschutzDetail.section3.kontakt}</p>
                </div>

                {/* Newsletter */}
                <div>
                  <h3 className="mb-3 font-display text-xl font-normal text-dark">Newsletter</h3>
                  <p>{datenschutzDetail.section3.newsletter}</p>
                </div>
              </div>
            </Card>

            {/* 4. Online-Kurse und Zahlungsabwicklung */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                {datenschutzDetail.section4.title}
              </h2>
              <div className="space-y-4 text-dark/80">
                <div>
                  <h3 className="mb-3 font-display text-xl font-normal text-dark">
                    Kursplattform
                  </h3>
                  <p className="mb-2">{datenschutzDetail.section4.kurse.beschreibung}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {datenschutzDetail.section4.kurse.daten.map((daten, idx) => (
                      <li key={idx}>{daten}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-display text-xl font-normal text-dark">
                    Zahlungsabwicklung
                  </h3>
                  <p>{datenschutzDetail.section4.zahlung}</p>
                </div>
              </div>
            </Card>

            {/* 5. Deine Rechte */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                {datenschutzDetail.section5.title}
              </h2>
              <p className="mb-4 text-dark/80">
                Du hast jederzeit das Recht auf:
              </p>
              <div className="mb-6 space-y-3">
                {datenschutzDetail.section5.rechte.map((recht, idx) => (
                  <div key={idx} className="border-b border-border/50 pb-3 last:border-0">
                    <div className="font-semibold text-dark mb-1">{recht.name}:</div>
                    <div className="text-dark/80">{recht.beschreibung}</div>
                  </div>
                ))}
              </div>
              <p className="mb-4 text-dark/80">
                {datenschutzDetail.section5.kontakt}
              </p>
              <div className="rounded-lg bg-primary/10 p-4">
                <div className="mb-2 font-semibold text-dark">Beschwerderecht:</div>
                <p className="mb-2 text-dark/80">{datenschutzDetail.section5.beschwerde.text}</p>
                <div className="text-sm text-dark/80">
                  <div>{datenschutzDetail.section5.beschwerde.behoerde}</div>
                  <div>{datenschutzDetail.section5.beschwerde.anschrift}</div>
                  <div>
                    <a
                      href={datenschutzDetail.section5.beschwerde.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {datenschutzDetail.section5.beschwerde.website}
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* 6. Drittanbieter */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                {datenschutzDetail.section6.title}
              </h2>
              <div className="space-y-4 text-dark/80">
                <div>
                  <div className="mb-2 font-semibold text-dark">Hosting:</div>
                  <p>{datenschutzDetail.section6.hosting}</p>
                </div>
                <div>
                  <div className="mb-2 font-semibold text-dark">YouTube / Vimeo (Videos):</div>
                  <p>{datenschutzDetail.section6.videos}</p>
                </div>
                <div>
                  <div className="mb-2 font-semibold text-dark">Google Fonts:</div>
                  <p>{datenschutzDetail.section6.fonts}</p>
                </div>
                <div>
                  <div className="mb-2 font-semibold text-dark">Analyse-Tools:</div>
                  <p>{datenschutzDetail.section6.analyse}</p>
                </div>
              </div>
            </Card>

            {/* 7. Aktualität */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                {datenschutzDetail.section7.title}
              </h2>
              <div className="space-y-2 text-dark/80">
                <p>{datenschutzDetail.section7.stand}</p>
                <p>{datenschutzDetail.section7.hinweis}</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}




