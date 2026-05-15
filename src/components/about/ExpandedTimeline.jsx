import "./about.css";
import useInView from "../../hooks/useInView";
import { useState } from "react";

const timeline = [
  {
    company: "CrowdStrike",
    role: "Technical Program Manager",
    period: "2023 — Present",
    summary:
      "Leading strategic cross-functional initiatives focused on portfolio execution, operational alignment, and developer productivity across globally distributed engineering teams.",
    wins: [
      "Improved quarterly planning and execution alignment",
      "Drove SDLC operational consistency initiatives",
      "Led cross-functional TPM coordination across engineering organizations",
      "Partnered with finance on capitalization and tooling improvements"
    ],
    metrics: [
      "Global engineering coordination",
      "Executive-level initiatives",
      "Operational governance"
    ]
  },
  {
    company: "Amazon / AWS",
    role: "Senior Technical Program Manager",
    period: "2017 — 2023",
    summary:
      "Managed large-scale technical programs spanning compliance automation, payments, onboarding systems, operational scalability, and customer-facing platform initiatives.",
    wins: [
      "Scaled compliance enforcement across 8,000+ pipelines",
      "Reduced PLCC application abandonment by 62.5%",
      "Launched QR code payments for Whole Foods private label cards",
      "Coordinated architecture and execution across multiple engineering organizations"
    ],
    metrics: [
      "8,000+ pipelines",
      "400+ teams",
      "160+ services",
      "28% approval increase"
    ]
  },
  {
    company: "AWS Compliance Initiative",
    role: "Program Lead",
    period: "Key Initiative",
    summary:
      "Designed and implemented a scalable automated enforcement system ensuring production pipelines complied with code review policies across AWS engineering organizations.",
    wins: [
      "Built automated classification and enforcement architecture",
      "Reduced manual compliance overhead significantly",
      "Enabled real-time operational visibility",
      "Improved audit readiness and governance posture"
    ],
    metrics: [
      "100% automated coverage",
      "Real-time visibility",
      "Large-scale governance"
    ]
  },
  {
    company: "Whole Foods Market",
    role: "Payments Platform TPM",
    period: "Key Initiative",
    summary:
      "Led the launch of QR-based payments for private label credit cards to enable seamless in-store transactions through mobile experiences.",
    wins: [
      "Integrated payment gateway and issuer systems",
      "Enabled physical retail payment support",
      "Reduced declined transaction scenarios",
      "Improved customer adoption of PLCC products"
    ],
    metrics: [
      "Mobile-first payments",
      "Cross-platform integration",
      "Retail scale"
    ]
  },
  {
    company: "Consulting & Early Career",
    role: "Engineering / Delivery Consultant",
    period: "2012 — 2017",
    summary:
      "Worked across enterprise technology consulting engagements spanning delivery management, software engineering, stakeholder coordination, and systems implementation.",
    wins: [
      "Delivered enterprise client implementations",
      "Built technical and delivery foundations",
      "Collaborated across engineering and business teams",
      "Developed early systems thinking and execution practices"
    ],
    metrics: [
      "Enterprise delivery",
      "Cross-functional execution",
      "Technical foundations"
    ]
  }
];

export default function ExpandedTimeline() {
  const [ref, inView] = useInView();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      ref={ref}
      className={`about-section expanded-timeline ${
        inView ? "in-view" : ""
      }`}
    >
      <div className="about-inner">
        <h2>Experience & Impact</h2>

        <div className="timeline-list">
          {timeline.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.company}
                className={`timeline-card ${isOpen ? "open" : ""}`}
              >
                <button
                  className="timeline-header"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <div>
                    <div className="timeline-role">
                      {item.role}
                    </div>

                    <h3>{item.company}</h3>

                    <div className="timeline-period">
                      {item.period}
                    </div>
                  </div>

                  <div className="timeline-toggle">
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                <div className="timeline-summary">
                  {item.summary}
                </div>

                <div className="metrics-row">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="metric-chip"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {isOpen && (
                  <div className="timeline-details">
                    <h4>Key Wins</h4>

                    <ul>
                      {item.wins.map((win) => (
                        <li key={win}>{win}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}