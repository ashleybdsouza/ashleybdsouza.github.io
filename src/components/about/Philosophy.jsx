import "./about.css";
import useInView from "../../hooks/useInView";

const principles = [
  {
    title: "Execution is a communication problem",
    description:
      "Most delivery challenges are not caused by lack of effort — they happen because teams lack clarity, alignment, or shared understanding. I focus on reducing ambiguity and creating strong communication systems that help teams execute confidently."
  },
  {
    title: "Systems thinking scales organizations",
    description:
      "I enjoy connecting architecture, operations, process, and human collaboration into cohesive systems. Strong systems reduce friction, improve predictability, and enable organizations to move faster without creating chaos."
  },
  {
    title: "Great TPMs reduce cognitive load",
    description:
      "My role is not to add process for the sake of process. The best program management creates clarity, surfaces risks early, simplifies complexity, and helps engineering teams focus on building."
  },
  {
    title: "Trust is built through consistency",
    description:
      "Reliable execution, transparent communication, and accountability build trust over time. I believe strong relationships across engineering, product, and leadership are foundational to successful delivery."
  }
];

export default function Philosophy() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`about-section philosophy-section ${
        inView ? "in-view" : ""
      }`}
    >
      <div className="about-inner">
        <h2>How I Think About Program Management</h2>

        <p className="philosophy-intro">
          Technical Program Management sits at the intersection of
          technology, execution, communication, and organizational
          alignment. Over the years, I’ve developed a set of
          principles that guide how I approach delivery, leadership,
          and collaboration.
        </p>

        <div className="philosophy-grid">
          {principles.map((item) => (
            <div key={item.title} className="philosophy-card">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}