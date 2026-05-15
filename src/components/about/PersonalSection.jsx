import "./about.css";
import useInView from "../../hooks/useInView";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function PersonalSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`about-section personal-section ${
        inView ? "in-view" : ""
      }`}
    >
      <div className="about-inner personal-inner">
        <div className="personal-copy">
          <h2>Beyond Work</h2>

          <p>
            Outside of program management, I enjoy learning and
            building. Recently, I’ve been revisiting frontend
            development through React and modern web technologies,
            combining technical curiosity with design and user
            experience.
          </p>

          <p>
            I also write about technical program management,
            execution strategy, systems thinking, and organizational
            delivery — translating lessons from large-scale programs
            into practical ideas for engineers and TPMs.
          </p>

          <p>
            Beyond technology, I enjoy long walks, coffee shops,
            photography, and exploring how thoughtful systems —
            both technical and human — shape the way teams operate.
          </p>

          <div className="personal-links">
            <a
              href="https://github.com/ashleybdsouza"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <div className="personal-quote">
          <blockquote>
            “Great delivery happens when clarity, systems, and people
            work together.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}