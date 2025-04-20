import experienceData from "../assets/utils/experience"
import "../css/Experience.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Experience(){
    useEffect(() => {
        AOS.init({
          duration: 800, 
          once: false,   
        })
      }, [])
      return (
        <section id="experience" className="experience-section" data-aos="fade-up">
          <h2 className="experience-header">Work Experience</h2>
    
          {experienceData.map((item, index) => (
            <div
              className={"experience-block left"}
              key={index}
            >
    
              <div className="experience-text-wrapper" >
                <div className="experience-header-row">
                <h3 className="experience-title">{item.title}</h3>
                  <span className="experience-date">{item.date}</span>
                </div>
                <p className="experience-location">{item.location}</p>
                {item.description.map((bulletPoint, index) => (
                <ul className="experience-description" key={index}>{bulletPoint}</ul>
                ))}
              </div>
            </div>
          ))}
        </section>
      )
}