'use client'

import { useState } from 'react'

interface FAQProps {
  items: Array<{ question: string; answer: string }>
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-lg border border-border bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background-alt transition-colors"
          >
            <span className="font-semibold text-dark">{item.question}</span>
            <span className="text-primary text-xl">{openIndex === idx ? '−' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-dark/80">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}

