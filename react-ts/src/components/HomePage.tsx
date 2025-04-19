
import Journey from "./Journey";
import Hero from "./Hero";


export default function HomePage() {
    return (
      <>
        <section id="hero">
          <Hero />
        </section>
        {/* <section id="about" style={{ paddingTop: '200px' }}>
          <About />
        </section> */}
        <section id="journey" style={{ paddingTop: '200px' }}>
          <Journey />
        </section>
      </>
    )
  }