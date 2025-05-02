import projectData from "../assets/utils/projects"
import "../css/Projects.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-header">Projects</h2>

      <div className="projects-grid">
        {projectData.map((item, index) => (
          <div className="projects-card" key={index} data-aos="fade-up">
            <div className="projects-card-header">
              <h3 className="projects-title">{item.title}</h3>
              <span className="projects-date">{item.date}</span>
            </div>
            <p className="projects-location">{item.description}</p>
            <div className="projects-tech-wrapper">
              {item.technologies.map((tech, index) => (
                <span className="projects-description" key={index}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
