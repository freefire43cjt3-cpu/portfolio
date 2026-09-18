import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
      >
        <span>R</span>C
      </a>

      {/* DESKTOP NAVIGATION */}
      <div className="nav-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#certificates">
          Certificates
        </a>

        <a href="#contact">Contact</a>

      </div>

      {/* LET'S TALK */}
      <a
        href="#contact"
        className="nav-contact"
        onClick={closeMenu}
      >
        <span>Let's Talk</span>
        <span className="nav-arrow">↗</span>
      </a>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className={`hamburger ${
          menuOpen ? "active" : ""
        }`}
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a
          href="#certificates"
          onClick={closeMenu}
        >
          Certificates
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-contact"
          onClick={closeMenu}
        >
          Let's Talk
          <span>↗</span>
        </a>
      </div>

    </nav>
  );
}

export default Navbar;