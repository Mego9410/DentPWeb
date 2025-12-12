'use client'

import React, { useEffect, useRef, useState } from 'react'

interface LazySectionProps {
  children: React.ReactNode
  className?: string
}

export default function LazySection({ children, className }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="min-h-[400px]" aria-hidden="true" />}
    </div>
  )
}

