"use client"

import { motion, AnimatePresence } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { 
  Brain, 
  Code2, 
  Database, 
  Cloud, 
  Github, 
  Languages, 
  Settings, 
  BarChart2,
  LineChart,
  Kanban
} from "lucide-react"

interface SkillSubcategory {
  category: string
  items: string[]
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  subtitle: string
  skills: string[] | SkillSubcategory[]
  order?: number
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI/ML",
    order: 1,
    icon: <Brain className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    subtitle: "Expertise in traditional ML, deep learning, NLP, and reinforcement learning.",
    skills: [
      {
        category: "Machine Learning",
        items: [
          "Linear/Non-linear Regression",
          "Sampling(Bootstrap, Cross-Validation, Regularization)",
          "Dimensionality Reduction(PCA, t-SNE, UMAP)",
          "Decision Trees(XGBoost, Random Forest, Gradient Boosting etc.)",
          "Bayesian Networks",
          "Clustering(KMeans, Hierarchical, DBSCAN etc.)",
          "Reinforcement Learning(MDP, PPO/MAPPO)"
        ]
      },
      {
        category: "Deep Learning",
        items: [
          "CNNs",
          "Transformers",
          "GANs",
          "Multimodal Systems",
          "LLM Finetuning (PEFT/SFT/QLoRa etc.)",
          "Advanced RAG",
          "Diffusion Models"
        ]
      },
      {
        category: "Graph Models",
        items: [
          "GNNs",
          "Node2Vec",
          "GraphSAGE",
          "GraphRAG"
        ]
      },
    ]
  },
  {
    title: "MLOps",
    order: 2,
    icon: <Settings className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
    subtitle: "Implementing best practices for machine learning operations and model lifecycle management.",
    skills: ["MLflow", "DVC", "Model Monitoring", "Pipeline Automation"]
  },
  {
    title: "Programming Languages",
    order: 3,
    icon: <Languages className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />,
    subtitle: "Proficiency in multiple programming languages for diverse project requirements.",
    skills: ["Python", "C++", "JavaScript/TypeScript", "Rust", "R"]
  },
  {
    title: "Full-Stack Development",
    order: 4,
    icon: <Code2 className="w-6 h-6 text-green-500 dark:text-green-400" />,
    subtitle: "Building robust and scalable web applications with modern frameworks.",
    skills: ["Python", "JavaScript", "React", "Django", "Node.js", "Next.js"]
  },
  {
    title: "Data Systems",
    order: 5,
    icon: <Database className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    subtitle: "Managing and optimizing various database systems for efficient data storage and retrieval.",
    skills: ["SQL", "NoSQL", "Vector DBs", "MySQL", "PostgreSQL", "MongoDB", "Redis", "LanceDB", "Pinecone"]
  },
  {
    title: "Cloud & DevOps",
    order: 6,
    icon: <Cloud className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
    subtitle: "Deploying and managing scalable infrastructure and CI/CD pipelines.",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "MLflow", "DVC"]
  },
  {
    title: "Big Data Processing",
    order: 7,
    icon: <BarChart2 className="w-6 h-6 text-red-500 dark:text-red-400" />,
    subtitle: "Handling and processing large-scale datasets efficiently.",
    skills: ["PySpark", "Kafka", "Airflow", "Dask"]
  },
  {
    title: "Version Control",
    order: 8,
    icon: <Github className="w-6 h-6 text-orange-500 dark:text-orange-400" />,
    subtitle: "Efficient code management and collaboration using version control systems.",
    skills: ["Git", "GitHub", "GitLab"]
  },
  {
    title: "Data Visualization",
    order: 9,
    icon: <LineChart className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
    subtitle: "Creating interactive and insightful data visualizations for complex datasets.",
    skills: ["Plotly", "Superset", "Streamlit/Gradio", "Tableau", "PowerBI"]
  },
  {
    title: "Agile Methodologies",
    order: 10,
    icon: <Kanban className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
    subtitle: "Applying agile practices for efficient project management and delivery.",
    skills: ["Scrum", "Kanban", "Agile", "JIRA", "Confluence"]
  }
]

function isSkillArray(skills: string[] | SkillSubcategory[]): skills is string[] {
  return typeof skills[0] === 'string'
}

// Sort categories by order
const sortedCategories = [...skillCategories].sort((a, b) => (a.order || 0) - (b.order || 0))

// Add this CSS grid style
const gridStyles = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
}

export default function Skills() {
  // Group categories by desired columns
  const column1 = sortedCategories.filter(cat => ["AI/ML"].includes(cat.title))
  const column2 = sortedCategories.filter(cat => ["Programming Languages", "Full-Stack Development", "MLOps"].includes(cat.title))
  const column3 = sortedCategories.filter(cat => ["Cloud & DevOps", "Big Data Processing", "Version Control"].includes(cat.title))
  const column4 = sortedCategories.filter(cat => ["Data Systems", "Data Visualization", "Agile Methodologies"].includes(cat.title))

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className={gridStyles.container}>
        <AnimatedSectionHeader title="Skills" />
        
        <div className={gridStyles.grid}>
          <div className="space-y-4">
            {column1.map((category, idx) => (
              <SkillCard key={category.title} category={category} idx={idx} />
            ))}
          </div>
          <div className="space-y-4">
            {column2.map((category, idx) => (
              <SkillCard key={category.title} category={category} idx={idx} />
            ))}
          </div>
          <div className="space-y-4">
            {column3.map((category, idx) => (
              <SkillCard key={category.title} category={category} idx={idx} />
            ))}
          </div>
          <div className="space-y-4">
            {column4.map((category, idx) => (
              <SkillCard key={category.title} category={category} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Extract the card into a separate component
function SkillCard({ category, idx }: { category: SkillCategory; idx: number }) {
  return (
    <motion.div
      key={category.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-2">
        <motion.div 
          whileHover={{ rotate: 360 }} 
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          {category.icon}
        </motion.div>
        <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
          {category.title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
        {category.subtitle}
      </p>
      <div className="space-y-3">
        {isSkillArray(category.skills) ? (
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-0.5 rounded-full cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        ) : (
          category.skills.map((subcategory) => (
            <div key={subcategory.category}>
              <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
                {subcategory.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {subcategory.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-0.5 rounded-full cursor-pointer"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  )
}

