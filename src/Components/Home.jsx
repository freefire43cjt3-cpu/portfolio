import "./Home.css";

function Home() {
  const phone = "2348136362066";

  return (
    <section className="home" id="home">
      <div className="home-content">

        <div className="home-badge">
          <span></span>
          Available for opportunities
        </div>

        <p className="home-greeting">
          Hello, I'm
        </p>

        <h1>
          Raymond <span>Charles</span>
        </h1>

        <h2>
          Frontend <span>Developer.</span>
        </h2>

        <p className="home-description">
          I create modern, responsive and interactive
          websites using React and modern web technologies.
          I turn ideas into clean digital experiences.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
            <span>↗</span>
          </a>

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            Let's Talk
            <span>↗</span>
          </a>
        </div>

        <div className="home-social">
          <p>Connect with me on</p>

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

      </div>

      <div className="home-visual">
        <div className="glow"></div>

        <div className="code-card">
          <span className="code-symbol">&lt;/&gt;</span>

          <div>
            <p>Building</p>
            <strong>Digital Experiences</strong>
          </div>
        </div>

        <div className="floating-circle"></div>
      </div>
    </section>
  );
}

export default Home;