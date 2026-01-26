import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './Header.css';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const location = useLocation();

  useEffect(() => {
      setMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <>
      {/* Overlay */}
      <div
        className={`nav-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      <header className="site-header">
        <div className="header-left">
          <NavLink to="/" className="name" onClick={closeMenu}>
            Ashley Dsouza
          </NavLink>
          <div className="subtitle">Technical Program Manager</div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

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
