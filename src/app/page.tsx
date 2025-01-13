// pages/Home.tsx
'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/lib/theme-provider'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Work } from '@/components/work'
import { Projects } from '@/components/projects' // Correct casing

import { Github } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const { theme } = useTheme()
  const [showPopup, setShowPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowPopup(true)

    // Clear the form data
    setFormData({
      name: '',
      email: '',
      message: '',
    })

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects /> {/* Add Projects component here */}
        <Work />
        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
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
      {/* Popup */}
      {showPopup && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          Thanks, your message has been sent!
        </div>
      )}
    </div>
  )
}
