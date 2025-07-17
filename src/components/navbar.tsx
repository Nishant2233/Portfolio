'use client'

import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/lib/theme-provider'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <a href="#" className="text-xl font-bold md:text-2xl">
          Portfolio
        </a>
        <div className="hidden md:flex items-center justify-center flex-1 gap-6">
          <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('work')} className="hover:text-primary transition-colors">
            Work
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`hidden md:block px-4 py-2 rounded-md font-semibold relative overflow-hidden transition-colors duration-300
              ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}
              animated-skill-border hover:bauhaus-hover-border
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
            `}
            style={{ minWidth: '110px' }}
          >
            <span className="relative z-10">Contact</span>
            <span
              className="absolute inset-0 pointer-events-none animate-shimmer opacity-30"
              style={{
                background:
                  theme === 'light'
                    ? 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)'
                    : 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
              }}
            />
          </button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur border-b">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'skills', 'projects', 'work', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="block w-full px-3 py-2 text-left rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
