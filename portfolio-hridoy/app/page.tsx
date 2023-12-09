
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Introduction from '@/components/introduction'
import Projects from '@/components/projects'
import SectionDivider from '@/components/sectionDivider'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction/>
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>
    </main>
  )
}
