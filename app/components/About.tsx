"use client"

import { motion } from "framer-motion"
import { Brain, Code2, Database, Settings } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a Full-Stack ML Engineer with 3+ years of experience deploying 
                large-scale AI solutions. My expertise spans:
              </p>
              
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Machine learning and deep learning</li>
                <li>NLP and statistical modeling</li>
                <li>Video processing and computer vision</li>
                <li>Reinforcement learning</li>
                <li>Generative AI and LLMs</li>
                <li>MLOps and end-to-end workflows</li>
              </ul>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                I'm passionate about leveraging cutting-edge technologies to solve 
                complex problems and drive innovation in the field of artificial 
                intelligence.
              </p>
            </div>
          </motion.div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              title="AI/ML"
              icon={<Brain className="w-8 h-8 text-blue-500" />}
              description="Deep Learning, NLP, Reinforcement Learning"
            />
            <SkillCard
              title="Full-Stack"
              icon={<Code2 className="w-8 h-8 text-green-500" />}
              description="Python, JavaScript, React, Django"
            />
            <SkillCard
              title="Data Systems"
              icon={<Database className="w-8 h-8 text-purple-500" />}
              description="SQL, NoSQL, Vector DBs"
            />
            <SkillCard
              title="MLOps"
              icon={<Settings className="w-8 h-8 text-yellow-500" />}
              description="AWS, Docker, Kubernetes"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

