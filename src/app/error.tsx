'use client'

import { useEffect } from 'react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Section bg="base">
      <Container className="py-24 md:py-32">
        <div className="text-center">
          <h1 className="mb-4 font-display text-6xl font-normal text-dark md:text-8xl">
            Fehler
          </h1>
          <h2 className="mb-4 font-display text-3xl font-normal text-dark md:text-4xl">
            Etwas ist schiefgelaufen
          </h2>
          <p className="mb-8 text-lg text-dark/80">
            Es ist ein Fehler aufgetreten. Bitte versuche es erneut.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={reset} variant="primary">
              Erneut versuchen
            </Button>
            <Button href="/" variant="secondary">
              Zur Startseite
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}


