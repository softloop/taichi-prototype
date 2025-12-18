import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  bg?: 'white' | 'base' | 'dark' | 'primary-light'
  className?: string
  id?: string
}

export default function Section({ children, bg = 'white', className = '', id }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    base: 'bg-background',
    dark: 'bg-dark text-white',
    'primary-light': 'bg-primary-light',
  }

  return (
    <section id={id} className={`${bgClasses[bg]} ${className}`}>
      {children}
    </section>
  )
}

