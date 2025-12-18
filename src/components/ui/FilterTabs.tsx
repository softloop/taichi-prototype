'use client'

import { useState } from 'react'

interface FilterTabsProps {
  tabs: { id: string; label: string }[]
  defaultTab?: string
  onChange?: (tabId: string) => void
}

export default function FilterTabs({ tabs, defaultTab, onChange }: FilterTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  return (
    <div className="flex flex-wrap gap-2 border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
            activeTab === tab.id
              ? 'border-b-2 border-primary text-primary'
              : 'text-dark/60 hover:text-primary'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}






