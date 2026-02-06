'use client'

import React, { useRef, useState, useEffect } from 'react'

type Props = {
  children: React.ReactNode
  /** Delay in ms before starting the fade (e.g. for stagger) */
  delay?: number
  /** How much of the element must be visible (0-1) */
  threshold?: number
  className?: string
}

export function FadeInOnScroll({ children, delay = 0, threshold = 0.1, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true)
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`fade-in-on-scroll ${visible ? 'visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
