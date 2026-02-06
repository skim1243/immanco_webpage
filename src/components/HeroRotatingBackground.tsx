'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const HERO_IMAGES = [
  { src: '/hero1.png', alt: 'Immanco cleaning service' },
  { src: '/hero4.png', alt: 'Commercial cleaning' },
  { src: '/hero8.png', alt: 'Professional cleaning' },
]

const ROTATE_INTERVAL_MS = 5000

export function HeroRotatingBackground() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute inset-0 z-10">
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={img.src}
            alt={i === index ? img.alt : ''}
            fill
            priority={i === 0}
            className="object-cover w-full h-full"
            sizes="100vw"
          />
        </div>
      ))}
      {/* Slanted yellow gradient with glow pulse */}
      <div
        className="absolute inset-0 z-10 pointer-events-none animate-sun-glow"
        style={{
          background: 'linear-gradient(to bottom left, transparent 0%, transparent 40%, rgba(250, 204, 21, 0.75) 100%)',
        }}
        aria-hidden
      />
      {/* Soft sun orb glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none animate-sun-glow-delayed opacity-70"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 70% 20%, rgba(255, 220, 100, 0.55) 0%, transparent 70%)',
        }}
        aria-hidden
      />
    </div>
  )
}
