import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <span>GET IN TOUCH</span>

          <h2>
            Let's <b>Connect</b>
          </h2>

          <p>
            Have a project, opportunity, or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="contact-intro">
              <h3>Let's work together.</h3>

              <p>
                I'm always open to new opportunities, creative projects,
                and meaningful collaborations.
              </p>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:charlessamuelraymond@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">✉</div>

              <div>
                <span>Email</span>
                <strong>charlessamuelraymond@gmail.com</strong>
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:08136362066"
              className="contact-item"
            >
              <div className="contact-icon">☎</div>

              <div>
                <span>Phone</span>
                <strong>08136362066</strong>
              </div>
            </a>

            {/* X */}
            <a
              href="https://x.com/rayghog?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">𝕏</div>

              <div>
                <span>X / Twitter</span>
                <strong>@rayghog</strong>
              </div>
            </a>

          </div>

          {/* FORM */}
          <div className="contact-form-wrapper">

            <form
              action="https://formspree.io/f/xxxxxxxx"
              method="POST"
              className="contact-form"
            >

              <div className="form-row">

                {/* NAME */}
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>

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
                  <label htmlFor="email">Your Email</label>

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
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Let's work together"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              {/* FORM SETTINGS */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="contact-button"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;