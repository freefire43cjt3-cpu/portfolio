import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Award,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Building2,
} from "lucide-react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiBootstrap,
  SiSupabase,
  SiMui,
  SiGit,
  SiVercel,
  SiFigma,
} from "react-icons/si";

import "./Portfolio.css";

/* ================= EDIT YOUR CONTENT HERE ================= */

// Featured company website
const COMPANY = {
  name: "Platinum Farida",
  tagline: "Quality Meat, Freshly Delivered.",
  desc: "A modern food business website designed to showcase fresh meat products and provide customers with a simple and convenient ordering experience.",
  image: "/images/pla.jpeg",
  link: "https://platinumfarida.com",
  tags: ["React", "Tailwind CSS", "Vercel"],
};

// Other projects
const PROJECTS = [
  {
    number: "01",
    title: "Ubana Grill House",
    type: "Restaurant",
    desc: "A modern responsive restaurant website for Ubana Grill House, featuring an attractive menu showcase, engaging design, and a smooth user experience across mobile and desktop devices.",
    image: "/images/uba1.jpeg",
    link: "https://ubanagrill.vercel.app",
    tags: ["JavaScript", "CSS"],
  },

  {
    number: "02",
    title: "Barbar Studio",
    type: "Barbershop",
    desc: "A modern barbershop website designed around strong branding, service presentation and a simple booking experience.",
    image: "/images/hair1.jpeg",
    link: "https://barbar-studio.vercel.app/",
    tags: ["React", "CSS", "JavaScript"],
  },

  {
    number: "03",
    title: "Shell Care",
    type: "Health Care",
    desc: "A modern and responsive healthcare website designed to showcase medical services and provide a professional patient experience.",
    image: "/images/shell1.jpeg",
    link: "https://shellcare.vercel.app/",
    tags: ["React", "CSS", "JavaScript"],
  },
  {
  number: "04",
  title: "Velora Motors",
  type: "Automotive",
  desc: "A modern luxury automotive website designed to showcase premium vehicles with elegant visuals, detailed specifications, pricing information, and vehicle enquiry options.",
  image: "/images/car1.jpeg",
  link: "https://velora-auto.vercel.app/",
  tags: ["React", "CSS", "JavaScript", "Responsive Design"],
},
];

// Certificates
const CERTIFICATES = [
  
  {
    title: "Front-End Website Development",
    issuer: "Webdeves Technologies",
    date: "December 2025",
    image: "/images/dev.jpeg",
    link: "",
  },
  {
    title: "React JS Tech Skills Bootcamp",
    issuer: "BuezeTech",
    date: "July 2025",
    image: "/images/buezetechcertificate.jpeg",
    link: "",
  },
];


// Tech Stack
const TECH = [
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Vite", icon: SiVite, color: "#a855f7" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
 
];

const TABS = [
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "tech", label: "Tech Stack", icon: Layers },
];

/* ========================================================== */

const fade = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
};

function Thumb({ src, alt }) {
  return (
    <div className="pf-thumb">
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : null}
    </div>
  );
}

function Portfolio() {
  const [tab, setTab] = useState("projects");

  return (
    <section id="portfolio" className="pf-section">
      <div className="pf-inner">
        <h2 className="pf-title">Portfolio</h2>

        <p className="pf-sub">
          My work, certificates and the tools I use.
        </p>

        {/* TABS */}
        <div className="pf-tabs" role="tablist">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              className={`pf-tab ${tab === id ? "active" : ""}`}
              onClick={() => setTab(id)}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {/* PROJECTS */}
            {tab === "projects" && (
              <>
                {/* FEATURED COMPANY WEBSITE */}
                <a
                  className="pf-featured"
                  href={COMPANY.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Thumb
                    src={COMPANY.image}
                    alt={COMPANY.name}
                  />

                  <div className="pf-featured-body">
                    <span className="pf-badge">
                      <Building2 size={14} />
                      {COMPANY.tagline}
                    </span>

                    <h3>{COMPANY.name}</h3>

                    <p>{COMPANY.desc}</p>

                    <div className="pf-tags">
                      {COMPANY.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>

                    <span className="pf-btn">
                      Visit website
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </a>

                {/* OTHER PROJECTS */}
                <div className="pf-grid">
                  {PROJECTS.map((p, i) => (
                    <motion.a
                      key={p.title}
                      className="pf-card"
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fade}
                      custom={i}
                      initial="hidden"
                      animate="show"
                    >
                      <Thumb
                        src={p.image}
                        alt={p.title}
                      />

                      <h3>{p.title}</h3>

                      <p>{p.desc}</p>

                      <div className="pf-tags">
                        {p.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>

                      <span className="pf-btn">
                        Details
                        <ArrowRight size={16} />
                      </span>
                    </motion.a>
                  ))}
                </div>
              </>
            )}

            {/* CERTIFICATES */}
            {tab === "certificates" && (
              <div className="pf-grid">
                {CERTIFICATES.map((c, i) => (
                  <motion.a
                    key={c.title}
                    className="pf-card pf-cert"
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fade}
                    custom={i}
                    initial="hidden"
                    animate="show"
                  >
                    <Thumb
                      src={c.image}
                      alt={c.title}
                    />

                    <div className="pf-cert-row">
                      <div>
                        <h3>{c.title}</h3>

                        <p>
                          {c.issuer} · {c.date}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={22}
                        className="pf-cert-arrow"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {/* TECH STACK */}
            {tab === "tech" && (
              <div className="pf-tech">
                {TECH.map(
                  ({ name, icon: Icon, color }, i) => (
                    <motion.div
                      key={name}
                      className="pf-tech-item"
                      style={{
                        "--c": color,
                      }}
                      variants={fade}
                      custom={i * 0.5}
                      initial="hidden"
                      animate="show"
                    >
                      <Icon
                        size={42}
                        color={color}
                      />

                      <span>{name}</span>
                    </motion.div>
                  )
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Portfolio;