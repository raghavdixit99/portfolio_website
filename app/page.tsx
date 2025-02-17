import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import BackgroundAnimation from "./components/BackgroundAnimation"

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen relative overflow-hidden">
      <BackgroundAnimation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}

