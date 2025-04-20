import journeyData from "../assets/utils/journeyData"
import "../css/Journey.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function Journey() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,   
    })
  }, [])
  return (
    <section id="journey" className="journey-section">
      <h2 className="journey-header">My Journey</h2>

      {journeyData.map((item, index) => (
        <div
          className={`journey-block ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="journey-image-wrapper">
            <img src={item.image} alt={item.title} className="journey-image" />
          </div>

          <div className="journey-text-wrapper" data-aos="fade-up">
            <div className="journey-header-row">
              <a href={item.link}>
                <h3 className="journey-title">{item.title}</h3>
              </a>
              <span className="journey-date">{item.date}</span>
            </div>
            <p className="journey-description">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}