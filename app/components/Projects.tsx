"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, PenTool, Trophy, Stethoscope, Map, Terminal } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

interface Project {
  title: string
  description: string
  tags?: string[]
  github?: string
  link?: string
}

const projects: Project[] = [
  {
    title: "MultiModal RAG for Video Processing",
    description:
      "A multi-modal solution leveraging LlamaIndex, OpenCLIP, GPT-4V, and LanceDB for deep video content understanding.",
    tags: ["Computer Vision", "NLP", "Python"],
    github: "https://github.com/run-llama/llama_index/pull/10530",
    link: "https://medium.com/llamaindex-blog/multimodal-rag-for-advanced-video-processing-with-llamaindex-lancedb-33be4804822e",
  },
  {
    title: "AlgoTrading",
    description: "Created algorithms from scratch using technical indicators and ML models for robust trading signals.",
    tags: ["Machine Learning", "Finance", "Python"],
    github: "https://github.com/raghavdixit99/AlgoTrading",
    link: "",
  },
  {
    title: "GTE-MLX RAG CLI App",
    description:
      "A CLI application for document-specific querying using RAG architecture with MLX LM and custom GTE model embeddings.",
    tags: ["NLP", "RAG", "Python"],
    github: "https://github.com/raghavdixit99/gte_mlx_rag",
    link: "",
  },
  {
    title: "KnowDisaster",
    description: "Led a team of 3 people to develop a web-app to predict occurrence of floods; notify users & emergency contacts and show nearest relief camp locations, submitted to Microsoft CodeFunDo hackathon.",
    tags: [
      "Microsoft CodeFunDo 2018",
      "Vue.js",
      "MongoDB",
      "Google Maps API",
      "HeatmapJS",
      "AccuWeather API"
    ],
    github: "https://github.com/raghavdixit99/KnowDisaster",
  },
  {
    title: "Allergy Card",
    description: "App that allows first responders to get the details of a user's allergies and details in an accident via an id stored on their NFC card. Android users will be directed to a webpage.",
    tags: [
      "Course Project 2019",
      "Swift",
      "CoreNFC",
      "Firestore",
      "AngularJS"
    ],
    github: "",
  },
  {
    title: "T-Mail",
    description: "Terminal-based messaging system with Git authentication",
    tags: [
      "TCP/IP Course Project 2018",
      "Python",
      "Socket Programming",
      "Git OAuth",
      "CLI"
    ],
    github: "",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isMediumArticle = project.link?.includes("medium.com")
            const isGithub = project.github?.includes("github.com")
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags && (
                    project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  {project.github && isGithub && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {isMediumArticle ? <PenTool className="w-6 h-6" /> : <ExternalLink className="w-6 h-6" />}
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

