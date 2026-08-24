import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  // Replace YOUR_FORM_ID with your Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-success">
            <span className="success-icon">✓</span>
            <h2>Message Sent!</h2>
            <p>
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

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

            <form onSubmit={handleSubmit} className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

              </div>

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

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                className="contact-button"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message →"}
              </button>

              {state.errors?.getFormErrors()?.length > 0 && (
                <p className="form-error">
                  Something went wrong. Please try again.
                </p>
              )}

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;