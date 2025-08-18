"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaCode, FaBrain, FaShieldAlt, FaGlobe, FaServer, FaDatabase, FaLayerGroup, FaGitAlt } from "react-icons/fa"

const skills = [
  {
    category: "Programming Languages",
    icon: <FaCode className="h-6 w-6" />,
    items: ["Python", "Java", "JavaScript", "C++", "SQL"],
  },
  {
    category: "AI/ML",
    icon: <FaBrain className="h-6 w-6" />,
    items: ["TensorFlow", "PyTorch", "Keras", "Deep Learning", "Computer Vision"],
  },
  {
    category: "Cybersecurity",
    icon: <FaShieldAlt className="h-6 w-6" />,
    items: ["Secure Development", "Penetration Testing", "Encryption Protocols"],
  },
  {
    category: "Web Development",
    icon: <FaGlobe className="h-6 w-6" />,
    items: ["React", "Node.js", "Express", "HTML/CSS", "Front-end Frameworks"],
  },
  {
    category: "DevOps",
    icon: <FaServer className="h-6 w-6" />,
    items: ["Docker", "Kubernetes", "CI/CD Pipelines", "Cloud Deployment"],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="h-6 w-6" />,
    items: ["SQL", "NoSQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Data Structures & Algorithms",
    icon: <FaLayerGroup className="h-6 w-6" />,
    items: ["Problem-solving", "Algorithmic Optimization", "Efficient Coding"],
  },
  {
    category: "Tools",
    icon: <FaGitAlt className="h-6 w-6" />,
    items: ["Git", "Jenkins", "JIRA", "VS Code", "PyCharm"],
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            I am Adarsh A Inamdar, a driven Computer Science Engineer with a passion for exploring cutting-edge
            technologies in artificial intelligence, full-stack development, cybersecurity, and automation. Currently
            pursuing my B.E. (2022-2026), I am actively involved in research and real-world applications across AI/ML
            and software engineering. I am dedicated to innovation and eager to drive impactful solutions that bridge
            technology and business needs.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-center text-black dark:text-white"
          >
            Academic Background
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                      Bachelor of Engineering (B.E.) in Computer Science
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">2022 - 2026</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="font-medium text-black dark:text-white">Your Institution Name</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Currently pursuing my Bachelor's degree in Computer Science Engineering, I am building a solid
                  foundation in both theoretical concepts and practical applications. I have earned certifications in
                  Python, C, problem-solving, and Google Analytics, all of which equip me to solve real-world problems
                  efficiently.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold mb-8 text-center text-black dark:text-white"
        >
          Skills & Technologies
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 text-primary">{skill.icon}</div>
                    <h4 className="font-semibold text-black dark:text-white">{skill.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
