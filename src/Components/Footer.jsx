import "./Footer.css";
import { ArrowUpRight, ArrowUp } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>R</span>C
            </a>

            <p>
              Building modern digital experiences with clean code,
              creativity, and purpose.
            </p>

            <a href="#contact" className="footer-cta">
              Let's work together
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* NAVIGATION */}
          <div className="footer-column">
            <h4>Explore</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>

          {/* CONNECT */}
          <div className="footer-column footer-connect">
            <h4>Connect</h4>

            <a href="mailto:charlessamuelraymond@gmail.com">
              Email
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://wa.me/2348136362066"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://x.com/rayghog?s=11"
              target="_blank"
              rel="noopener noreferrer"
            >
              X / Twitter
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* LARGE FOOTER TEXT */}
        <div className="footer-big-text">
          <span>RAYMOND</span>
        </div>

        {/* LINE */}
        <div className="footer-line"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {year} Raymond Charles. All rights reserved.
          </p>

          <p className="footer-location">
            Based in Nigeria · Available for projects
          </p>

          <a href="#home" className="back-top" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;