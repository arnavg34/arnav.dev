
import Journey from "./Journey";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";


export default function HomePage() {
    return (
      <>
        <section id="hero">
          <Hero />
        </section>
        <section id="skills" style={{ paddingTop: '100px' }}>
          <Skills />
        </section>
        <section id="journey" style={{ paddingTop: '200px' }}>
          <Journey />
        </section>
        <section id="experience" style={{ paddingTop: '100px' }}>
          <Experience />
        </section>
        <section id="projects" style={{ paddingTop: '100px' }}>
          <Projects />
        </section>
      </>
    )
  }