'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/lib/theme-provider'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Work } from '@/components/work'
import { Github, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and Next.js",
    image: "https://sjc.microlink.io/2IowFyv0sfbkDI86zcisEkEB_E4OmsxaFsJv94o16SNxAKkRytdiIOADPJ1L9i3Hmt27QcYeS51kA-gtX_BPtA.jpeg",
    technologies: ["html", "css", "javascript", "react"]
  },
  {
    title: "Project 2",
    description: "E-commerce platform with dynamic features",
    image: "https://sjc.microlink.io/2IowFyv0sfbkDI86zcisEkEB_E4OmsxaFsJv94o16SNxAKkRytdiIOADPJ1L9i3Hmt27QcYeS51kA-gtX_BPtA.jpeg",
    technologies: ["nextjs", "typescript", "tailwind"]
  },
  {
    title: "Project 3",
    description: "Full-stack application with modern architecture",
    image: "https://sjc.microlink.io/2IowFyv0sfbkDI86zcisEkEB_E4OmsxaFsJv94o16SNxAKkRytdiIOADPJ1L9i3Hmt27QcYeS51kA-gtX_BPtA.jpeg",
    technologies: ["react", "nodejs", "mongodb"]
  }
]

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        {/* Projects Section */}
        <section id="projects" className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${
                    theme === 'dark' ? 'bg-[#0d1117]' : 'bg-white'
                  } rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl border ${
                    theme === 'dark' ? 'border-primary/10' : 'border-gray-200'
                  }`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 text-xs rounded-full ${
                            theme === 'dark' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Work />
        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="max-w-xl mx-auto">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full px-4 py-2 rounded-md border bg-card"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 rounded-md border bg-card"
                    placeholder="Your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 rounded-md border bg-card min-h-[150px]"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Nishant Rathod. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
