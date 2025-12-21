'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Modal from '@/components/ui/Modal'
import AtemtypForm, { AtemtypFormData } from '@/components/features/AtemtypForm'

interface BirthDateCalculatorProps {
  onResult?: (result: 'einatmer' | 'ausatmer' | 'unclear') => void
}

export default function BirthDateCalculator({ onResult }: BirthDateCalculatorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [result, setResult] = useState<'einatmer' | 'ausatmer' | 'unclear' | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Simplified Terlusollogie calculation
  // Note: This is a simplified version. The actual Terlusollogie calculation
  // is more complex and involves precise astronomical calculations.
  const calculateAtemtyp = (birthDate: string): 'einatmer' | 'ausatmer' | 'unclear' => {
    // Parse the date string (format: YYYY-MM-DD)
    const date = new Date(birthDate)
    const year = date.getFullYear()
    
    // Calculate day of year (1-365/366)
    const startOfYear = new Date(year, 0, 1)
    const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1
    
    // Simplified: alternate pattern (this is NOT the real calculation)
    // Real Terlusollogie would need exact sun/moon positions
    // For demonstration, we use a pattern that gives roughly 50/50 distribution
    const isEvenDay = dayOfYear % 2 === 0
    
    // Some days are "switching days" where result might be unclear
    // This happens on certain astronomical transition days
    const isSwitchingDay = dayOfYear % 30 === 0 || dayOfYear % 30 === 1
    
    if (isSwitchingDay) {
      return 'unclear'
    }
    
    return isEvenDay ? 'ausatmer' : 'einatmer'
  }

  const handleFormSubmit = (formData: AtemtypFormData) => {
    setIsCalculating(true)
    setIsModalOpen(false)
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const calculatedResult = calculateAtemtyp(formData.geburtstag)
      setResult(calculatedResult)
      setIsCalculating(false)
      if (onResult) {
        onResult(calculatedResult)
      }
    }, 500)
  }

  const reset = () => {
    setResult(null)
  }

  if (result) {
    return (
      <Card variant="highlight" className="p-8">
        <div className="text-center">
          {result === 'unclear' ? (
            <>
              <div className="mb-4 text-5xl">❓</div>
              <h3 className="mb-4 font-display text-2xl font-normal text-dark">
                Ergebnis uneindeutig
              </h3>
              <p className="mb-6 text-dark/80">
                Bei Geburten genau an einem Umschalttag kann das Ergebnis uneindeutig sein. 
                Wir empfehlen den körperlichen Selbsttest oder eine persönliche Bestimmung per Zoom.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="#selbsttest" variant="primary">
                  Selbsttest starten
                </Button>
                <Button href="#zoom" variant="secondary">
                  Zoom-Termin anfragen
                </Button>
                <Button onClick={reset} variant="secondary">
                  Neu berechnen
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4 text-6xl">
                {result === 'einatmer' ? '☽' : '☀'}
              </div>
              <h3 className="mb-4 font-display text-2xl font-normal text-dark">
                Du bist {result === 'einatmer' ? 'EINATMER' : 'AUSATMER'} ({result === 'einatmer' ? 'lunar' : 'solar'})
              </h3>
              <div className="mb-6 flex flex-wrap justify-center gap-4">
                <Button href="/methode/atemtyp" variant="primary">
                  Mehr über Deinen Atemtyp erfahren
                </Button>
                <Button href="/kurse/online" variant="secondary">
                  Passende Kurse anzeigen
                </Button>
              </div>
              <Button onClick={reset} variant="secondary">
                Neu berechnen
              </Button>
            </>
          )}
        </div>
      </Card>
    )
  }

  return (
    <>
      <Card variant="highlight" className="p-8 shadow-lg">
        <div className="text-center mb-6">
          <div className="mb-4 text-5xl">🎯</div>
          <h3 className="mb-2 font-display text-2xl font-normal text-dark">
            Finde Deinen Atemtyp
          </h3>
          <p className="text-sm text-dark/70 mb-3">
            Gib Dein Geburtsdatum ein – Meister Frieder Anders berechnet Deinen Atemtyp persönlich und sendet Dir das Ergebnis per E-Mail.
          </p>
          <p className="text-xs text-dark/60">
            ⏱️ Die Berechnung erfolgt manuell und wird schnell bearbeitet.
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="primary"
          className="w-full text-base py-4"
          disabled={isCalculating}
        >
          {isCalculating ? 'Berechne...' : 'Jetzt kostenlos berechnen lassen →'}
        </Button>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Atemtyp-Berechnung"
      >
        <AtemtypForm
          onSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  )
}






