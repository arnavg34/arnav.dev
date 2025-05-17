import "../css/Skills.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
<section id="skills" className="skills-section">
  <div className="skills-placeholder" data-aos="fade-up">
    <h2>🚧 Skills Section Coming Soon</h2>
    <p>Stay tuned for a breakdown of my tech stack and tools.</p>
  </div>
</section>

  )
}
