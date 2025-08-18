"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HiDownload, HiArrowRight, HiChevronDown } from "react-icons/hi"
import Particles from "@/components/particles"

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      <Particles className="absolute inset-0" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">Hello, I'm</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white">Adarsh A Inamdar</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Computer Science Engineer specializing in
              <span className="typewriter inline-block ml-2 text-primary">
                <span className="typing">AI/ML, Full-Stack Development, Cybersecurity</span>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <a href="#projects" className="inline-flex items-center">
                View Projects <HiArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download className="inline-flex items-center">
                Download Resume <HiDownload className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="animate-bounce flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <HiChevronDown size={20} />
        </a>
      </div>
    </section>
  )
}
