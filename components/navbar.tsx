"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="#home" className="text-xl font-bold text-black dark:text-white">
              Adarsh A Inamdar
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-black dark:text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="text-black dark:text-white"
              >
                {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="ghost" size="icon" asChild aria-label="GitHub" className="text-black dark:text-white">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn" className="text-black dark:text-white">
                <a href="https://linkedin.com/in/adarshainamdar" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-black dark:text-white"
            >
              {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="text-black dark:text-white"
            >
              {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-black dark:text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-2 px-3 py-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-black dark:text-white hover:text-primary transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/adarshainamdar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-black dark:text-white hover:text-primary transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:eradarshainamdar@gmail.com"
                aria-label="Email"
                className="text-black dark:text-white hover:text-primary transition-colors"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
