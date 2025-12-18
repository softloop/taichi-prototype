'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

interface BlogFilterProps {
  jahre: string[]
  themen: string[]
  suchePlaceholder: string
  selectedJahr: string
  selectedThema: string
  searchQuery: string
  onJahrChange: (jahr: string) => void
  onThemaChange: (thema: string) => void
  onSearchChange: (query: string) => void
}

export default function BlogFilter({
  jahre,
  themen,
  suchePlaceholder,
  selectedJahr,
  selectedThema,
  searchQuery,
  onJahrChange,
  onThemaChange,
  onSearchChange,
}: BlogFilterProps) {
  return (
    <div className="space-y-6">
      {/* Jahr-Filter */}
      <div>
        <label className="mb-3 block text-sm font-semibold uppercase tracking-wider text-dark">
          Jahr
        </label>
        <div className="flex flex-wrap gap-2">
          {jahre.map((jahr) => (
            <button
              key={jahr}
              onClick={() => onJahrChange(jahr)}
              className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors rounded-full ${
                selectedJahr === jahr
                  ? 'bg-primary text-white'
                  : 'bg-background-alt text-dark hover:bg-primary/10'
              }`}
            >
              {jahr}
            </button>
          ))}
        </div>
      </div>

      {/* Thema-Filter */}
      <div>
        <label className="mb-3 block text-sm font-semibold uppercase tracking-wider text-dark">
          Thema
        </label>
        <div className="flex flex-wrap gap-2">
          {themen.map((thema) => (
            <button
              key={thema}
              onClick={() => onThemaChange(thema)}
              className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors rounded-full ${
                selectedThema === thema
                  ? 'bg-primary text-white'
                  : 'bg-background-alt text-dark hover:bg-primary/10'
              }`}
            >
              {thema}
            </button>
          ))}
        </div>
      </div>

      {/* Suche */}
      <div>
        <label className="mb-3 block text-sm font-semibold uppercase tracking-wider text-dark">
          Suche
        </label>
        <input
          type="text"
          placeholder={suchePlaceholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  )
}


