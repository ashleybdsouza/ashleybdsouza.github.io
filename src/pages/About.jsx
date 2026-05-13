import { useState } from "react";
import "../styles/about.css";

const skills = [
  {
    category: "Program Management",
    items: ["Roadmap Planning", "Stakeholder Management", "Risk Mitigation", "OKRs & KPIs", "Executive Reporting", "Cross-functional Alignment"],
  },
  {
    category: "Technical",
    items: ["Agile / Scrum", "JIRA & Confluence", "CI/CD Pipelines", "Cloud Platforms (AWS/GCP)", "API Integrations", "Data Analysis"],
  },
  {
    category: "Leadership",
    items: ["Team Building", "Mentorship", "Change Management", "Vendor Management", "Budget Oversight", "Strategic Planning"],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering",
    school: "University of Mumbai",
    year: "2005 – 2009",
    detail: "Computer Science",
  },
  {
    degree: "Master of Science (M.S)",
    school: "State University of New York at Buffalo",
    year: "2012",
    detail: "Computer Science",
  },
];

const socials = [
  { label: "LinkedIn", icon: "ti-brand-linkedin", href: "https://www.linkedin.com/in/ashleybdsouza/" },
  { label: "GitHub", icon: "ti-brand-github", href: "https://github.com/ashleybdsouza" },
  { label: "Email", icon: "ti-mail", href: "mailto:ashleybdsouza@gmail.com" },
];

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="section about-page no-animate">
      <div className="section-inner">

        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-inner">

            {/* Photo */}
            <div className="about-photo-wrap">
              <div className="about-photo-accent" />
              <div className="about-photo-frame">
                <img src="/images/ashley-profile.png" alt="Ashley B. D'Souza" />
              </div>
            </div>

            {/* Bio */}
            <div className="about-bio">
              <p className="about-eyebrow">About Me</p>
              <h1 className="about-name">Ashley B. D'Souza</h1>
              <p className="about-role">Technical Program Manager</p>
              <p className="about-blurb">
                I'm a Technical Program Manager with a passion for technology and a proven track
                record of delivering complex, high-impact projects on time and within budget.
                I thrive at the intersection of people, process, and product — translating
                technical complexity into clear strategy and measurable outcomes.
              </p>
              <p className="about-blurb">
                Whether I'm aligning engineering teams, managing cross-org dependencies, or
                driving delivery on large-scale initiatives, I bring structure, clarity, and
                momentum to everything I work on.
              </p>
              <div className="about-social-row">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} className="about-social-link" aria-label={social.label}>
                    <i className={`ti ${social.icon}`} aria-hidden="true" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="about-rule" />

        {/* Skills */}
        <section className="about-section">
          <h2 className="about-section-heading">Skills & Expertise</h2>
          <p className="about-section-sub">Areas where I create the most impact.</p>

          <div className="about-tab-row">
            {skills.map((group, i) => (
              <button
                key={group.category}
                onClick={() => setActiveTab(i)}
                className={`about-tab${activeTab === i ? " active" : ""}`}
              >
                {group.category}
              </button>
            ))}
          </div>

          <div className="about-pill-grid">
            {skills[activeTab].items.map((item) => (
              <div key={item} className="about-pill">
                <i className="ti ti-circle-check" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <hr className="about-rule" />

        {/* Education */}
        <section className="about-section">
          <h2 className="about-section-heading">Education</h2>
          <p className="about-section-sub">The foundations I've built on.</p>

          <div className="about-edu-list">
            {education.map((edu, i) => (
              <div key={i} className="about-edu-card">
                <span className="about-edu-year">{edu.year}</span>
                <div>
                  <p className="about-edu-degree">{edu.degree}</p>
                  <p className="about-edu-school">{edu.school}</p>
                  <p className="about-edu-detail">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
