
import About from "./About";
import Hero from "./Hero";


export default function HomePage() {
    return (
      <>
        <section id="hero">
          <Hero />
        </section>
        <section id="about" style={{ paddingTop: '120px' }}>
          <About />
        </section>
      </>
    )
  }