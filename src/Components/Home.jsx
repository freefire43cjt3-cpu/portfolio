import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  const phone = "2348136362066";

  return (
    <section className="home" id="home">

      {/* BACKGROUND */}
      <div className="home-grid"></div>
      <div className="home-orb home-orb-one"></div>
      <div className="home-orb home-orb-two"></div>

      {/* LEFT CONTENT */}
      <motion.div
        className="home-content"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >

        <div className="home-intro">
          <span className="intro-line"></span>
          <span>WEB DEVELOPER</span>
        </div>

        <h1>
          Building
          <br />

          <span>
            Digital
          </span>

          <br />

          Experiences.
        </h1>

        <p className="home-description">
          Hi, I'm Raymond. I build modern, responsive
          websites for businesses and turn ideas into
          clean and engaging digital experiences.
        </p>

        <div className="home-buttons">

          <a
            href="#projects"
            className="primary-btn"
          >
            View My Work
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

        <div className="home-bottom">

          <span>
            Based in Nigeria
          </span>

          <span className="home-dot"></span>

          <span>
            Available for projects
          </span>

        </div>

      </motion.div>


      {/* RIGHT VISUAL */}
      <motion.div
        className="home-visual"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
      >

        <div className="visual-ring visual-ring-one"></div>

        <div className="visual-ring visual-ring-two"></div>

        <div className="developer-card">

          <div className="card-top">

            <span className="card-status">
              <span></span>
              AVAILABLE
            </span>

            <span className="card-number">
              01
            </span>

          </div>

          <div className="developer-symbol">
            &lt;
            <span>/</span>
            &gt;
          </div>

          <h3>
            Creative
            <br />
            <span>Developer</span>
          </h3>

          <p>
            React · JavaScript · CSS
          </p>

        </div>

        <div className="floating-tag">
          <span>✦</span>
          Let's build something
        </div>

      </motion.div>

    </section>
  );
}

export default Home;