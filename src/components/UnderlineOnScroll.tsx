'use client'

import React, { useRef, useState, useEffect } from 'react'

export function UnderlineOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true)
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className={`underline-on-scroll ${visible ? 'visible' : ''}`}
    >
      {children}
    </span>
  )
}
