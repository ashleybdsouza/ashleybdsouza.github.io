import "./about.css";
import useInView from "../../hooks/useInView";

export default function AboutHero() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`about-section about-hero ${inView ? "in-view" : ""}`}
    >
      <div className="about-inner">
        <p className="eyebrow">About</p>

        <h1>
          Technical Program Manager focused on
          scalable systems, execution excellence,
          and engineering collaboration.
        </h1>

        <p className="hero-copy">
          I specialize in leading cross-functional programs,
          improving developer workflows, scaling operational systems,
          and delivering complex technical initiatives across
          distributed teams.
        </p>
      </div>
    </section>
  );
}