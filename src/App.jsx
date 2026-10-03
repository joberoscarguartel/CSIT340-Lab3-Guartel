import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutSection from './components/AboutSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
