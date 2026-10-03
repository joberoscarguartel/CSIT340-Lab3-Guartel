import SectionHeading from './SectionHeading.jsx'
import ContactLink from './ContactLink.jsx'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:jbosguartel@gmail.com" text="jbosguartel@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/joberoscarguartel" text="github.com/joberoscarguartel" />
        <ContactLink label="Phone" href="tel:+639629761825" text="09629761825" />
      </ul>
    </section>
  )
}

export default ContactSection
