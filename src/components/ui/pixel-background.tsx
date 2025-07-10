"use client"

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface PixelBackgroundProps {
  className?: string
  pixelCount?: number
  color?: string
  speed?: number
}

export const PixelBackground: React.FC<PixelBackgroundProps> = ({
  className = "",
  pixelCount = 50,
  color = "#888888",
  speed = 20
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const pixels = Array.from({ length: pixelCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2
  }))

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
    >
      {pixels.map((pixel) => (
        <motion.div
          key={pixel.id}
          className="absolute rounded-full"
          style={{
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            width: `${pixel.size}px`,
            height: `${pixel.size}px`,
            backgroundColor: color,
            opacity: 0.6
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: speed + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pixel.delay
          }}
        />
      ))}
    </div>
  )
} 