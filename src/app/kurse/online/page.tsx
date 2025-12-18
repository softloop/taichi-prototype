'use client'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import Grid from '@/components/layout/Grid'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { onlineKurseDetail, kurzform } from '@/data/courses'
import { testimonials } from '@/data/testimonials'
import HighlightBox from '@/components/features/HighlightBox'
import LangformCard from '@/components/features/LangformCard'
import VertiefungCard from '@/components/features/VertiefungCard'
import VorteileCard from '@/components/features/VorteileCard'
import BuchCard from '@/components/features/BuchCard'
import TestimonialCard from '@/components/features/TestimonialCard'
import FAQ from '@/components/features/FAQ'

export default function OnlineKursePage() {
  return (
    <>
      {/* Hero */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {onlineKurseDetail.hero.subtitle}
            </p>
            <h1 className="mb-6 font-display text-4xl font-normal md:text-5xl text-dark">
              {onlineKurseDetail.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-dark/80">
              {onlineKurseDetail.hero.desc}
            </p>
          </div>
        </Container>
      </Section>

      {/* Einleitungs-Karten */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <Grid cols={3} gap="lg">
            <Card
              variant="hover"
              className="p-6 cursor-pointer"
              onClick={() => {
                document.getElementById('kurzform')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <h3 className="mb-3 font-display text-xl font-normal text-dark">
                {onlineKurseDetail.einleitung[0].title}
              </h3>
              <p className="text-dark/80">{onlineKurseDetail.einleitung[0].desc}</p>
            </Card>
            <Card
              variant="hover"
              className="p-6 cursor-pointer"
              onClick={() => {
                document.getElementById('langform')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <h3 className="mb-3 font-display text-xl font-normal text-dark">
                {onlineKurseDetail.einleitung[1].title}
              </h3>
              <p className="text-dark/80">{onlineKurseDetail.einleitung[1].desc}</p>
            </Card>
            <Card
              variant="hover"
              className="p-6 cursor-pointer"
              onClick={() => {
                document.getElementById('vertiefung')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <h3 className="mb-3 font-display text-xl font-normal text-dark">
                {onlineKurseDetail.einleitung[2].title}
              </h3>
              <p className="text-dark/80">{onlineKurseDetail.einleitung[2].desc}</p>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Kurzform Highlight */}
      <Section id="kurzform" bg="base">
        <Container className="py-16 md:py-24">
          <HighlightBox
            badge={kurzform.badge}
            title={kurzform.title}
            desc={kurzform.desc}
            features={kurzform.features}
            priceEinmalig={kurzform.price}
            cta={kurzform.cta}
            className="max-w-3xl mx-auto"
          />
          <div className="mt-4 text-center text-sm text-dark/70">
            Lerndauer: {kurzform.lerndauer}
          </div>
        </Container>
      </Section>

      {/* Langform */}
      <Section id="langform" bg="white">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={onlineKurseDetail.langform.subtitle}
            title={onlineKurseDetail.langform.title}
            className="mb-4 text-center"
          />
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-dark/80">
            {onlineKurseDetail.langform.desc}
          </p>
          <Grid cols={3} gap="lg" className="mb-8">
            {onlineKurseDetail.langform.parts.map((part, idx) => (
              <LangformCard key={idx} {...part} />
            ))}
          </Grid>
          {/* Langform Paket */}
          <div className="mx-auto max-w-2xl">
            <HighlightBox
              badge={onlineKurseDetail.langform.paket.title}
              title={onlineKurseDetail.langform.paket.name}
              desc={onlineKurseDetail.langform.paket.features.split('\n').join(' · ')}
              priceOld={onlineKurseDetail.langform.paket.priceOld}
              priceNew={onlineKurseDetail.langform.paket.priceNew}
              cta={onlineKurseDetail.langform.paket.cta}
            />
          </div>
        </Container>
      </Section>

      {/* Vertiefungsstufen */}
      <Section id="vertiefung" bg="base">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={onlineKurseDetail.vertiefung.subtitle}
            title={onlineKurseDetail.vertiefung.title}
            className="mb-4 text-center"
          />
          <p className="mx-auto mb-6 max-w-3xl text-center text-lg text-dark/80">
            {onlineKurseDetail.vertiefung.desc}
          </p>
          {/* Info-Box */}
          <div className="mx-auto mb-12 max-w-2xl rounded-lg border border-primary/20 bg-primary-light p-6">
            <p className="text-center italic text-dark/80">{onlineKurseDetail.vertiefung.infoBox}</p>
          </div>
          {/* Die 7 Tore */}
          <Grid cols={3} gap="lg" className="mb-12">
            {onlineKurseDetail.vertiefung.toere.map((tor, idx) => (
              <VertiefungCard key={idx} {...tor} />
            ))}
          </Grid>
          {/* Meisterpaket */}
          <div className="mx-auto max-w-3xl">
            <HighlightBox
              badge={onlineKurseDetail.vertiefung.meisterpaket.badge}
              title={onlineKurseDetail.vertiefung.meisterpaket.title}
              subtitle={onlineKurseDetail.vertiefung.meisterpaket.subtitle}
              desc={onlineKurseDetail.vertiefung.meisterpaket.desc}
              features={onlineKurseDetail.vertiefung.meisterpaket.features}
              priceAbo={onlineKurseDetail.vertiefung.meisterpaket.priceAbo}
              priceEinmalig={onlineKurseDetail.vertiefung.meisterpaket.priceEinmalig}
              cta={onlineKurseDetail.vertiefung.meisterpaket.cta}
            />
          </div>
        </Container>
      </Section>

      {/* Bonus */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl rounded-lg border-2 border-primary/30 bg-background-alt p-8">
            <h3 className="mb-4 text-center font-display text-xl font-normal text-dark">
              {onlineKurseDetail.bonus.title}
            </h3>
            <p className="mb-2 text-center text-dark/80">{onlineKurseDetail.bonus.desc}</p>
            <p className="text-center text-sm text-dark/70">{onlineKurseDetail.bonus.note}</p>
          </div>
        </Container>
      </Section>

      {/* Vorteile */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            {onlineKurseDetail.vorteile.title}
          </h2>
          <Grid cols={3} gap="lg">
            {onlineKurseDetail.vorteile.items.map((item, idx) => (
              <VorteileCard key={idx} {...item} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Buch */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <SectionTitle
            subtitle={onlineKurseDetail.buch.subtitle}
            title={onlineKurseDetail.buch.title}
            className="mb-8 text-center"
          />
          <div className="mx-auto max-w-3xl">
            <BuchCard {...onlineKurseDetail.buch} />
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section bg="base">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            Das sagen unsere Schüler
          </h2>
          <Grid cols={3} gap="lg">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <Container className="py-16 md:py-24">
          <h2 className="mb-12 text-center font-display text-4xl font-normal text-dark">
            Häufige Fragen
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ items={onlineKurseDetail.faq} />
          </div>
        </Container>
      </Section>

      {/* Finaler CTA */}
      <Section bg="dark">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-4xl font-normal text-white">
              {onlineKurseDetail.finalCTA.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">{onlineKurseDetail.finalCTA.desc}</p>
            <Button href={onlineKurseDetail.finalCTA.cta.href} variant="primary">
              {onlineKurseDetail.finalCTA.cta.text}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
