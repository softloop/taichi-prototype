import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Card from '@/components/ui/Card'
import { agbDetail } from '@/data/content'

export default function AGBPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {agbDetail.title}
            </h1>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* § 1 */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {agbDetail.section1.title}
              </h2>
              <p className="text-dark/80">{agbDetail.section1.text}</p>
            </Card>

            {/* § 2 */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {agbDetail.section2.title}
              </h2>
              <p className="mb-4 text-dark/80">{agbDetail.section2.text}</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-dark/80">
                {agbDetail.section2.leistungen.map((leistung, idx) => (
                  <li key={idx}>{leistung}</li>
                ))}
              </ul>
              <p className="text-dark/80">{agbDetail.section2.hinweis}</p>
            </Card>

            {/* § 3 */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {agbDetail.section3.title}
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-dark/80">
                {agbDetail.section3.punkte.map((punkt, idx) => (
                  <li key={idx}>{punkt}</li>
                ))}
              </ol>
            </Card>

            {/* § 4 */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {agbDetail.section4.title}
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-dark/80">
                {agbDetail.section4.punkte.map((punkt, idx) => (
                  <li key={idx}>{punkt}</li>
                ))}
              </ol>
            </Card>

            {/* § 5 */}
            <Card className="p-8">
              <h2 className="mb-6 font-display text-2xl font-normal text-dark">
                {agbDetail.section5.title}
              </h2>
              <div className="space-y-6 text-dark/80">
                <div className="rounded-lg bg-primary/10 p-6">
                  <h3 className="mb-3 font-display text-xl font-normal text-dark">
                    {agbDetail.section5.belehrung.title}
                  </h3>
                  <p>{agbDetail.section5.belehrung.text}</p>
                </div>
                <div>
                  <h3 className="mb-3 font-display text-xl font-normal text-dark">
                    {agbDetail.section5.folgen.title}
                  </h3>
                  <p>{agbDetail.section5.folgen.text}</p>
                </div>
                <div>
                  <h3 className="mb-3 font-display text-xl font-normal text-dark">
                    {agbDetail.section5.ausnahmen.title}
                  </h3>
                  <p>{agbDetail.section5.ausnahmen.text}</p>
                </div>
              </div>
            </Card>

            {/* § 6 */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {agbDetail.section6.title}
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-dark/80">
                {agbDetail.section6.punkte.map((punkt, idx) => (
                  <li key={idx}>{punkt}</li>
                ))}
              </ol>
            </Card>

            {/* § 7 */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {agbDetail.section7.title}
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-dark/80">
                <li>{agbDetail.section7.punkte[0]}</li>
                <li>
                  {agbDetail.section7.punkte[1]}
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    {agbDetail.section7.stornierung.map((storno, idx) => (
                      <li key={idx}>{storno}</li>
                    ))}
                  </ul>
                </li>
                {agbDetail.section7.weiterePunkte.map((punkt, idx) => (
                  <li key={idx}>{punkt}</li>
                ))}
              </ol>
            </Card>

            {/* § 8 */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {agbDetail.section8.title}
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-dark/80">
                {agbDetail.section8.punkte.map((punkt, idx) => (
                  <li key={idx}>{punkt}</li>
                ))}
              </ol>
            </Card>

            {/* § 9 */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {agbDetail.section9.title}
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-dark/80">
                {agbDetail.section9.punkte.map((punkt, idx) => (
                  <li key={idx}>{punkt}</li>
                ))}
              </ol>
            </Card>

            {/* § 10 */}
            <Card className="p-8">
              <h2 className="mb-4 font-display text-2xl font-normal text-dark">
                {agbDetail.section10.title}
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-dark/80">
                {agbDetail.section10.punkte.map((punkt, idx) => (
                  <li key={idx}>{punkt}</li>
                ))}
              </ol>
            </Card>

            {/* Stand */}
            <div className="text-center text-sm text-dark/60">
              {agbDetail.stand}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}





