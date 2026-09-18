import "./Skills.css";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      name: "HTML",
      short: "HTML5",
      description: "Semantic and accessible web structure.",
    },
    {
      name: "CSS",
      short: "CSS3",
      description: "Responsive layouts and modern interfaces.",
    },
    {
      name: "JavaScript",
      short: "JS",
      description: "Interactive and dynamic web experiences.",
    },
    {
      name: "React",
      short: "React",
      description: "Component-based modern web applications.",
    },
    {
      name: "Git & GitHub",
      short: "Git",
      description: "Version control and project collaboration.",
    },
    {
      name: "Responsive Design",
      short: "RWD",
      description: "Websites optimized for every screen size.",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>MY SKILLS</span>

          <h2>
            Tools I Use to Build
            <span> Digital Experiences.</span>
          </h2>

          <p>
            The technologies and skills I use to create modern,
            responsive and user-friendly websites.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="skill-icon">
                {skill.short}
              </div>

              <div className="skill-content">
                <div className="skill-top">
                  <h3>{skill.name}</h3>
                  <span>0{index + 1}</span>
                </div>

                <p>{skill.description}</p>
              </div>

              <div className="skill-line"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>TECH STACK</span>

          <div className="tech-list">
            <strong>React</strong>
            <strong>JavaScript</strong>
            <strong>CSS</strong>
            <strong>Git</strong>
            <strong>GitHub</strong>
            <strong>Vercel</strong>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;