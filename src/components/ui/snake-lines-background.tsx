"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface SnakeLinesBackgroundProps {
  className?: string
  color?: string
  speed?: number
  lineCount?: number
}

export const SnakeLinesBackground: React.FC<SnakeLinesBackgroundProps> = ({
  className = "",
  color = "#888888",
  speed = 8,
  lineCount = 5
}) => {
  const lines = Array.from({ length: lineCount }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    y: (i * 20) + 10
  }))

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute w-full h-px"
          style={{
            top: `${line.y}%`,
            backgroundColor: color,
            opacity: 0.6
          }}
          animate={{
            x: [0, 100, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            delay: line.delay
          }}
        />
      ))}
      
      {/* Vertical moving lines */}
      {lines.map((line) => (
        <motion.div
          key={`vertical-${line.id}`}
          className="absolute h-full w-px"
          style={{
            left: `${line.y}%`,
            backgroundColor: color,
            opacity: 0.6
          }}
          animate={{
            y: [0, 100, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: speed + 2,
            repeat: Infinity,
            ease: "linear",
            delay: line.delay + 1
          }}
        />
      ))}
      
      {/* Diagonal moving lines */}
      <motion.div
        className="absolute w-full h-px"
        style={{
          top: "30%",
          backgroundColor: color,
          opacity: 0.4,
          transform: "rotate(45deg)"
        }}
        animate={{
          x: [0, 100, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: speed + 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-full h-px"
        style={{
          top: "70%",
          backgroundColor: color,
          opacity: 0.4,
          transform: "rotate(-45deg)"
        }}
        animate={{
          x: [100, 0, 100],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: speed + 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
} 