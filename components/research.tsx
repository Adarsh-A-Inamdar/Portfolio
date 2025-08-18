"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaFileAlt, FaBook, FaTrophy } from "react-icons/fa"

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="research" className="py-20 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Research & Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            My research interests and achievements in the fields of AI, machine learning, and computer science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <FaFileAlt className="h-8 w-8 text-primary" />
                <CardTitle className="text-black dark:text-white">Research & Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-black dark:text-white">
                      Deep Learning Optimization for Healthcare Applications
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Currently contributing to research papers on deep learning optimization for healthcare
                      applications, focusing on improving diagnostic accuracy and efficiency.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-black dark:text-white">
                      Metaheuristic Optimization of Deep Learning Models
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      My work on the metaheuristic optimization of deep learning models for leukemia classification has
                      been recognized for its innovative approach to combining AI and healthcare.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <FaTrophy className="h-8 w-8 text-primary" />
                <CardTitle className="text-black dark:text-white">Competitions & Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-black dark:text-white">Web Development Excellence Award</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Awarded for excellence in multiple web development competitions, where I demonstrated strong
                      front-end and back-end skills.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-black dark:text-white">Hackathon Participant</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Frequent participant in hackathons and coding contests, showcasing my ability to solve real-world
                      problems under time pressure.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-black dark:text-white">Technical Writing Recognition</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Recognized for contributions to technical blogs and educational content in the fields of AI and
                      software development.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center gap-4">
              <FaBook className="h-8 w-8 text-primary" />
              <CardTitle className="text-black dark:text-white">Blogging & Open-Source Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                I regularly contribute to tech blogs, focusing on topics like AI, machine learning, and software
                development. I also actively participate in open-source projects, collaborating with the community to
                build innovative solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-black dark:text-white">Blog Topics</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Advancements in AI and Machine Learning</li>
                    <li>Software Development Best Practices</li>
                    <li>Cybersecurity Trends and Techniques</li>
                    <li>Data Structures and Algorithms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-black dark:text-white">Open-Source Contributions</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    <li>AI/ML Libraries and Frameworks</li>
                    <li>Developer Tools and Utilities</li>
                    <li>Educational Resources for CS Students</li>
                    <li>Web Development Components</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
