
import Journey from "./Journey";
import Hero from "./Hero";
import Experience from "./Experience";


export default function HomePage() {
    return (
      <>
        <section id="hero">
          <Hero />
        </section>
        <section id="journey" style={{ paddingTop: '200px' }}>
          <Journey />
        </section>
        <section id="experience" style={{ paddingTop: '100px' }}>
          <Experience />
        </section>
      </>
    )
  }