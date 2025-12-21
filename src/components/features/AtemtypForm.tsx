'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

interface AtemtypFormProps {
  onSubmit: (data: AtemtypFormData) => void
  onCancel: () => void
}

export interface AtemtypFormData {
  vorname: string
  nachname: string
  email: string
  geburtsort: string
  geburtsland: string
  geburtstag: string
  geburtszeit: string
  bemerkungen: string
  datenschutzAgreement: boolean
}

export default function AtemtypForm({ onSubmit, onCancel }: AtemtypFormProps) {
  const [formData, setFormData] = useState<AtemtypFormData>({
    vorname: '',
    nachname: '',
    email: '',
    geburtsort: '',
    geburtsland: '',
    geburtstag: '',
    geburtszeit: 'Früh bis 8 Uhr',
    bemerkungen: '',
    datenschutzAgreement: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof AtemtypFormData, string>>>({})

  const geburtszeitOptions = [
    'Früh bis 8 Uhr',
    '8-12 Uhr',
    '12-16 Uhr',
    '16-20 Uhr',
    'Abends ab 20 Uhr',
    'Unbekannt',
  ]

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AtemtypFormData, string>> = {}

    if (!formData.vorname.trim()) {
      newErrors.vorname = 'Bitte gib Deinen Vornamen ein.'
    }
    if (!formData.nachname.trim()) {
      newErrors.nachname = 'Bitte gib Deinen Nachnamen ein.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte gib Deine E-Mail-Adresse ein.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.'
    }
    if (!formData.geburtsort.trim()) {
      newErrors.geburtsort = 'Bitte gib Deinen Geburtsort ein.'
    }
    if (!formData.geburtsland.trim()) {
      newErrors.geburtsland = 'Bitte gib Dein Geburtsland ein.'
    }
    if (!formData.geburtstag.trim()) {
      newErrors.geburtstag = 'Bitte gib Dein Geburtsdatum ein.'
    }
    if (!formData.datenschutzAgreement) {
      newErrors.datenschutzAgreement = 'Bitte stimme der Datenschutzerklärung zu.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      onSubmit(formData)
    }
  }

  const handleChange = (
    field: keyof AtemtypFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Vorname & Nachname */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-dark">
            Vorname: <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            value={formData.vorname}
            onChange={(e) => handleChange('vorname', e.target.value)}
            className={`w-full rounded-lg border ${
              errors.vorname ? 'border-red-500' : 'border-border'
            } bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none`}
            placeholder="Vorname"
          />
          {errors.vorname && (
            <p className="mt-1 text-sm text-red-500">{errors.vorname}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-dark">
            Nachname: <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            value={formData.nachname}
            onChange={(e) => handleChange('nachname', e.target.value)}
            className={`w-full rounded-lg border ${
              errors.nachname ? 'border-red-500' : 'border-border'
            } bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none`}
            placeholder="Nachname"
          />
          {errors.nachname && (
            <p className="mt-1 text-sm text-red-500">{errors.nachname}</p>
          )}
        </div>
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
          placeholder="email@beispiel.de"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Geburtsort & Geburtsland */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-dark">
            Geburtsort: <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            value={formData.geburtsort}
            onChange={(e) => handleChange('geburtsort', e.target.value)}
            className={`w-full rounded-lg border ${
              errors.geburtsort ? 'border-red-500' : 'border-border'
            } bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none`}
            placeholder="Geburtsort"
          />
          {errors.geburtsort && (
            <p className="mt-1 text-sm text-red-500">{errors.geburtsort}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-dark">
            Geburtsland: <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            value={formData.geburtsland}
            onChange={(e) => handleChange('geburtsland', e.target.value)}
            className={`w-full rounded-lg border ${
              errors.geburtsland ? 'border-red-500' : 'border-border'
            } bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none`}
            placeholder="Geburtsland"
          />
          {errors.geburtsland && (
            <p className="mt-1 text-sm text-red-500">{errors.geburtsland}</p>
          )}
        </div>
      </div>

      {/* Geburtstag & Geburtszeit */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-dark">
            Geburtstag: <span className="text-primary">*</span>
          </label>
          <input
            type="date"
            value={formData.geburtstag}
            onChange={(e) => handleChange('geburtstag', e.target.value)}
            className={`w-full rounded-lg border ${
              errors.geburtstag ? 'border-red-500' : 'border-border'
            } bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none`}
          />
          {errors.geburtstag && (
            <p className="mt-1 text-sm text-red-500">{errors.geburtstag}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-dark">
            Geburtszeit:
          </label>
          <select
            value={formData.geburtszeit}
            onChange={(e) => handleChange('geburtszeit', e.target.value)}
            className="w-full rounded-lg border border-border bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none"
          >
            {geburtszeitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bemerkungen */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-dark">
          Bemerkungen:
        </label>
        <textarea
          value={formData.bemerkungen}
          onChange={(e) => handleChange('bemerkungen', e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-border bg-background-alt px-4 py-3 text-dark focus:border-primary focus:outline-none resize-y"
          placeholder="Optionale Bemerkungen..."
        />
      </div>

      {/* Datenschutzerklärung */}
      <div className="rounded-lg border border-border bg-background-alt p-4">
        <p className="mb-4 text-sm text-dark/80">
          <strong>Datenschutzerklärung:</strong> Mit dem Absenden dieses Formulars stimmst du der
          Verarbeitung deiner personenbezogenen Daten gemäß unserer Datenschutzerklärung zu. Deine
          Daten werden ausschließlich zur Bestimmung deines Atemtyps und zur Optimierung deiner Tai
          Chi-Praxis verwendet. Eine Weitergabe an Dritte erfolgt nicht. Du kannst deine
          Einwilligung jederzeit widerrufen.
        </p>
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

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 pt-4">
        <Button type="submit" variant="primary" className="flex-1 min-w-[200px]">
          Senden
        </Button>
        <Button type="button" onClick={onCancel} variant="secondary">
          Abbrechen
        </Button>
      </div>
    </form>
  )
}





