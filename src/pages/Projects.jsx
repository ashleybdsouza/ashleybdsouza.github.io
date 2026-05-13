import { useState, useMemo } from "react";
import useInView from "../hooks/useInView";
import "../styles/projects.css";
import { loadProjects } from "../utils/loadProjects";

export default function Projects() {
  const projects = loadProjects();
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView();

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const query = searchQuery.toLowerCase();
    return projects.filter((project) => {
      return (
        project.title?.toLowerCase().includes(query) ||
        project.excerpt?.toLowerCase().includes(query) ||
        project.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, projects]);

  return (
    <main
      ref={ref}
      className={`section projects-page ${inView ? "in-view" : ""}`}
    >
      <div className="section-inner">

        <header className="projects-header">
          <h1>Projects</h1>
          <p className="projects-intro">
            A selection of tools, dashboards, and systems I've built to solve
            real problems — from automating release tracking to visualizing
            cross-team dependencies. Most started as internal needs; a few
            became things others found useful too.
          </p>
        </header>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.slug} className="project-card">

              {/* Thumbnail */}
              <div className="project-thumbnail">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    className="project-thumbnail-img"
                  />
                ) : (
                  <div className="project-thumbnail-placeholder">
                    <span>{project.title?.charAt(0) ?? "P"}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="project-body">
                {project.tags?.length > 0 && (
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                )}

                <h3 className="project-title">{project.title}</h3>
                <p className="project-excerpt">{project.excerpt}</p>

                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link--demo"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link--source"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}

          {filteredProjects.length === 0 && (
            <p className="projects-empty">No projects found.</p>
          )}
        </div>

      </div>
    </main>
  );
}
