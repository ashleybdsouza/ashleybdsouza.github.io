import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-left">
        <NavLink to="/" className="name">
          Ashley Dsouza
        </NavLink>
        <div className="subtitle">Technical Program Manager</div>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={menuOpen ? "show" : ""}>
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
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {label}
    </NavLink>
  );
}
