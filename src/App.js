import Header from './components/Header.js'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'
import Footer from './components/Footer.js'
import BackgroundAnimation from './components/BackgroundAnimation.js'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <BackgroundAnimation />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

