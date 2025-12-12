import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'article' | 'section'
}

export default function Card({ children, className, as: Component = 'div' }: CardProps) {
  return (
    <Component
      className={cn(
        'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow',
        className
      )}
    >
      {children}
    </Component>
  )
}

