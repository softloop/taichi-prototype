'use client'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHero from '@/components/layout/PageHero'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useState } from 'react'

export default function AtemtypTestPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<'einatmer' | 'ausatmer' | null>(null)

  const questions = [
    {
      question: 'Wie fühlst du dich am wohlsten?',
      options: [
        'Mit gefüllter Brust und aufrechter Haltung',
        'Mit leerer Lunge und leicht geneigter Haltung',
      ],
    },
    {
      question: 'Was gibt dir mehr Energie?',
      options: [
        'Das Einatmen und die Fülle',
        'Das Ausatmen und die Leere',
      ],
    },
    {
      question: 'Wie stehst du am liebsten?',
      options: [
        'Aufrecht, nach oben gerichtet',
        'Leicht geneigt, zur Erde gerichtet',
      ],
    },
  ]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Calculate result (simple: more 0s = einatmer, more 1s = ausatmer)
      const einatmerCount = newAnswers.filter((a) => a === 0).length
      const ausatmerCount = newAnswers.filter((a) => a === 1).length
      setResult(einatmerCount > ausatmerCount ? 'einatmer' : 'ausatmer')
    }
  }

  const resetTest = () => {
    setStep(0)
    setAnswers([])
    setResult(null)
  }

  if (result) {
    return (
      <>
        <PageHero title="Dein Atemtyp" />
        <Section bg="white">
          <Container className="py-16 md:py-24">
            <div className="mx-auto max-w-2xl">
              <Card variant="highlight" className="text-center">
                <div className="mb-4 text-6xl">
                  {result === 'einatmer' ? '☽' : '☀'}
                </div>
                <h2 className="mb-4 font-display text-3xl font-normal text-dark">
                  Du bist ein {result === 'einatmer' ? 'Einatmer' : 'Ausatmer'}
                </h2>
                <p className="mb-6 text-dark/80">
                  {result === 'einatmer'
                    ? 'Als lunarer Einatmertyp brauchst du die Fülle: du füllst Brust und Rücken mit dem Einatmen und verweilst möglichst lange in diesem Zustand.'
                    : 'Als solarer Ausatmertyp brauchst du die Leere: du leerst deine Lungen mit dem Ausatmen und gewinnst so die Weite und Sicherheit der Erde.'}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/kurse" variant="primary">
                    Passende Kurse finden
                  </Button>
                  <Button onClick={resetTest} variant="secondary">
                    Test wiederholen
                  </Button>
                </div>
              </Card>
            </div>
          </Container>
        </Section>
      </>
    )
  }

  return (
    <>
      <PageHero
        title="Atemtyp-Test"
        desc="Finde heraus, ob du Einatmer oder Ausatmer bist – in nur wenigen Fragen."
      />

      <Section bg="white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <Card>
              <div className="mb-6">
                <div className="mb-2 text-sm font-semibold text-primary">
                  Frage {step + 1} von {questions.length}
                </div>
                <div className="h-2 bg-background-alt rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="mb-8 font-display text-2xl font-normal text-dark">
                {questions[step].question}
              </h2>

              <div className="space-y-4">
                {questions[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className="w-full rounded-lg border-2 border-border bg-white p-4 text-left transition-all hover:border-primary hover:bg-primary-light"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}






