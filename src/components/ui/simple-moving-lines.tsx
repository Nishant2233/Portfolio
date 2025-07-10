"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface SimpleMovingLinesProps {
  className?: string
  color?: string
  speed?: number
  lineCount?: number
}

export const SimpleMovingLines: React.FC<SimpleMovingLinesProps> = ({
  className = "",
  color = "#888888",
  speed = 8,
  lineCount = 2
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {/* First moving line */}
      <motion.div
        className="absolute w-full h-px"
        style={{
          top: "30%",
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
          ease: "linear"
        }}
      />
      
      {/* Second moving line */}
      {lineCount > 1 && (
        <motion.div
          className="absolute w-full h-px"
          style={{
            top: "70%",
            backgroundColor: color,
            opacity: 0.6
          }}
          animate={{
            x: [100, 0, 100],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: speed + 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}
    </div>
  )
} 