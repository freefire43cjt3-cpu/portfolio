import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Ray<span>.</span>
            </a>

            <p>
              Building digital experiences with creativity,
              clean code and purpose.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="footer-links">
            <h4>Explore</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>

          {/* CONNECT */}
          <div className="footer-connect">
            <h4>Let's Connect</h4>

            <a
              href="mailto:charlessamuelraymond@gmail.com"
              className="footer-email"
            >
              charlessamuelraymond@gmail.com
            </a>

            <a
              href="https://x.com/rayghog?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <span>𝕏</span>
              Follow me on X
              <span className="arrow">↗</span>
            </a>
          </div>

        </div>

        {/* LINE */}
        <div className="footer-line"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {year} Ray. All rights reserved.
          </p>

          <p className="footer-made">
            Designed & built with <span>♥</span> and code.
          </p>

          <a href="#home" className="back-top">
            ↑
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;