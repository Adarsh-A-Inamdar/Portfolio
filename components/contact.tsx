"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaSpinner,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my
            contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-black dark:text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaEnvelope className="h-5 w-5 mr-4 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">Email</h4>
                      <a
                        href="mailto:your.email@example.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        eradarshainamdar@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="h-5 w-5 mr-4 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">+91 8073599968</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="h-5 w-5 mr-4 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Davangere, Karnataka, India</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-10 mb-6 text-black dark:text-white">Connect With Me</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/Adarsh-A-Inamdar"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-black dark:text-white hover:text-primary transition-colors"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://linkedin.com/in/adarshainamdar"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-black dark:text-white hover:text-primary transition-colors"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                  </Button>
                
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="mailto:eradarshainamdar@gmail.com"
                      aria-label="Email"
                      className="text-black dark:text-white hover:text-primary transition-colors"
                    >
                      <FaEnvelope className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        required
                        disabled={isSubmitting}
                        className="bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can I help you?"
                        required
                        disabled={isSubmitting}
                        className="bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="inline-flex items-center">
                          <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="inline-flex items-center">
                          <FaPaperPlane className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <FaEnvelope className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Message Sent!</h3>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
