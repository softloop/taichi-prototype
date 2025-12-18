'use client'

import { useState } from 'react'

interface FilterOption {
  id: string
  label: string
}

interface CourseFilterProps {
  fuerWen: FilterOption[]
  niveau: FilterOption[]
  kursart: FilterOption[]
  onFilterChange: (filters: { fuerWen: string; niveau: string; kursart: string }) => void
}

export default function CourseFilter({ fuerWen, niveau, kursart, onFilterChange }: CourseFilterProps) {
  const [activeFilters, setActiveFilters] = useState({
    fuerWen: 'alle',
    niveau: 'alle',
    kursart: 'alle',
  })

  const handleFilterChange = (type: 'fuerWen' | 'niveau' | 'kursart', value: string) => {
    const newFilters = { ...activeFilters, [type]: value }
    setActiveFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="mb-8 rounded-lg border border-border bg-white p-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-dark">
            Für wen
          </label>
          <select
            value={activeFilters.fuerWen}
            onChange={(e) => handleFilterChange('fuerWen', e.target.value)}
            className="w-full rounded border border-border bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-dark focus:border-primary focus:outline-none"
          >
            {fuerWen.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-dark">
            Niveau
          </label>
          <select
            value={activeFilters.niveau}
            onChange={(e) => handleFilterChange('niveau', e.target.value)}
            className="w-full rounded border border-border bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-dark focus:border-primary focus:outline-none"
          >
            {niveau.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-dark">
            Kursart
          </label>
          <select
            value={activeFilters.kursart}
            onChange={(e) => handleFilterChange('kursart', e.target.value)}
            className="w-full rounded border border-border bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-dark focus:border-primary focus:outline-none"
          >
            {kursart.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

