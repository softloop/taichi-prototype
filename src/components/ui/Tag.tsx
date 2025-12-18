interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'outline'
  className?: string
}

export default function Tag({ children, variant = 'default', className = '' }: TagProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full'
  
  const variantClasses = {
    default: 'bg-background-alt text-dark',
    primary: 'bg-primary text-white',
    outline: 'bg-transparent border border-primary text-primary',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}






