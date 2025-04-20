import "../css/Hero.css";
import arnav from "../assets/arnav.jpg";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiZebratechnologies } from "react-icons/si";
import NavBar from "./NavBar";
import { Link } from "@tanstack/react-router";
import { scrollToSection } from "../assets/utils/scroll";

export default function Hero() {
   return (
    <>
    <NavBar />
     <div className="outer">
       <div className="about">
         <p className="intro" data-aos="zoom-in">Hi, my name is</p>
         <h1 className="h1-hero" data-aos="zoom-in">Arnav Gupta.</h1>
         <h2 className="h2-hero" data-aos="zoom-in">A Computer Engineering student at Michigan State University.</h2>
         <p className="description" data-aos="zoom-in">
           I love building full-stack apps, solving complex problems, and helping ideas
           come to life through code. Currently, I am a Project Director at the largest software club at MSU, <a
            href="https://www.linkedin.com/company/imaginemsu/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
            >
            Imagine Software.
            </a>
         </p>
         <div className="buttons">
           <div className="socials">
             <button
               className="social-button-github"
               onClick={() => window.open("https://github.com/arnavg34", "_blank")}
               aria-label="GitHub"
             >
               <div className="icon-text">Github <FaGithub /></div>
             </button>
 
             <button
               className="social-button-linkedin"
               onClick={() => window.open("https://www.linkedin.com/in/arnav-gupta3410/", "_blank")}
               aria-label="LinkedIn"
             >
               <div className="icon-text">Linked <FaLinkedin /></div>
             </button>
 
             <button
               className="social-button-gmail"
               onClick={() => window.open("mailto:agupta3410@gmail.com")}
               aria-label="Email Arnav"
             >
               <div className="icon-text">Gmail <SiGmail /></div>
             </button>
           </div>
 
           <div className="about-me">
            <Link
              to="/journey"
              onClick={() => scrollToSection('journey')}
            >
             <button className="check-button">
               <div className="icon-text">Check out my work <FaArrowDown /></div>
             </button>
             </Link>
           </div>
         </div>
       </div>
       <div className="photo" data-aos="zoom-in">
         <img src={arnav} alt="Arnav Gupta headshot" width="600px" />
         <div className="zebra-tagline">
           Software Engineering Intern @{" "}
           <a
             href="https://www.zebra.com/us/en/software.html"
             target="_blank"
             rel="noopener noreferrer"
             className="highlight-link-zebra"
           >
             <span className="icon-text">
               Zebra Technologies <SiZebratechnologies size={50} />
             </span>
           </a>
         </div>
       </div>
     </div>
     </>
   );
}