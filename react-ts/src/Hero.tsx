import "./css/Hero.css"
import arnav from "./assets/arnav.jpg"
export default function Hero(){
 return (
    <div className="outer">
        <div className="about">
            <p>Hi, I’m Arnav Gupta, a Computer Engineering student at Michigan State University.</p>
            <p>I love building full-stack apps, solving complex problems, and helping ideas come to life through code.</p>
            <button>Check out my work ↓</button>
        </div>
        <div className="photo">
            <img src={arnav} alt="arnav" width="400px"/>
        </div>
    </div>
 )
}