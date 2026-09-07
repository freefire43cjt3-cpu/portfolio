import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Barbar Studio",
      description:
        "A modern, responsive barber website designed to showcase services, gallery work, and make booking easier for customers.",
      link: "https://barbar-studio.vercel.app/",
      number: "01",
    },
    {
      title: "Shell Care",
      description:
        "A modern and responsive healthcare website designed to showcase medical services, doctors, appointments, and patient-focused care.",
      link: "https://shellcare.vercel.app/",
      number: "02",
    },
    {
      title: "Velora Auto",
      description:
        "A premium automotive dealership website designed with a modern luxury aesthetic, smooth animations, responsive layouts, vehicle collections, performance showcases, testimonials, and an interactive contact experience.",
      link: "https://velora-auto.vercel.app/",
      number: "03",
    },
    {
      title: "Luexe Estate",
      description:
        "A modern real-estate platform designed for showcasing properties in a professional way.",
      link: "https://luexeestate.vercel.app/",
      number: "04",
    },
    // {
    //   title: "Architecture",
    //   description:
    //     "A clean architecture website built to showcase architectural ideas and projects.",
    //   link: "https://architecture-blond.vercel.app/",
    //   number: "05",
    // },
    {
      title: "Global Xchange",
      description:
        "A modern business-focused website with a professional and responsive interface.",
      link: "https://global-xchange.vercel.app/",
      number: "06",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <p className="projects-tag">MY WORK</p>

        <h2>
          Projects I've <span>Built</span>
        </h2>

        <p className="projects-intro">
          Here are some of the projects I've designed and developed.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <div className="project-top">
              <span>{project.number}</span>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-arrow"
              >
                ↗
              </a>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View Project <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;