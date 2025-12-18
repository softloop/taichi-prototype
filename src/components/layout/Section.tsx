import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  bg?: 'white' | 'base' | 'dark' | 'primary-light'
  className?: string
}

export default function Section({ children, bg = 'white', className = '' }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    base: 'bg-background',
    dark: 'bg-dark text-white',
    'primary-light': 'bg-primary-light',
  }

  return (
    <section className={`${bgClasses[bg]} ${className}`}>
      {children}
    </section>
  )
}

