'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@/lib/theme-provider';
import { Github, ArrowUpRight, ThumbsUp } from 'lucide-react';
import { Particles } from '@/components/ui/particles';

const projects = [
  {
    title: 'Restaurant-webapp',
    description: 'A modern web application built with React and Next.js',
    image: '/images/Screenshot 2025-01-13 234450.png',
    technologies: ['html', 'css', 'javascript', 'react', 'nextjs', 'firebase'],
    githubUrl: 'https://github.com/Nishant2233/Restaurant-webapp-React',
    demoUrl: 'https://nishantrathod.netlify.app/',
  },
  {
    title: 'Text2Next',
    description: 'It is an AI-powered tool that transforms text prompts into responsive websites',
    image: '/images/Screenshot 2025-03-21 023329.png',
    technologies: ['nextjs', 'javacript','nodejs', 'tailwind css', 'convex', 'API'],
    githubUrl: 'https://github.com/Nishant2233/text2next',
    demoUrl: 'https://text2next.vercel.app/',
  },
  {
    title: 'Support Genie',
    description: 'Full-stack application with modern architecture and AI integration',
    image: '/images/Screenshot 2024-09-24 190830.jpg',
    technologies: ['react', 'nodejs', 'mongodb', 'express', 'open AI'],
    githubUrl: 'https://github.com/Nishant2233',
    demoUrl: 'https://supportgenie.com',
  },
];

export function Projects() {
  const { theme } = useTheme();
  const [liked, setLiked] = useState<boolean[]>(projects.map(() => false)); // Track liked state for each project

  const toggleLike = (index: number) => {
    setLiked((prev) => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 w-full h-full"
        quantity={80}
        staticity={30}
        ease={50}
        size={0.3}
        color={theme === 'dark' ? '#ffffff' : '#666666'}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Featured Projects</h2>
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
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-2 py-1 border rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'border-primary/10 bg-primary/10 text-primary hover:bg-primary/20'
                          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ height: '40px' }}
                    >
                      <span className="text-sm font-medium">Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-gray-300 rounded-lg hover:border-primary transition-colors"
                      style={{ height: '40px', width: '40px' }}
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
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
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => toggleLike(i)}
                    className={`flex items-center gap-1 transition-all ${
                      liked[i]
                        ? 'font-bold text-primary'
                        : theme === 'dark'
                        ? 'text-primary hover:text-primary/80'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 ${liked[i] ? 'font-bold' : ''}`} />
                    {liked[i] ? 'Liked' : 'Like'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
