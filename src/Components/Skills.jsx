import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "90%",
      description: "Building clean and semantic web structures.",
    },
    {
      name: "CSS",
      level: "85%",
      description: "Creating responsive and modern designs.",
    },
    {
      name: "JavaScript",
      level: "80%",
      description: "Adding interactive and dynamic features.",
    },
    {
      name: "React",
      level: "75%",
      description: "Building modern component-based interfaces.",
    },
    {
      name: "Git & GitHub",
      level: "70%",
      description: "Managing and organizing development projects.",
    },
    {
      name: "Responsive Design",
      level: "85%",
      description: "Making websites look great on every screen.",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span>MY SKILLS</span>
          <h2>What I Can Do</h2>
          <p>
            Technologies and skills I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-top">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <p>{skill.description}</p>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;