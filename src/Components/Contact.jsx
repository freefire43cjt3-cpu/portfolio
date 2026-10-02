import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import {
  FaXTwitter,
  FaRedditAlien,
  FaTiktok,
} from "react-icons/fa6";
import "./Contact.css";

// Formspree configuration
const FORMSPREE_ID = "mdekglyz";

const EMAIL = "charlessamuelraymond@gmail.com";

const SOCIALS = [
  {
    icon: FaXTwitter,
    href: "https://x.com/rayghog?s=11",
    label: "X",
  },
  {
    icon: FaRedditAlien,
    href: "https://www.reddit.com/u/RAYghog/s/bcjfBDxmvE",
    label: "Reddit",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@ray_tech2",
    label: "TikTok",
  },
];

const EMPTY = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const onChange = (event) => {
    const { name, value } = event.target;

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }

    if (status === "error") {
      setStatus("idle");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (status === "sending") return;

    const foundErrors = validate(values);

    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            subject: values.subject.trim() || "Portfolio Contact",
            message: values.message.trim(),
            _replyto: values.email.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Unable to send message.");
      }

      setStatus("success");
      setValues({ ...EMPTY });
      setErrors({});
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <section id="contact" className="ct-section">
      <div className="ct-inner">
        {/* HEADER */}
        <motion.div
          className="ct-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="ct-title">
            Get In <span>Touch</span>
          </h2>

          <p className="ct-sub">
            Have a project in mind or just want to say hi?
            Send me a message and I'll reply soon.
          </p>
        </motion.div>

        <div className="ct-layout">
          {/* CONTACT INFORMATION */}
          <motion.aside
            className="ct-info"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href={`mailto:${EMAIL}`} className="ct-email">
              <span className="ct-email-icon">
                <Mail size={20} />
              </span>

              <span>
                <small>Email me</small>
                {EMAIL}
              </span>
            </a>

            <p className="ct-follow">Find me on</p>

            <div className="ct-socials">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.aside>

          {/* CONTACT FORM */}
          <motion.div
            className="ct-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  className="ct-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  role="status"
                >
                  <CheckCircle2 size={56} />

                  <h3>Message sent!</h3>

                  <p>
                    Thanks for reaching out. I'll get back to you
                    as soon as I can.
                  </p>

                  <button
                    type="button"
                    className="ct-btn"
                    onClick={() => setStatus("idle")}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* NAME AND EMAIL */}
                  <div className="ct-row">
                    <div className="ct-field">
                      <label htmlFor="name">Name</label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        value={values.name}
                        onChange={onChange}
                        disabled={sending}
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        className={errors.name ? "bad" : ""}
                      />

                      {errors.name && (
                        <span id="name-error" className="ct-err">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="ct-field">
                      <label htmlFor="email">Email</label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={onChange}
                        disabled={sending}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className={errors.email ? "bad" : ""}
                      />

                      {errors.email && (
                        <span id="email-error" className="ct-err">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div className="ct-field">
                    <label htmlFor="subject">
                      Subject <em>(optional)</em>
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={values.subject}
                      onChange={onChange}
                      disabled={sending}
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="ct-field">
                    <label htmlFor="message">Message</label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={values.message}
                      onChange={onChange}
                      disabled={sending}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className={errors.message ? "bad" : ""}
                    />

                    {errors.message && (
                      <span id="message-error" className="ct-err">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* SPAM PROTECTION */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                    }}
                    aria-hidden="true"
                  />

                  {/* ERROR MESSAGE */}
                  {status === "error" && (
                    <div className="ct-alert" role="alert">
                      <AlertCircle size={18} />

                      <span>
                        Something went wrong. Please try again,
                        or email me directly.
                      </span>
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="ct-btn ct-submit"
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <Loader2 size={18} className="ct-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;