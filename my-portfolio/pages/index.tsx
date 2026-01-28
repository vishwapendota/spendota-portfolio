import Web3Background from "@/components/Web3Background"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-100">
      <Web3Background />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
