'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

interface ContactFormProps {
  betreffOptions: string[]
  onSubmit?: (data: ContactFormData) => void
}

export interface ContactFormData {
  name: string
  email: string
  betreff: string
  nachricht: string
  datenschutzAgreement: boolean
}

export default function ContactForm({ betreffOptions, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    betreff: betreffOptions[0],
    nachricht: '',
    datenschutzAgreement: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte gib Deinen Namen ein.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte gib Deine E-Mail-Adresse ein.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.'
    }
    if (!formData.nachricht.trim()) {
      newErrors.nachricht = 'Bitte gib eine Nachricht ein.'
    }
    if (!formData.datenschutzAgreement) {
      newErrors.datenschutzAgreement = 'Bitte stimme der Datenschutzerklärung zu.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      if (onSubmit) {
        onSubmit(formData)
      }
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          betreff: betreffOptions[0],
          nachricht: '',
          datenschutzAgreement: false,
        })
      }, 3000)
    }, 1000)
  }

  const handleChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border-2 border-primary bg-primary/10 p-8 text-center">
        <div className="mb-4 text-5xl">✓</div>
        <h3 className="mb-2 font-display text-2xl font-normal text-dark">
          Nachricht gesendet!
        </h3>
        <p className="text-dark/80">
          Vielen Dank für Deine Nachricht. Wir melden uns innerhalb von 2 Werktagen bei Dir.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-dark">
          Name: <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`w-full rounded-lg border ${
            errors.name ? 'border-red-500' : 'border-border'
          } bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none`}
          placeholder="Dein Name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* E-Mail */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-dark">
          E-Mail: <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-border'
          } bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none`}
          placeholder="deine@email.de"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Betreff */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-dark">
          Betreff: <span className="text-primary">*</span>
        </label>
        <select
          value={formData.betreff}
          onChange={(e) => handleChange('betreff', e.target.value)}
          className="w-full rounded-lg border border-border bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none"
        >
          {betreffOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Nachricht */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-dark">
          Nachricht: <span className="text-primary">*</span>
        </label>
        <textarea
          value={formData.nachricht}
          onChange={(e) => handleChange('nachricht', e.target.value)}
          rows={6}
          className={`w-full rounded-lg border ${
            errors.nachricht ? 'border-red-500' : 'border-border'
          } bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none resize-y`}
          placeholder="Deine Nachricht..."
        />
        {errors.nachricht && (
          <p className="mt-1 text-sm text-red-500">{errors.nachricht}</p>
        )}
      </div>

      {/* Datenschutz */}
      <div className="rounded-lg border border-border bg-background-alt p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.datenschutzAgreement}
            onChange={(e) => handleChange('datenschutzAgreement', e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-sm text-dark/80">
            Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.{' '}
            <span className="text-primary">*</span>
          </span>
        </label>
        {errors.datenschutzAgreement && (
          <p className="mt-2 text-sm text-red-500">{errors.datenschutzAgreement}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </Button>
    </form>
  )
}




