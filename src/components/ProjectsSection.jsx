import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="Ongoing"
          title="Wrytz"
          description="A visual workspace for creating, designing, and publishing web apps. Available at wrytz.vercel.app."
          tech="Next.js · React · Vercel"
          link="https://github.com/joberoscarguartel"
        />
        <ProjectCard
          year="2026"
          title="PAMCAS"
          description="An Android app and ESP32 prototype for motorcycle crash detection and emergency response."
          tech="Kotlin · Jetpack Compose · ESP32"
          link="https://github.com/joberoscarguartel/PAMCAS"
        />
        <ProjectCard
          year="2026"
          title="Attendance Management System"
          description="A group desktop project for recording attendance, managing student accounts, and viewing attendance history."
          tech="Java · JavaFX · MySQL"
          link="https://github.com/joberoscarguartel/CSIT228-Capstone"
        />
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My CSIT340 Lab 1 page, introducing my background, interests, and contact details using React."
          tech="React · Tailwind CSS"
          link="https://github.com/joberoscarguartel/CSIT340-LAB1-GUARTEL"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
