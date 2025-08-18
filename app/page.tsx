import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Research from "@/components/research"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Research />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
