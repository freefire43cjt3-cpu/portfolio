import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Fitzone Hub",
      description:
        "A modern fitness website designed with a clean and engaging user experience.",
      link: "https://fitzonehub.vercel.app/",
      number: "01",
    },
    {
      title: "The Flavor Nest",
      description:
        "A stylish food and restaurant website focused on presenting meals beautifully.",
      link: "https://theflavornest.vercel.app/",
      number: "02",
    },
    {
      title: "Luexe Estate",
      description:
        "A modern real-estate platform designed for showcasing properties in a professional way.",
      link: "https://luexeestate.vercel.app/",
      number: "03",
    },
    {
      title: "Architecture",
      description:
        "A clean architecture website built to showcase architectural ideas and projects.",
      link: "https://architecture-blond.vercel.app/",
      number: "04",
    },
    {
      title: "Global Xchange",
      description:
        "A modern business-focused website with a professional and responsive interface.",
      link: "https://global-xchange.vercel.app/",
      number: "05",
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