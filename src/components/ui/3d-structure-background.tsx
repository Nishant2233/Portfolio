"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface ThreeDStructureBackgroundProps {
  className?: string
  color?: string
  speed?: number
}

export const ThreeDStructureBackground: React.FC<ThreeDStructureBackgroundProps> = ({
  className = "",
  color,
  speed = 20
}) => {
  const { theme } = useTheme()
  
  // Use theme-aware colors that match other sections
  const themeColor = color || (theme === 'dark' ? '#ffffff' : '#000000')
  const gridColor = theme === 'dark' ? '#ffffff' : '#000000'
  const lineColor = theme === 'dark' ? '#ffffff' : '#000000'

  const shapes = [
    { id: 1, size: 50, x: 15, y: 25, rotation: 30, delay: 0 },
    { id: 2, size: 40, x: 75, y: 65, rotation: -45, delay: 3 },
    { id: 3, size: 60, x: 25, y: 75, rotation: 60, delay: 6 },
    { id: 4, size: 45, x: 80, y: 15, rotation: -30, delay: 9 }
  ]

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {/* 3D Geometric Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            transform: `rotate(${shape.rotation}deg)`,
            opacity: 0.08
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: speed + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay
          }}
        >
          {/* 3D Cube */}
          <div
            className="w-full h-full relative"
            style={{
              transform: 'rotateX(25deg) rotateZ(25deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 border"
              style={{
                backgroundColor: themeColor,
                opacity: 0.15,
                transform: 'translateZ(15px)'
              }}
            />
            {/* Back face */}
            <div
              className="absolute inset-0 border"
              style={{
                backgroundColor: themeColor,
                opacity: 0.1,
                transform: 'translateZ(-15px)'
              }}
            />
            {/* Top face */}
            <div
              className="absolute inset-0 border"
              style={{
                backgroundColor: themeColor,
                opacity: 0.2,
                transform: 'rotateX(90deg) translateZ(15px)'
              }}
            />
            {/* Right face */}
            <div
              className="absolute inset-0 border"
              style={{
                backgroundColor: themeColor,
                opacity: 0.15,
                transform: 'rotateY(90deg) translateZ(15px)'
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Animated Grid Lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(90deg, ${gridColor}08 1px, transparent 1px), linear-gradient(0deg, ${gridColor}08 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat'
        }}
        animate={{
          y: [0, 80, 0]
        }}
        transition={{
          duration: speed + 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 35%, ${lineColor}08 50%, transparent 65%)`,
          backgroundSize: '250px 250px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: speed + 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
} 