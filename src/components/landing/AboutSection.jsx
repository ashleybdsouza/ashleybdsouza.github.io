import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import "../../styles/landing.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <p className="intro">
          Hi, I’m Ashley — a Technical Program Manager with a passion for
          technology and a proven track record of delivering complex,
          high-impact projects on time and within budget.
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
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/ashleybdsouza"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
