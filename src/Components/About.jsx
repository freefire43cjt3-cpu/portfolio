import { motion } from "framer-motion";
import "./About.css";

const PROFILE_IMG = "/images/Ray.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: "easeOut",
    },
  }),
};

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* PHOTO */}
        <motion.div
          className="about-photo"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {PROFILE_IMG ? (
            <img src={PROFILE_IMG} alt="Raymond Charles" />
          ) : (
            <div className="about-photo-placeholder">
              <span>Your photo here</span>
            </div>
          )}
        </motion.div>

        {/* TEXT */}
        <div className="about-text">
          <motion.h2
            className="about-title"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="about-hi">Hi, I'm</span>
            <span className="about-name">Raymond Charles</span>
          </motion.h2>

          <motion.p
            className="about-bio"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            As a frontend web developer, I focus on building websites that are
            not only functional, but also deliver a clean, modern and engaging
            digital experience. I work with React.js, JavaScript and Tailwind
            CSS to turn ideas into fast, responsive interfaces for businesses
            and brands.
          </motion.p>
        </div>

      </div>
    </section>
  );
}

export default About;