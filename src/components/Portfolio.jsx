import "./Portfolio.css";

// TODO: Replace these with your real assignments/projects once ready.
// Keep the "Practice Project" tag — it's honest and it's fine for a new
// company. Swap in the real title, description, tech and link for each.
const projects = [
  {
    title: "Project Name 1",
    category: "Practice Project",
    description:
      "A short, honest description of what this project does and what problem it solves.",
    tech: ["React", "CSS"],
    link: "#",
  },
  {
    title: "Project Name 2",
    category: "Practice Project",
    description:
      "A short, honest description of what this project does and what problem it solves.",
    tech: ["JavaScript"],
    link: "#",
  },
  {
    title: "Project Name 3",
    category: "Practice Project",
    description:
      "A short, honest description of what this project does and what problem it solves.",
    tech: ["React", "Vite"],
    link: "#",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="portfolio-badge">Our work so far</span>
          <h2 className="portfolio-title">
            Projects we've built while getting NEXMORA TECH started.
          </h2>
          <p className="portfolio-description">
            We're a new company. These are practice and assignment projects
            we've built together — real client work will be added here as
            we take on projects.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <a className="project-card" href={project.link} key={project.title}>
              <div className="project-visual" aria-hidden="true">
                <span className="project-initial">{project.title.charAt(0)}</span>
              </div>

              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span className="tech-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;