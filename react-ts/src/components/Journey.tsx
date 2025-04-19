import journeyData from "../assets/utils/journeyData"
import "../css/Journey.css"
export default function Journey() {
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

          <div className="journey-text-wrapper">
            <div className="journey-header-row">
              <h3 className="journey-title">{item.title}</h3>
              <span className="journey-date">{item.date}</span>
            </div>
            <p className="journey-description">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}