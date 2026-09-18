import "./Certificates.css";
import { motion } from "framer-motion";

function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="certificates-container">

        {/* HEADER */}
        <motion.div
          className="certificates-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>MY ACHIEVEMENTS</span>

          <h2>
            Certificates & <b>Recognition.</b>
          </h2>

          <p>
            A collection of certifications and milestones that represent
            my growth, dedication, and journey in web development.
          </p>
        </motion.div>

        {/* MAIN CERTIFICATE */}
        <motion.div
          className="certificate-main"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="certificate-image">
            <a
              href="/images/buezetechcertificate.jpeg"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/buezetechcertificate.jpeg"
                alt="BuezeTech Front-End Web Development Certificate"
              />

              <div className="image-overlay">
                View Full Certificate ↗
              </div>
            </a>
          </div>

          <div className="certificate-info">

            <span className="certificate-tag">
              CERTIFICATE OF TRAINING
            </span>

            <h3>
              Front-End
              <span> Web Development.</span>
            </h3>

            <p>
              Successfully completed the 6-week BuezeTech SMS Bootcamp,
              developing practical skills in modern front-end web
              development.
            </p>

            <div className="certificate-details">

              <div>
                <small>ISSUED BY</small>
                <strong>BuezeTech</strong>
              </div>

              <div>
                <small>DATE</small>
                <strong>July 1, 2025</strong>
              </div>

            </div>

            <a
              href="/images/buezetechcertificate.jpeg"
              target="_blank"
              rel="noreferrer"
              className="view-certificate"
            >
              View Certificate
              <span>↗</span>
            </a>

          </div>
        </motion.div>

        {/* ACHIEVEMENTS */}
        <motion.div
          className="achievement-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>MY JOURNEY</span>

          <h3>
            Moments Along The Way.
          </h3>

          <p>
            A few moments from my learning and development journey.
          </p>
        </motion.div>

        <div className="achievement-gallery">

          <motion.a
            href="/images/achievement1.jpeg"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/achievement1.jpeg"
              alt="Web development achievement"
            />
          </motion.a>

          <motion.a
            href="/images/achievement2.jpeg"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="/images/achievement2.jpeg"
              alt="Web development achievement"
            />
          </motion.a>

          <motion.a
            href="/images/achievement3.jpeg"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/images/achievement3.jpeg"
              alt="Web development achievement"
            />
          </motion.a>

        </div>

        {/* PROJECT DEFENSE */}
        <motion.div
          className="defense-video"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="defense-heading">
            <span>PROJECT PRESENTATION</span>

            <h3>
              Project <b>Defense.</b>
            </h3>

            <p>
              A short clip from my project defense presentation.
            </p>
          </div>

          <div className="video-wrapper">
            <video controls>
              <source
                src="/video/defense.mp4"
                type="video/mp4"
              />

              Your browser does not support the video.
            </video>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Certificates;