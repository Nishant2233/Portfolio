"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"

const navItems = ["Home", "Skills", "Projects", "Work"];

export function SaasNavbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Glassy style classes
  const glass =
    "bg-background/80 backdrop-blur-md border border-border shadow-lg transition-all duration-300";

  // Scroll to section
  const scrollToSection = (name: string) => {
    const id = name.toLowerCase();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Increased space above navbar for better appearance */}
      <div className="h-6 md:h-8" />
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-start">
        <div
          className={cn(
            glass,
            "flex w-full max-w-5xl mx-auto items-center justify-between gap-4 px-6 pointer-events-auto",
            scrolled
              ? "h-14 mt-2 rounded-2xl py-1"
              : "h-20 mt-0 rounded-3xl py-3"
          )}
          style={{ transition: 'max-width 0.3s cubic-bezier(0.4,0,0.2,1)' }}
        >
          {/* Left: Brand (clickable) */}
          <Link
            href="/"
            className={cn(
              "font-bold text-xl text-primary select-none transition-all duration-300",
              scrolled ? "text-base" : "text-xl"
            )}
            style={{ outline: "none" }}
          >
            Portfolio
          </Link>

          {/* Center: Nav Items (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item;
              return (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    scrollToSection(item);
                  }}
                  className={cn(
                    "relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 flex flex-col items-center justify-center",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted/50 hover:text-foreground"
                  )}
                  style={{ outline: "none" }}
                >
                  <span className="relative z-10">{item}</span>
                  {isActive && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-1 w-8 h-0.5 rounded-full bg-blue-500 z-10" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Contact + Theme Toggle (Contact hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              size={scrolled ? "sm" : "default"}
              className={cn(
                "font-medium px-4 py-2 rounded-xl transition-all duration-300 border",
                theme === 'dark'
                  ? 'bg-white text-black border-white hover:bg-gray-200'
                  : 'bg-black text-white border-black hover:bg-gray-900',
                scrolled ? "text-xs px-3 py-1" : "text-sm px-4 py-2"
              )}
              onClick={() => scrollToSection("Contact")}
            >
              Contact
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-xl transition-all duration-300",
                scrolled ? "w-8 h-8" : "w-10 h-10"
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile: Hamburger + Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-xl transition-all duration-300",
                scrolled ? "w-8 h-8" : "w-10 h-10"
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden fixed top-20 left-0 w-full bg-background/95 border-b z-40 shadow-lg animate-fade-in">
            <div className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    scrollToSection(item);
                    setMenuOpen(false);
                  }}
                  className={cn(
                    "w-full text-center px-4 py-2 rounded-xl font-medium text-base transition-all duration-200",
                    activeTab === item
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  {item}
                </button>
              ))}
              <Button
                className={cn(
                  "w-full font-medium px-4 py-2 rounded-xl border",
                  theme === 'dark'
                    ? 'bg-white text-black border-white hover:bg-gray-200'
                    : 'bg-black text-white border-black hover:bg-gray-900'
                )}
                onClick={() => {
                  scrollToSection("Contact");
                  setMenuOpen(false);
                }}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
} 