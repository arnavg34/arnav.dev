import "../css/NavBar.css"
import {Code, Briefcase, MonitorSmartphone, Route as RouteIcon} from "lucide-react";
import { Link } from '@tanstack/react-router'
import { scrollToSection } from "../assets/utils/scroll";

export default function NavBar() {
    return (
        <div className="nav">
          <div className="a-div">
            <Link
                to="/"
                onClick={() => scrollToSection('hero')}
              >
              <button className="a-button">
                  A
              </button>
            </Link>
          </div>
          <Link
              to="/skills"
              onClick={() => scrollToSection('skills')}
            >
          <button className="nav-button">
            <div className="icon-text">
              <Code color="white" size={24}/>
              Skills
            </div>
          </button>
          </Link>
            <Link
              to="/journey"
              onClick={() => scrollToSection('journey')}
            >
          <button className="nav-button">
            <div className="icon-text">
              <RouteIcon color="white" size={24}/>
              My Journey
            </div>
          </button>
          </Link>
          <Link
              to="/experience"
              onClick={() => scrollToSection('experience')}
            >
          <button className="nav-button">
            <div className="icon-text">
              <Briefcase color="white" size={24}/>
              Work Experience
            </div>
          </button>
          </Link>
          <button className="nav-button">
            <div className="icon-text">
                <MonitorSmartphone color="white" size={24}/>
                Projects
            </div>
          </button>
          <button className="resume-button"
           onClick={() => window.open("/arnav.pdf", "_blank")}
          >
            <div className="icon-text">
                Resume
            </div>
          </button>
        </div>
      );
}