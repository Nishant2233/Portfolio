"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: React.ComponentType<unknown>
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  // const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth < 768)
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "h-14 px-4" : "h-20 px-0",
        className,
      )}
    >
      <div className={cn(
        "mx-auto flex items-center justify-center gap-3 bg-background/5 border border-border backdrop-blur-lg rounded-full shadow-lg transition-all duration-300",
        scrolled ? "max-w-2xl py-1 px-2" : "max-w-4xl py-3 px-4"
      )}>
        {items.map((item, idx) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          // Shrink and move first and last item on scroll
          const shrinkClass = scrolled && (idx === 0 || idx === items.length - 1)
            ? "scale-90 translate-x-1 transition-all duration-300"
            : "transition-all duration-300"

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
                shrinkClass
              )}
            >
              {idx === 0 ? (
                <span className="flex items-center gap-2">
                  <Icon />
                  <span className="font-bold">{item.name}</span>
                </span>
              ) : (
                <>
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon />
                  </span>
                </>
              )}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}