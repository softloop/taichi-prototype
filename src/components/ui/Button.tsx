import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'full'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, href, variant = 'primary', className = '', onClick, type = 'button' }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    full: 'w-full bg-primary text-white hover:bg-primary-dark',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    // External URLs should use regular <a> tag
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}



