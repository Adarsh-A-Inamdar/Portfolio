"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import Image from "next/image"

const projects = [
  {
    title: "Metaheuristic-Optimized Deep Learning for Leukemia Classification",
    description:
      "Built a metaheuristic-optimized model for leukemia classification, improving accuracy and efficiency in healthcare diagnostics.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "TensorFlow", "Keras", "Metaheuristic Algorithms"],
    github: "#",
    demo: "#",
  },
  {
    title: "Library Management System",
    description:
      "This is a LMS where the books are sorted by author and also by the type. It also has the capability to borrow, pay fines and buy books.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Node.js", "Express.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "OmniAI Platform",
    description:
      "Comprehensive AI/ML platform integrating NLP, computer vision, predictive analytics, and reinforcement learning for various applications.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Python", "TensorFlow", "PyTorch", "Kafka"],
    github: "#",
    demo: "#",
  },
  {
    title: "DSA Handbook",
    description:
      "A comprehensive 20-chapter Data Structures and Algorithms guide for students and professionals with practical examples and interview strategies.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "Algorithms", "Data Structures", "Education"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project VAYU-X",
    description:
      "Conceptual design of a 5th Generation Fighter Jet with advanced stealth, AI-driven mission adaptability, and hybrid propulsion.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["MATLAB", "Simulink", "CAD", "Aerospace"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Here are some of the key projects I've worked on, showcasing my skills in AI/ML, software development, and
            creative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg?height=300&width=600"}
                      alt={project.title || "Project"}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-black dark:text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags &&
                        project.tags
                          .filter((tag) => tag.trim() !== "")
                          .map((tag) => (
                            <Badge key={`${tag}-${index}`} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          <FaGithub className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          <FaExternalLinkAlt className="mr-2 h-4 w-4" /> View Project
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-black dark:text-white">No projects to display</p>
          )}
        </div>
      </div>
    </section>
  )
}
