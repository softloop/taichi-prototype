'use client'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import Grid from '@/components/layout/Grid'
import { homepage } from '@/data/content'
import { testimonials } from '@/data/testimonials'
import TestimonialCard from '@/components/features/TestimonialCard'
import TrustBar from '@/components/features/TrustBar'
import ProblemSolutionCard from '@/components/features/ProblemSolutionCard'
import CoursePathStage from '@/components/features/CoursePathStage'
import FAQ from '@/components/features/FAQ'

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Section bg="base" className="relative min-h-[80vh] flex items-center">
        {/* Background Image - Platzhalter für echtes Bild */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full bg-gradient-to-br from-primary/20 to-dark/20" />
        </div>
        <Container className="relative z-10 py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {homepage.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-5xl font-normal md:text-6xl lg:text-7xl text-dark">
              <span className="block">Entdecke Deine</span>
              <span className="block text-primary">Innere Kraft</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-dark/80">
              {homepage.hero.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={homepage.hero.ctaPrimary.href} variant="primary">
                {homepage.hero.ctaPrimary.text}
              </Button>
              <Button href={homepage.hero.ctaSecondary.href} variant="secondary">
                {homepage.hero.ctaSecondary.text}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Trust Bar */}
      <TrustBar items={homepage.trustBar} />

      {/* 3. Problem/Lösung */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-display text-4xl font-normal text-dark">
              {homepage.problemSolution.title}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {homepage.problemSolution.desc}
            </p>
          </div>
          <Grid cols={3} gap="lg">
            {homepage.problemSolution.cards.map((card, idx) => (
              <ProblemSolutionCard key={idx} {...card} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* 4. Atemtyp USP */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={homepage.atemtypUSP.subtitle}
            title={homepage.atemtypUSP.title}
            className="mb-8 text-center"
          />
          <div className="mx-auto max-w-3xl mb-12">
            <p className="mb-4 text-lg text-dark/80 text-center" dangerouslySetInnerHTML={{ __html: homepage.atemtypUSP.desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <p className="text-lg font-semibold text-dark text-center">{homepage.atemtypUSP.keyMessage}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="mb-2 text-5xl">{homepage.atemtypUSP.einatmer.symbol}</div>
              <h4 className="mb-1 font-display text-xl font-normal text-dark">{homepage.atemtypUSP.einatmer.name}</h4>
              <p className="text-sm text-dark/70">{homepage.atemtypUSP.einatmer.desc}</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl">{homepage.atemtypUSP.ausatmer.symbol}</div>
              <h4 className="mb-1 font-display text-xl font-normal text-dark">{homepage.atemtypUSP.ausatmer.name}</h4>
              <p className="text-sm text-dark/70">{homepage.atemtypUSP.ausatmer.desc}</p>
            </div>
          </div>
          <div className="text-center">
            <Button href={homepage.atemtypUSP.cta.href} variant="primary">
              {homepage.atemtypUSP.cta.text} →
            </Button>
          </div>
        </Container>
      </Section>

      {/* 5. Kursübersicht */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            {homepage.coursePath.title}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            {homepage.coursePath.stages.map((stage, idx) => (
              <CoursePathStage
                key={idx}
                {...stage}
                isLast={idx === homepage.coursePath.stages.length - 1}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Der Meister */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                subtitle={homepage.meister.subtitle}
                title={homepage.meister.name}
              />
              <p className="mb-4 text-lg font-semibold text-dark">{homepage.meister.title}</p>
              <p className="mb-8 text-lg text-dark/80">{homepage.meister.desc}</p>
              <Button href={homepage.meister.cta.href} variant="secondary">
                {homepage.meister.cta.text} →
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg bg-background-alt overflow-hidden">
              {/* Platzhalter für Bild */}
              <div className="absolute inset-0 flex items-center justify-center text-dark/30">
                <span className="text-6xl">📷</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Testimonials */}
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

      {/* 8. FAQ */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            Häufige Fragen
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={homepage.faq} />
          </div>
        </Container>
      </Section>

      {/* 9. Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {homepage.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">
              {homepage.finalCTA.desc}
            </p>
            <Button href={homepage.finalCTA.cta.href} variant="primary" className="mb-4">
              {homepage.finalCTA.cta.text}
            </Button>
            <p className="text-sm text-white/60">{homepage.finalCTA.smallPrint}</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
