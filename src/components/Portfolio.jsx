import { useState } from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "Paint Website",
    category: "Creative Tool",
    description:
      "A browser-based painting app built with React. Draw, pick colours, adjust brush size and unleash your creativity — all without leaving the browser.",
    tech: ["React", "Canvas API", "CSS"],
    link: "https://paint-website-indol.vercel.app/",
    accent: "rgba(239, 68, 68, 0.15)",
  },
  {
    title: "Coursea",
    category: "EdTech Platform",
    description:
      "A sleek online-learning platform inspired by Coursera. Browse courses, meet instructors and explore a clean, responsive UI built for modern learners.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://coursea-web.vercel.app/",
    accent: "rgba(59, 130, 246, 0.15)",
  },
  {
    title: "Voice AI — Text to Speech",
    category: "AI Tool",
    description:
      "Convert any text into natural-sounding speech instantly. Powered by the Web Speech API with voice selection and playback controls.",
    tech: ["React", "Web Speech API", "CSS"],
    link: "https://text-to-speech-generator-delta.vercel.app/",
    accent: "rgba(168, 85, 247, 0.15)",
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card ${hovered ? "project-card-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Live preview iframe */}
      <div className="project-preview">
        <iframe
          src={project.link}
          title={project.title}
          className="project-iframe"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          tabIndex={-1}
        />
        {/* Overlay so hover doesn't get swallowed by the iframe */}
        <div className="project-preview-overlay" style={{ background: project.accent }} />

        {/* Live badge */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-live-btn"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="live-dot" />
          Live
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Card body */}
      <div className="project-body">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-footer">
          <div className="project-tech">
            {project.tech.map((item) => (
              <span className="tech-tag" key={item}>{item}</span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-arrow"
            aria-label={`Visit ${project.title}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

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
            Real, deployed projects — hover any card to preview the live site,
            or click to explore it in full.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;