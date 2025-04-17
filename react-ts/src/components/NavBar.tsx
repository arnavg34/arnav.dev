
import "../css/NavBar.css"
import { User, Code, Briefcase, MonitorSmartphone} from "lucide-react";
import { Route as RouteIcon } from "lucide-react";
export default function NavBar() {
    return (
        <div className="nav">
          <div className="a-div">
            <button className="a-button">
                A
            </button>
          </div>
          <button className="nav-button">
            <div className="icon-text">
              <User color="white" size={24} />
              About Me
            </div>
          </button>
          <button className="nav-button">
            <div className="icon-text">
              <RouteIcon color="white" size={24}/>
              My Journey
            </div>
          </button>
          <button className="nav-button">
            <div className="icon-text">
              <Code color="white" size={24}/>
              Skills
            </div>
          </button>
          <button className="nav-button">
            <div className="icon-text">
              <Briefcase color="white" size={24}/>
              Work Experience
            </div>
          </button>
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