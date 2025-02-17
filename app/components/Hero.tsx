"use client"

import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, ArrowDown } from "lucide-react"
import ProfileImage from "./ProfileImage"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="flex flex-col items-center justify-center">
          <ProfileImage />
          <motion.h1
            className="
              text-6xl md:text-7xl lg:text-8xl 
              font-bold 
              mt-2 mb-4
              text-center 
              leading-[1.3]
              tracking-tight 
              pt-4 pb-2
              bg-clip-text 
              text-transparent 
              bg-gradient-to-r 
              from-blue-600 to-purple-600 
              dark:from-blue-400 dark:to-purple-400
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Raghav Dixit
          </motion.h1>
          {/* Subtitle */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Full-Stack ML Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experienced in deploying large-scale AI solutions with expertise in machine learning, deep learning, and
            end-to-end workflows.
          </motion.p>

          {/* Social links */}
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://github.com/raghavdixit99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              aria-label="GitHub Profile"
            >
              <GitHub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/raghav-dixit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:dixitraghav99@gmail.com"
              className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </motion.div>

          {/* Scroll down button */}
          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

