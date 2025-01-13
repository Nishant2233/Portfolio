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
  className={`hidden md:block border px-4 py-2 rounded-md transition-colors 
    ${theme === 'light' ? 'bg-black text-white hover:bg-accent hover:text-accent-foreground' : 'bg-white text-black hover:bg-accent hover:text-accent-foreground'}`}
>
  Contact
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
