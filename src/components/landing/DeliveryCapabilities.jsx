import { FaProjectDiagram, FaShieldAlt, FaUsersCog, FaChartLine } from "react-icons/fa";
import "./delivery-capabilities.css";

const capabilities = [
  {
    icon: <FaProjectDiagram />,
    title: "Program Execution at Scale",
    description:
      "Lead complex, multi-team initiatives with clear milestones, risk tracking, and predictable delivery.",
    outcome: "Delivered cross-org programs spanning 100+ engineers"
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Compliance Delivery",
    description:
      "Translate security and compliance requirements into scalable, automated engineering solutions.",
    outcome: "Enforced code review compliance across 8,000+ pipelines"
  },
  {
    icon: <FaUsersCog />,
    title: "Cross-Functional Leadership",
    description:
      "Align engineering, product, finance, and leadership around shared goals and execution plans.",
    outcome: "Drove executive initiatives across Amazon & CrowdStrike"
  },
  {
    icon: <FaChartLine />,
    title: "Metrics-Driven Execution",
    description:
      "Use data and KPIs to surface risks early, measure success, and guide decision-making.",
    outcome: "Reduced funnel abandonment by 62.5%"
  }
];

export default function DeliveryCapabilities() {
  return (
    <section className="capabilities-section">
      <div className="capabilities-inner">
        <h2 className="capabilities-heading">Delivery Capabilities</h2>

        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => (
            <div className="capability-card" key={idx}>
              <div className="capability-icon">{cap.icon}</div>
              <h3>{cap.title}</h3>
              <p className="capability-desc">{cap.description}</p>
              <span className="capability-outcome">{cap.outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
