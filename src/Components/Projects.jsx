import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Barbar Studio",
      description:
        "A modern, responsive barber website designed to showcase services, gallery work, and make booking easier for customers.",
      link: "https://barbar-studio.vercel.app/",
      image: "/images/barbar.jpeg",
      number: "01",
      tech: "React · CSS · Responsive Design",
    },
    {
      title: "Shell Care",
      description:
        "A modern healthcare website designed to showcase medical services, doctors, appointments, and patient-focused care.",
      link: "https://shellcare.vercel.app/",
      image: "/images/medcare.jpeg",
      number: "02",
      tech: "React · CSS · Responsive Design",
    },
    {
      title: "Velora Auto",
      description:
        "A premium automotive dealership website with a modern luxury aesthetic, vehicle collections, animations, testimonials, and contact experience.",
      link: "https://velora-auto.vercel.app/",
      image: "/images/velora.jpeg",
      number: "03",
      tech: "React · Framer Motion · CSS",
    },
    {
      title: "Luexe Estate",
      description:
        "A modern real-estate platform designed to showcase properties in a professional and engaging way.",
      link: "https://luexeestate.vercel.app/",
      image: "/images/estate.jpeg",
      number: "04",
      tech: "React · CSS · Responsive Design",
    },
    {
      title: "Global Xchange",
      description:
        "A modern business-focused website with a professional interface and responsive experience across devices.",
      link: "https://global-xchange.vercel.app/",
      image: "/images/trade.jpeg",
      number: "05",
      tech: "React · CSS · JavaScript",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="projects-tag">MY WORK</p>

          <h2>
            Projects I've <span>Built.</span>
          </h2>

          <p className="projects-intro">
            A selection of websites and digital experiences
            I've designed and developed for different businesses.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                />

                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website ↗
                  </a>
                </div>
              </div>

              <div className="project-info">

                <div className="project-number">
                  <span>{project.number}</span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                    aria-label={`Open ${project.title}`}
                  >
                    ↗
                  </a>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-footer">
                  <span>{project.tech}</span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View Project
                    <span>→</span>
                  </a>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;