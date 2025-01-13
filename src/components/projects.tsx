// components/Projects.tsx
'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-provider'
import { Github } from 'lucide-react'

const projects = [
  {
    title: "Restaurant-webapp",
    description: "A modern web application built with React and Next.js",
    image: "/Screenshot 2025-01-13 234450.png",
    technologies: ["html", "css", "javascript", "react", "firebase"],
    githubUrl: "https://github.com/Nishant2233/Restaurant-webapp-React",
  },
  {
    title: "Multilingual ChatApp",
    description: "A chat application with support for multiple languages",
    image: "Screenshot 2025-01-14 002624.png",
    technologies: ["nextjs", "typescript", "tailwind", "firebase", "API"],
    githubUrl: "https://github.com/Nishant2233/MultilingualChat-App",
  },
  {
    title: "Support Genie",
    description: "Full-stack application with modern architecture and AI integration",
    image: "Screenshot 2024-09-24 190830.png",
    technologies: ["react", "nodejs", "mongodb", "express", "open AI"],
    githubUrl: "https://github.com/Nishant2233",
  },
]

export function Projects() {
  const { theme } = useTheme()

  return (
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
                    href={project.githubUrl}
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
  )
}
