'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

export const GridBeam: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <div className={cn('relative w-full h-full bg-grid', className)}>
    <SnakeBeam />
    {children}
  </div>
)

export const Beam = () => {
  return (
    <svg
      width="156"
      height="63"
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 ml-24 mt-8 pointer-events-none"
    >
      <path
        d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
        stroke="url(#grad1)"
        strokeWidth={1.5}
      />
      <defs>
        <motion.linearGradient
          id="grad1"
          variants={{
            initial: {
              x1: '40%',
              x2: '50%',
              y1: '160%',
              y2: '180%'
            },
            animate: {
              x1: '0%',
              x2: '10%',
              y1: '-40%',
              y2: '-20%'
            }
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2
          }}
        >
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop stopColor="#18CCFC" />
          <stop offset="0.325" stopColor="#6344F5" />
          <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  )
}

export const SnakeBeam = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Snake Line 1 - Horizontal */}
      <motion.div
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        style={{
          width: '100px',
          top: '20%',
          left: '10%'
        }}
        animate={{
          x: [0, 'calc(100vw - 200px)', 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2
        }}
      />
      
      {/* Snake Line 2 - Vertical */}
      <motion.div
        className="absolute w-0.5 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
        style={{
          height: '100px',
          top: '30%',
          left: '30%'
        }}
        animate={{
          y: [0, 'calc(100vh - 200px)', 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 3,
          delay: 1
        }}
      />
      
      {/* Snake Line 3 - Diagonal */}
      <motion.div
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        style={{
          width: '150px',
          top: '60%',
          left: '20%',
          transform: 'rotate(45deg)'
        }}
        animate={{
          x: [0, 'calc(100vw - 300px)', 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 4,
          delay: 2
        }}
      />
      
      {/* Snake Line 4 - Curved Path */}
      <motion.div
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
        style={{
          width: '120px',
          top: '80%',
          left: '60%'
        }}
        animate={{
          x: [0, '-calc(100vw - 200px)', 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
          delay: 3
        }}
      />
      
      {/* Snake Line 5 - Center Cross */}
      <motion.div
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
        style={{
          width: '200px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 3,
          delay: 4
        }}
      />
      
      {/* Snake Line 6 - Rotating Line */}
      <motion.div
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        style={{
          width: '80px',
          top: '40%',
          left: '70%'
        }}
        animate={{
          rotate: [0, 360],
          x: [0, 'calc(100vw - 300px)', 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
          delay: 5
        }}
      />
    </div>
  )
} 