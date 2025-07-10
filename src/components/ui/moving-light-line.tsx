"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface MovingLightLineProps {
  className?: string
  color?: string
  speed?: number
}

export const MovingLightLine: React.FC<MovingLightLineProps> = ({
  className = "",
  color,
  speed = 8
}) => {
  const { theme } = useTheme()
  
  // Use theme-aware colors
  const lineColor = color || (theme === 'dark' ? '#3b82f6' : '#3b82f6') // Blue color

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {/* Moving Light Line */}
      <motion.div
        className="absolute w-2 h-full"
        style={{
          background: `linear-gradient(to bottom, transparent, ${lineColor}, transparent)`,
          opacity: 0.6
        }}
        animate={{
          x: [0, '100%', 0]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
} 