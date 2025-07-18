'use client'

import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"
import { GridBeam } from "@/components/ui/background-grid-beam"
// import { ShimmerButton } from "@/components/ui/shimmer-button"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center text-center py-32 relative overflow-hidden"
    >
      {/* GridBeam Background */}
      <GridBeam className="absolute inset-0 w-full h-full">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border-2 border-primary/10 mx-auto"
          >
            <Image
              src="https://images.aiscribbles.com/b50d9dc9dcb245879e5383c2106029b0.png?v=54998e"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-2 text-2xl font-medium"
          >
            Hi! I&#39;m Nishant Rathod <span className="inline-block animate-wave">👋</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-white bg-clip-text text-transparent"
          >
            Full-stack web developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-8 max-w-[600px] text-muted-foreground text-lg"
          >
            Passionate about crafting seamless digital experiences. <br />
            I have hands-on experience in freelance projects and a strong foundation in web development technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="min-w-[150px]"
              onClick={() => scrollToSection('projects')}
            >
              view project
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="min-w-[150px] w-full"
            >
              <a
                href="https://drive.google.com/file/d/1ybZQtJStsQeiw13lN6Nf5hsFJlb45Fo-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                my resume
              </a>
            </Button>
          </motion.div>
        </div>
      </GridBeam>
    </section>
  )
}
