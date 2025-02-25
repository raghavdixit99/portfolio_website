"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, FileText, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1faB_AGlWZHLryt67FQkOgf0aLQoOm06J/view?usp=sharing",
    icon: <FileText className="w-4 h-4" />,
    external: true
  },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-md shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
              Home
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.icon && <span className="mr-1.5">{item.icon}</span>}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
            <div className="px-4 py-2 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.icon && <span className="mr-1.5">{item.icon}</span>}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

