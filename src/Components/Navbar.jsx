import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <a href="#home" className="logo" onClick={closeMenu}>
        RC
      </a>

      {/* Desktop Links */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Contact */}
      <a href="tel:08136362066" className="nav-contact">
        Let's Talk
      </a>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#certificates" onClick={closeMenu}>Certificates</a>
        <a href ="#contact" onClick={closeMenu}>Contact</a>

        {/* <a href="tel:08136362066" className="mobile-contact">
          📞 08136362066
        </a> */}
      </div>

    </nav>
  );
}

export default Navbar;