import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* HEADER */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>GET IN TOUCH</span>

          <h2>
            Let's <b>Connect.</b>
          </h2>

          <p>
            Have a project in mind or need a website for your business?
            Send me a message and let's talk about it.
          </p>
        </motion.div>

        <div className="contact-content">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-intro">
              <span>LET'S WORK TOGETHER</span>

              <h3>
                Have an idea?
                <br />
                Let's build it.
              </h3>

              <p>
                I'm open to new projects, collaborations, and opportunities
                to create modern digital experiences for businesses.
              </p>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:charlessamuelraymond@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">✉</div>

              <div className="contact-item-text">
                <span>Email</span>
                <strong>charlessamuelraymond@gmail.com</strong>
              </div>

              <div className="contact-item-arrow">↗</div>
            </a>

            {/* PHONE */}
            <a
              href="tel:08136362066"
              className="contact-item"
            >
              <div className="contact-icon">☎</div>

              <div className="contact-item-text">
                <span>Phone</span>
                <strong>08136362066</strong>
              </div>

              <div className="contact-item-arrow">↗</div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/2348136362066"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">◉</div>

              <div className="contact-item-text">
                <span>WhatsApp</span>
                <strong>Let's chat</strong>
              </div>

              <div className="contact-item-arrow">↗</div>
            </a>

            {/* X */}
            <a
              href="https://x.com/rayghog?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">𝕏</div>

              <div className="contact-item-text">
                <span>X / Twitter</span>
                <strong>@rayghog</strong>
              </div>

              <div className="contact-item-arrow">↗</div>
            </a>

          </motion.div>

          {/* FORM */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-heading">
              <span>START A PROJECT</span>

              <h3>Send me a message.</h3>

              <p>
                Tell me a little about what you want to build.
              </p>
            </div>

            <form
              action="https://formspree.io/f/mbgjjdqg"
              method="POST"
              className="contact-form"
            >

              <div className="form-row">

                {/* NAME */}
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

              </div>

              {/* SUBJECT */}
              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Website project"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <button
                type="submit"
                className="contact-button"
              >
                Send Message
                <span>↗</span>
              </button>

            </form>
          </motion.div>

        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>AVAILABLE FOR PROJECTS</span>

          <p>
            Let's turn your idea into something people can use.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;