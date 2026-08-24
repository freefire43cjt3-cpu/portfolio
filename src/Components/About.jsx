import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <span>ABOUT ME</span>
          <h2>Who I Am</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p className="about-intro">
              I'm <strong>Raymond Charles</strong>, a passionate
              frontend developer who enjoys creating modern and
              interactive websites.
            </p>

            <p>
              I love turning ideas into clean, responsive and
              user-friendly experiences. I'm constantly learning
              new technologies and improving my skills as a developer.
            </p>

            <p>
              My goal is to build websites that don't just look good,
              but also feel smooth and enjoyable to use.
            </p>

            <a href="#contact" className="about-button">
              Let's Work Together →
            </a>
          </div>

          <div className="about-card">
            <div className="about-card-icon">{"</>"}</div>

            <h3>Frontend Developer</h3>

            <p>
              React • JavaScript • HTML • CSS
            </p>

            <div className="about-line"></div>

            <span>Always learning. Always building.</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;