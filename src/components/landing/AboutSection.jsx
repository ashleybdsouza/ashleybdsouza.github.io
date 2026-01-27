import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import "../../styles/landing.css";
import useInView from "../../hooks/useInView";


export default function AboutSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`section about-section ${inView ? "in-view" : ""}`}
    >      <div className="section-inner">
        <div className="about-inner">
        <h1 className="about-heading">
          Hi, I’m Ashley
        </h1>

        <p className="about-intro">
          I’m a Technical Program Manager with a passion for technology and a
          proven track record of delivering complex, high-impact projects on
          time and within budget.
        </p>

        <div className="about-actions">
          <Link to="/about" className="about-button">
            About Me
          </Link>

          <a
            href="https://github.com/ashleybdsouza"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ashleybdsouza"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
