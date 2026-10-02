import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  FaXTwitter,
  FaRedditAlien,
  FaTiktok,
} from "react-icons/fa6";

import "./Hero.css";

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
  {
    icon: Mail,
    href: "mailto:charlessamuelraymond@gmail.com", // FIXED: mailto added
    label: "Email",
  },
];

const TAGS = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "UI Design",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const rise = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Hero({
  name = "RAYMOND CHARLES",
  role = "Frontend Web Developer",
  tagline = "I build clean, modern web experiences for businesses and brands.",
  greeting = "Hello, I'm",
}) {
  const firstName = name.split(" ")[0];
  const rest = name.split(" ").slice(1).join(" ");

  return (
    <section id="home" className="hero-section">
      {/* GLOW ORBS */}
      <span className="hero-orb hero-orb-1" />
      <span className="hero-orb hero-orb-2" />
      <span className="hero-orb hero-orb-3" />

      {/* STARFIELD */}
      <div className="hero-stars" aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="hero-star"
            style={{
              left: `${(i * 41) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${(i % 12) * 0.3}s`,
              width: i % 6 === 0 ? "3px" : "2px",
              height: i % 6 === 0 ? "3px" : "2px",
            }}
          />
        ))}
      </div>

      {/* GRID LINES */}
      <div className="hero-grid" aria-hidden="true" />

      {/* CONTENT */}
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* GREETING BADGE */}
        <motion.div className="hero-badge" variants={rise}>
          <Sparkles size={13} />
          <span>{greeting}</span>
        </motion.div>

        {/* NAME */}
        <motion.h1
          className="hero-name"
          variants={rise}
          aria-label={name}
        >
          <span className="hero-name-first">{firstName}</span>{" "}
          <span className="hero-name-rest">{rest}</span>
        </motion.h1>

        {/* ROLE */}
        <motion.h2 className="hero-role" variants={rise}>
          {role}
        </motion.h2>

        {/* TAGLINE */}
        <motion.p className="hero-tagline" variants={rise}>
          {tagline}
        </motion.p>

        {/* TECH TAGS */}
        <motion.div className="hero-tags" variants={rise}>
          {TAGS.map((tag) => (
            <span key={tag} className="hero-tag">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div className="hero-actions" variants={rise}>
          <a
            href="#portfolio" // FIXED: was #projects, your section id is "portfolio"
            className="hero-cta hero-cta-primary"
          >
            View My Work
            <ArrowRight size={15} />
          </a>

          <a
            href="#contact"
            className="hero-cta hero-cta-ghost"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* SOCIALS */}
        <motion.div className="hero-socials" variants={rise}>
          {SOCIALS.map(({ icon: Icon, href, label }) => {
            const isMail = href.startsWith("mailto:");
            return (
              <a
                key={label}
                href={href}
                {...(!isMail && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="hero-social"
                aria-label={label}
                title={label}
              >
                <Icon size={17} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 0.8,
        }}
      >
        <span className="hero-scroll-text">Scroll</span>

        <motion.span
          className="hero-scroll-icon"
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;