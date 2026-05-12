import { useEffect, useRef, useState } from "react";
import "../../styles/landing.css";
import useInView from "../../hooks/useInView";


const timeline = [
  {
    period: "Feb 2025 – Present",
    title: "Technical Program Manager",
    company: "Press Ganey Forsta",
    wins: ["Compliance", "Payments", "Security and Identity", "Leadership", "Risk Management"],
    metrics: ["10 cross-functional teams"],
    highlights: [
      "Drove end-to-end execution and strategic direction for core product platforms, defining scope, requirements, and cross-team alignment.",
      "Led complex, cross-functional programs across up to nine domains—from concept through successful launch.",
      "Managed full release lifecycle and program schedules, proactively resolving critical risks, issues, and dependencies.",
      "Established best practices and KPIs to measure program success, optimize resources, and maximize organizational impact.",
      "Simplified complex technical topics into clear, actionable communications for stakeholders and executive leadership."
    ],
  },
  {
    period: "June 2023 – Feb 2025",
    title: "Senior Technical Program Manager",
    company: "CrowdStrike",
    wins: ["Planning", "Stakeholder Management", "Security", "Resource Allocation"],
    metrics: ["35% Satisfication increased", "40+ Engineers allocation", "3 continents"],
    highlights: [
      "Led cross-org delivery of security platform initiatives",
      "Coordinated globally distributed engineering teams",
      "Drove executive-level visibility and risk mitigation",
    ],
  },
  {
    period: "June 2017 – June 2023",
    title: "Technical Program Manager",
    company: "Amazon (AWS / WFM)",
    wins: ["Compliance", "Payments", "Security"],
    metrics: ["8,000+ pipelines", "62.5% drop-off reduction"],
    highlights: [
      "Delivered compliance automation across 8,000+ pipelines",
      "Led PLCC QR-code payment launch for physical stores",
      "Reduced customer acquisition drop-off by 62.5%",
    ],
  },
];

export default function TimelineSection() {
  const itemRefs = useRef([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const [ref, inView] = useInView();
  return (
<section ref={ref} className={`section timeline-section ${inView ? "in-view" : ""}`}>
      <div className="section-inner">
        <div className="timeline-inner">
        <h2 className="timeline-heading">Experience Timeline</h2>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              ref={el => (itemRefs.current[index] = el)}
            >
              <div className="timeline-marker" />

              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">
                  {item.title} · <span>{item.company}</span>
                </h3>
                <div className="timeline-badges">
                  {item.wins?.map((win, i) => (
                    <span key={i} className="badge">
                      {win}
                    </span>
                  ))}
                </div>
                <div className="metrics">
                  {item.metrics?.map((metric, i) => (
                    <span key={i} className="metric-chip">
                      {metric}
                    </span>
                  ))}
                </div>
                <button
                  className="timeline-toggle"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Hide details" : "Show details"}
                </button>

                {expanded && (
                  <ul>
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
