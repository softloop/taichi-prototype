import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import Grid from '@/components/layout/Grid'
import { homepage } from '@/data/content'
import { kurzform } from '@/data/courses'
import { testimonials } from '@/data/testimonials'
import CourseCard from '@/components/features/CourseCard'
import TestimonialCard from '@/components/features/TestimonialCard'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {homepage.hero.subtitle}
            </p>
            <h1 className="font-display text-5xl font-normal md:text-6xl lg:text-7xl">
              <span className="block">{homepage.hero.title}</span>
              <span className="block text-primary">{homepage.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-dark/80">
              {homepage.hero.desc}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/kurse" variant="primary">
                Kurse entdecken
              </Button>
              <Button href="/methode/test" variant="secondary">
                Atemtyp-Test
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            {homepage.benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 text-5xl">{benefit.icon}</div>
                <h3 className="mb-2 font-display text-2xl font-normal text-dark">
                  {benefit.title}
                </h3>
                <p className="text-dark/80">{benefit.desc}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Kurzform Section */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                subtitle="Kostenloser Einstieg"
                title={kurzform.title}
              />
              <p className="mt-4 text-lg text-dark/80">{kurzform.desc}</p>
              <ul className="mt-6 space-y-3">
                {kurzform.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-dark/80">
                    <span className="mr-3 text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/kurse/online" variant="primary">
                  Jetzt starten
                </Button>
              </div>
            </div>
            <div>
              <CourseCard
                title={kurzform.title}
                price={kurzform.price}
                desc={kurzform.desc}
                features={kurzform.features}
                href="/kurse/online"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Quote Section */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl font-normal italic text-white md:text-3xl">
              {homepage.quote.text}
            </p>
            <p className="mt-6 text-white/70">— {homepage.quote.author}</p>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle="Was unsere Schüler sagen"
            title="Erfahrungen"
            className="mb-12 text-center"
          />
          <Grid cols={3} gap="lg">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}



