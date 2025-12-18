import { ReactNode } from 'react'
import Link from 'next/link'

interface CardProps {
  children: ReactNode
  href?: string
  variant?: 'default' | 'hover' | 'highlight'
  className?: string
}

export default function Card({ children, href, variant = 'default', className = '' }: CardProps) {
  const baseClasses = 'rounded-lg border border-border bg-white p-6 transition-all'
  
  const variantClasses = {
    default: '',
    hover: 'hover:shadow-lg hover:border-primary/50 cursor-pointer',
    highlight: 'bg-primary-light border-primary/30',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return <div className={classes}>{children}</div>
}






