import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <NavLink to="/" style={styles.name}>
          Ashley Dsouza
        </NavLink>
        <div style={styles.subtitle}>Technical Program Manager</div>
      </div>

      <nav style={styles.nav}>
        <NavItem to="/blog" label="Blog" />
        <NavItem to="/projects" label="Projects" />
        <NavItem to="/about" label="About" />
      </nav>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...styles.link,
        ...(isActive ? styles.active : {}),
      })}
    >
      {label}
    </NavLink>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: "2rem",
    borderBottom: "1px solid #eee",
  },
  left: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#111",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "0.9rem",
    color: "#666",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    textDecoration: "none",
    color: "#555",
    fontSize: "0.95rem",
  },
  active: {
    color: "#111",
    fontWeight: 500,
  },
};
