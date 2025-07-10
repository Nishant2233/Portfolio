"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface SimpleSpotlightProps {
  className?: string
  color?: string
  intensity?: number
}

export const SimpleSpotlight: React.FC<SimpleSpotlightProps> = ({
  className = "",
  color = "#888888",
  intensity = 0.3
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {/* Main spotlight */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${color}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}, transparent 50%)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Secondary spotlight */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 70% 80%, ${color}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}, transparent 40%)`,
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Moving spotlight */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}, transparent 30%)`,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
} 