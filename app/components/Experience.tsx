"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

// Add these interfaces at the top of the file
interface Experience {
  company: string
  location: string
  period: string
  role: string
  responsibilities: string[]
}

const experiences = [
  {
    company: "entelligence.ai",
    location: "San Francisco, CA, USA",
    period: "Jul 2024 - Present",
    role: "Founding AI Engineer",
    responsibilities: [
      "Architected production-ready multi-agent systems from scratch for features like - codebase chat, automatic documentation updates, AI-driven team insights.",
      "Developed personalized agents with continuous memory/vectorDB data updates.",
      "Created an AI Code Review Bot leveraging Deepseek R1 and LangGraph, beating competitors by +20% critical bug ratio.",
      "Implemented CI/CD pipelines and auto-scaling with custom AWS policies.",
    ],
  },
  {
    company: "LanceDB",
    location: "San Francisco, CA, USA",
    period: "Jan 2024 - Jul 2024",
    role: "AI Engineer",
    responsibilities: [
      "Led integrations with leading open source organizations (LangChain, LlamaIndex, RunWayML, etc.) for model loading and multi-modal data storage.",
      "Optimized distributed training workflows using Modal Labs for on-demand GPUs.",
      "Performed GPU fine-tuning on large language models.",
      "Partnered with HuggingFace and LlamaIndex on advanced RAG tutorials.",
    ],
  },
  {
    company: "Glance, Inmobi",
    location: "Bangalore, India",
    period: "May 2021 - Jul 2023",
    role: "Machine Learning Engineer",
    responsibilities: [
      "Built and maintained large-scale ML pipelines for data processing, model development, and A/B testing serving 250+ million daily active users.",
      "Developed a shipping partner recommendation engine that cut logistics costs by 14%.",
      "Built a GBT Classifier with custom scoring function.",
      "Built a live stream ranking model pipeline and global feature store for Roposo's short-video platform, and developed a tool to generate short-video clips from Glance live streams using LLMs (GPT-3.5) and video models (PySlowFast).",
      "Achieved 3x performance gains by applying adaptive graph contrastive learning to address sparse user data (cold start problem) in deep learning recommendation system.",
    ],
  },
  {
    company: "Hustlezy by Squibble Ventures",
    location: "Noida, India",
    period: "Jul 2020 - Jan 2021",
    role: "Co-Founder",
    responsibilities: [
      "Co-founded an e-commerce startup that achieved ₹5.5Cr+ ($670K+) in revenue, with initial ₹5L ($6K) revenue in first 10 days of launch.",
      "Architected the technical infrastructure including a query-based crawler and web application, while leading marketing and customer acquisition strategies. Continued to help as strategic advisor post-exit.",
    ],
  },
]

// const startupExperience = [
  
// ]

const internships = [
  {
    company: "Glance, Inmobi",
    location: "Bangalore, India",
    period: "Jan 2021 - May 2021",
    role: "Data Science Intern",
    responsibilities: [
      "Created data visualization graphics, translating and aggregating complex big data into comprehensive visual representations. Curated a dashboard that was used in showcasing company performance to key stakeholders and investors (For Ex - Google, Microsoft, Reliance etc.).",
      "Conducted research on video models, completed thesis on Genre Detection using Video Feature extraction. Achieved a +14% accuracy from the set baseline.",
      "Was the only intern in the company to get an early conversion (in 3.5 months) and started working as an FTE before completion of final semester.",
    ],
  },
  {
    company: "XaiPient Inc NJ,USA",
    location: "Princeton, NJ, USA",
    period: "May 2020 - Jul 2020",
    role: "Intern",
    responsibilities: [
      "Created an interactive dashboard using Streamlit and deployed it on the Cloud.",
      "Researched fundamentals of causal inference and its importance in Explainable A.I., wrote a report for the same.",
    ],
  },
  {
    company: "HCLTech",
    location: "Noida",
    period: "May 2018 - Jul 2018",
    role: "Summer Trainee",
    responsibilities: [
      "Researched the fundamentals of core NLP concepts and deep dived into RNNs (Recurrent Neural Networks), wrote a white paper on the same.",
      "Built an ML pipeline for sentiment analysis on a movie review dataset, implemented using a Word2Vec model, Keras and sklearn for model building and data pre-processing.",
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Experience" />
        
        {/* Full-time Experience */}
        <div className="space-y-16 mb-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`job-${index}`} experience={exp} delay={index * 0.2} />
          ))}
        </div>

        {/* Startup Experience
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
            Startup Experience
          </h3>
          <div className="space-y-16">
            {startupExperience.map((exp, index) => (
              <ExperienceCard key={`startup-${index}`} experience={exp} delay={index * 0.2} />
            ))}
          </div>
        </motion.div> */}

        {/* Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
            Internships
          </h3>
          <div className="space-y-16">
            {internships.map((exp, index) => (
              <ExperienceCard key={`internship-${index}`} experience={exp} delay={index * 0.2} />
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

// Update the component prop types
function ExperienceCard({ experience, delay }: { experience: Experience; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 transition-transform duration-300 group-hover:scale-110" />
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">{experience.company}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          {experience.location}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {experience.period}
        </p>
        <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
          <Briefcase className="w-5 h-5 mr-2" />
          {experience.role}
        </p>
        <ul className="list-none space-y-2">
          {experience.responsibilities.map((resp, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

