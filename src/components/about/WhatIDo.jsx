import "./about.css";
import useInView from "../../hooks/useInView";

const capabilities = [
  {
    title: "Program Leadership",
    description:
      "Driving large-scale technical initiatives from planning through execution."
  },
  {
    title: "Systems Thinking",
    description:
      "Connecting architecture, dependencies, operations, and delivery outcomes."
  },
  {
    title: "Developer Experience",
    description:
      "Improving workflows, tooling, and operational efficiency for engineering teams."
  },
  {
    title: "Risk Management",
    description:
      "Identifying execution risk early and building scalable mitigation strategies."
  },
  {
    title: "Cross-functional Delivery",
    description:
      "Aligning engineering, product, finance, security, and operations."
  },
  {
    title: "Execution Excellence",
    description:
      "Creating clarity, accountability, and predictable delivery at scale."
  }
];

export default function WhatIDo() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`about-section ${inView ? "in-view" : ""}`}
    >
      <div className="about-inner">
        <h2>What I Do</h2>

        <div className="capabilities-grid">
          {capabilities.map((item) => (
            <div key={item.title} className="capability-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}