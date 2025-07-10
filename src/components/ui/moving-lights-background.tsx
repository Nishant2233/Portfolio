"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface MovingLightsBackgroundProps {
  className?: string
  color?: string
  speed?: number
}

export const MovingLightsBackground: React.FC<MovingLightsBackgroundProps> = ({
  className = "",
  color = "#888888",
  speed = 8
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {/* Moving light lines */}
      <motion.div
        className="absolute w-full h-px"
        style={{
          top: "20%",
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
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
      
      <motion.div
        className="absolute w-full h-px"
        style={{
          top: "40%",
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
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
      
      <motion.div
        className="absolute w-full h-px"
        style={{
          top: "60%",
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: 0.6
        }}
        animate={{
          x: [0, 100, 0],
          opacity: [0.3, 0.8, 0.3]
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
          top: "80%",
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: 0.6
        }}
        animate={{
          x: [100, 0, 100],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: speed + 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Vertical moving lights */}
      <motion.div
        className="absolute h-full w-px"
        style={{
          left: "25%",
          background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
          opacity: 0.6
        }}
        animate={{
          y: [0, 100, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: speed + 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute h-full w-px"
        style={{
          left: "75%",
          background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
          opacity: 0.6
        }}
        animate={{
          y: [100, 0, 100],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: speed + 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
} 