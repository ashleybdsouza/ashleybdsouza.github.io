import { useState } from "react";

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
    <div style={s.page}>

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.heroInner}>

          {/* Photo */}
          <div style={s.photoWrap}>
            <div style={s.photoAccent} />
            <div style={s.photoFrame}>
              {/* Replace src with your actual photo path, e.g. src="/images/ashley.jpg" */}
              <img src="/images/ashley-profile.png" alt="Ashley B. D'Souza" style={s.photo} />
            </div>
          </div>

          {/* Bio */}
          <div style={s.bio}>
            <p style={s.eyebrow}>About Me</p>
            <h1 style={s.name}>Ashley B. D'Souza</h1>
            <p style={s.role}>Technical Program Manager</p>
            <p style={s.blurb}>
              I'm a Technical Program Manager with a passion for technology and a proven track
              record of delivering complex, high-impact projects on time and within budget.
              I thrive at the intersection of people, process, and product — translating
              technical complexity into clear strategy and measurable outcomes.
            </p>
            <p style={s.blurb}>
              Whether I'm aligning engineering teams, managing cross-org dependencies, or
              driving delivery on large-scale initiatives, I bring structure, clarity, and
              momentum to everything I work on.
            </p>
            <div style={s.socialRow}>
              {socials.map((social) => (
                <a key={social.label} href={social.href} style={s.socialLink} aria-label={social.label}>
                  <i className={`ti ${social.icon}`} style={s.socialIcon} aria-hidden="true" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={s.rule} />

      {/* Skills */}
      <section style={s.section}>
        <h2 style={s.sectionHeading}>Skills & Expertise</h2>
        <p style={s.sectionSub}>Areas where I create the most impact.</p>

        <div style={s.tabRow}>
          {skills.map((group, i) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(i)}
              style={{ ...s.tab, ...(activeTab === i ? s.tabOn : {}) }}
            >
              {group.category}
            </button>
          ))}
        </div>

        <div style={s.pillGrid}>
          {skills[activeTab].items.map((item) => (
            <div key={item} style={s.pill}>
              <i className="ti ti-circle-check" style={s.pillIcon} aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <div style={s.rule} />

      {/* Education */}
      <section style={s.section}>
        <h2 style={s.sectionHeading}>Education</h2>
        <p style={s.sectionSub}>The foundations I've built on.</p>

        <div style={s.eduList}>
          {education.map((edu, i) => (
            <div key={i} style={s.eduCard}>
              <span style={s.eduYear}>{edu.year}</span>
              <div>
                <p style={s.eduDegree}>{edu.degree}</p>
                <p style={s.eduSchool}>{edu.school}</p>
                <p style={s.eduDetail}>{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

const s = {
  page: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "4rem 2rem",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: "#1a1a1a",
    lineHeight: 1.75,
  },
  hero: { marginBottom: "1rem" },
  heroInner: {
    display: "flex",
    gap: "3rem",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  photoWrap: {
    position: "relative",
    flexShrink: 0,
    width: "190px",
    height: "200px",
  },
  photoAccent: {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "190px",
    height: "190px",
    border: "1px solid #b8a99a",
    borderRadius: "3px",
  },
  photoFrame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "190px",
    height: "190px",
    border: "1px solid #d4cdc3",
    borderRadius: "3px",
    overflow: "hidden",
    background: "#f0ebe4",
  },
  photo: { width: "100%", height: "100%", objectFit: "cover" },
  bio: { flex: 1, minWidth: "260px" },
  eyebrow: {
    fontSize: "11px",
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#8a7968",
    margin: "0 0 0.5rem",
  },
  name: {
    fontSize: "2.25rem",
    fontWeight: "700",
    letterSpacing: "-0.02em",
    margin: "0 0 0.3rem",
    color: "#1a1a1a",
  },
  role: {
    fontSize: "1rem",
    fontStyle: "italic",
    color: "#6b5e50",
    margin: "0 0 1rem",
  },
  blurb: {
    fontSize: "0.975rem",
    color: "#3d3530",
    margin: "0 0 0.85rem",
    maxWidth: "540px",
  },
  socialRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "0.5rem",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "5px 13px",
    border: "1px solid #c8bfb5",
    borderRadius: "2px",
    textDecoration: "none",
    color: "#3d3530",
    fontSize: "13px",
    fontFamily: "'Courier New', monospace",
  },
  socialIcon: { fontSize: "16px" },
  rule: {
    height: "1px",
    background: "linear-gradient(to right, transparent, #c8bfb5, transparent)",
    margin: "2.5rem 0",
  },
  section: { padding: "0.5rem 0 1.5rem" },
  sectionHeading: {
    fontSize: "1.4rem",
    fontWeight: "700",
    letterSpacing: "-0.01em",
    margin: "0 0 0.3rem",
    color: "#1a1a1a",
  },
  sectionSub: {
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "#8a7968",
    margin: "0 0 1.25rem",
  },
  tabRow: { display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1.1rem" },
  tab: {
    padding: "5px 15px",
    border: "1px solid #c8bfb5",
    borderRadius: "2px",
    background: "transparent",
    fontSize: "13px",
    fontFamily: "'Courier New', monospace",
    cursor: "pointer",
    color: "#6b5e50",
  },
  tabOn: {
    background: "#1a1a1a",
    color: "#f5f0ea",
    borderColor: "#1a1a1a",
  },
  pillGrid: { display: "flex", flexWrap: "wrap", gap: "10px" },
  pill: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    padding: "7px 15px",
    background: "#f7f3ef",
    border: "1px solid #d4cdc3",
    borderRadius: "2px",
    fontSize: "14px",
    color: "#3d3530",
    fontFamily: "'Courier New', monospace",
  },
  pillIcon: { fontSize: "15px", color: "#8a7968" },
  eduList: { display: "flex", flexDirection: "column", gap: "1rem" },
  eduCard: {
    display: "flex",
    gap: "2rem",
    padding: "1.1rem 1.25rem",
    border: "1px solid #d4cdc3",
    borderRadius: "2px",
    background: "#faf8f5",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  eduYear: {
    fontSize: "12px",
    fontFamily: "'Courier New', monospace",
    color: "#8a7968",
    whiteSpace: "nowrap",
    paddingTop: "3px",
    minWidth: "90px",
  },
  eduDegree: { fontSize: "0.975rem", fontWeight: "700", margin: "0 0 0.2rem", color: "#1a1a1a" },
  eduSchool: { fontSize: "0.875rem", fontStyle: "italic", color: "#6b5e50", margin: "0 0 0.2rem" },
  eduDetail: { fontSize: "0.85rem", color: "#8a7968", margin: 0 },
};
