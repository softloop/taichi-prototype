'use client'

import { useState } from 'react'

interface Tab {
  name: string
  lektionen: string[]
}

interface CourseContentTabsProps {
  title: string
  tabs: Tab[]
  hinweis: string
}

export default function CourseContentTabs({ title, tabs, hinweis }: CourseContentTabsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      <h2 className="mb-6 text-center font-display text-3xl font-normal text-dark md:text-4xl">
        {title}
      </h2>
      {/* Akkordeons */}
      <div className="mb-6 space-y-4">
        {tabs.map((tab, idx) => (
          <div key={idx} className="mx-auto max-w-2xl rounded-lg border border-border bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background-alt transition-colors"
            >
              <span className="font-semibold text-dark">{tab.name}</span>
              <span className="text-primary text-xl">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4">
                <ol className="space-y-3">
                  {tab.lektionen.map((lektion, lektionIdx) => (
                    <li key={lektionIdx} className="flex items-start gap-4 rounded-lg border border-border bg-background-alt p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                        {lektionIdx + 1}
                      </span>
                      <span className="pt-1 text-dark/80">{lektion}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Hinweis */}
      <div className="mx-auto max-w-3xl rounded-lg border border-primary/20 bg-primary-light p-4">
        <p className="text-center text-sm italic text-dark/80">{hinweis}</p>
      </div>
    </div>
  )
}

