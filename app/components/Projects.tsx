"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, PenTool } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const projects = [
  {
    title: "Morphus: Hybrid RL Framework",
    description: "A novel multi-agent framework for dynamic personality adaptation without human intervention. (ongoing)",
    tags: ["Reinforcement Learning", "Multi-Agent Systems", "Python(JAX/PyTorch)", "rust"],
  },
  {
    title: "AlgoTrading",
    description: "Created algorithms from scratch using technical indicators and ML models for robust trading signals.",
    tags: ["Machine Learning", "Finance", "Python"],
    github: "https://github.com/raghavdixit99/AlgoTrading",
    link: "",
  },
  {
    title: "MultiModal RAG for Video Processing",
    description:
      "A multi-modal solution leveraging LlamaIndex, OpenCLIP, GPT-4V, and LanceDB for deep video content understanding.",
    tags: ["Computer Vision", "NLP", "Python"],
    github: "https://github.com/run-llama/llama_index/pull/10530",
    link: "https://medium.com/llamaindex-blog/multimodal-rag-for-advanced-video-processing-with-llamaindex-lancedb-33be4804822e",
  },
  {
    title: "GTE-MLX RAG CLI App",
    description:
      "A CLI application for document-specific querying using RAG architecture with MLX LM and custom GTE model embeddings.",
    tags: ["NLP", "RAG", "Python"],
    github: "https://github.com/raghavdixit99/gte_mlx_rag",
    link: "",
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
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
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

