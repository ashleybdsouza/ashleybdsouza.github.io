import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`nav-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      <header>
        <div className="header-left">
          <NavLink to="/" className="name" onClick={closeMenu}>
            Ashley Dsouza
          </NavLink>
          <div className="subtitle">Technical Program Manager</div>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={menuOpen ? "show" : ""}>
          <NavItem to="/blog" label="Blog" closeMenu={closeMenu} />
          <NavItem to="/projects" label="Projects" closeMenu={closeMenu} />
          <NavItem to="/about" label="About" closeMenu={closeMenu} />
        </nav>
      </header>
    </>
  );
}

function NavItem({ to, label, closeMenu }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={closeMenu}  // <-- close menu when a link is clicked
    >
      {label}
    </NavLink>
  );
}
