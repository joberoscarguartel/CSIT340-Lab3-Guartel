import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, and systems analysis."
        />
        <TimelineItem
          period="2026"
          title="Capstone Project Technical Assistant"
          place="Senior High School Research Support"
          description="Assisted Senior High School students with their research capstone projects by developing their application, providing technical support for hardware components, and helping integrate the software and hardware of their project."
        />
        <TimelineItem
          period="2026"
          title="Attendance Management System Group Project"
          place="CSIT228"
          description="Worked with a group to build a desktop attendance application using Java, JavaFX, and MySQL."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
