import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  FolderKanban,
  Award,
  Briefcase,
  Images,
  MessageSquare,
  Mail,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "portfolio", label: "Portfolio", icon: FolderKanban },
  { id: "contact", label: "Contact", icon: Mail },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    }
  };

  return (
    <>
      {/* Floating pill navbar (desktop) */}
      <motion.header
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <nav className="navbar__inner" aria-label="Primary">
          {/* Brand */}
          <button
            type="button"
            className="navbar__brand"
            onClick={() => scrollTo("home")}
          >
            <span className="navbar__brand-icon">
              <Sparkles size={16} strokeWidth={2.2} />
            </span>
            <span className="navbar__brand-text">
              RAYMOND<span>.C</span>
            </span>
          </button>

          {/* Links */}
          <ul className="navbar__links">
            {NAV_LINKS.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  type="button"
                  className={`navbar__link ${
                    activeSection === id ? "navbar__link--active" : ""
                  }`}
                  onClick={() => scrollTo(id)}
                >
                  <Icon size={14} strokeWidth={2} />
                  <span>{label}</span>
                  {activeSection === id && (
                    <motion.span
                      className="navbar__link-glow"
                      layoutId="nav-glow"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="navbar__toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="navbar__mobile"
              aria-label="Mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              <div className="navbar__mobile-header">
                <span className="navbar__brand-text">
                  RAYMOND<span>.C</span>
                </span>
                <button
                  type="button"
                  className="navbar__toggle"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="navbar__mobile-links">
                {NAV_LINKS.map(({ id, label, icon: Icon }, i) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <button
                      type="button"
                      className={`navbar__mobile-link ${
                        activeSection === id ? "navbar__mobile-link--active" : ""
                      }`}
                      onClick={() => scrollTo(id)}
                    >
                      <span className="navbar__mobile-icon">
                        <Icon size={17} strokeWidth={2} />
                      </span>
                      <span>{label}</span>
                      <span className="navbar__mobile-arrow">→</span>
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="navbar__mobile-footer">
                <p>Let's build something great.</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;