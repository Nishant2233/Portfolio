"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

const navLinks = [
  { name: "Home", url: "#home" },
  { name: "About", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Resume", url: "#work" },
];

export function ModernNavbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/90 border-b border-border backdrop-blur-lg
        ${scrolled ? "h-14 py-1 px-0" : "h-20 py-3 px-0"}`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${scrolled ? "px-2" : "px-6"}`}>
        {/* Logo/Brand */}
        <span className="font-extrabold text-xl tracking-tight select-none">Portfolio</span>
        {/* Nav Links */}
        <div className="hidden md:flex gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Actions: Contact Button + Theme Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:opacity-90 transition"
          >
            Contact
          </Link>
          <button
            className="ml-2 p-2 rounded-full border border-border bg-background/80 shadow"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
} 