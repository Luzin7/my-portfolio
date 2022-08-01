import React from "react";

import { PROJECTS } from "../utils/getProjects";

import "../style/projects/projects.css";
import "../style/projects/projectsContent.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <div className="projects__header-text">
          <h2 className="projects__title">Projetos</h2>
          <p className="projects__sub">
            Aqui deixo disponível alguns projetos pessoais que fiz.
          </p>
        </div>
        <ul className="projects__links">
          {PROJECTS.map((project) => (
            <li
              data-aos="zoom-in"
              key={project.id}
              className="project__link-wrapper"
            >
              {/* condicionando o banner mostrado para os projetos */}
              {project.media === null ? (
                <div className="project__no-img">
                  <div className="project__no-img__content">
                    <p className="project__no-img__text">EM BREVE</p>
                  </div>
                </div>
              ) : (
                <div className="projects__img">
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    <img
                      className="project__img"
                      src={project.media}
                      alt={`project ${project.name}`}
                      loading="lazy"
                    />
                  </a>
                </div>
              )}
              <div data-aos="fade-up" className="projects__info">
                <p className="projects__info-title">{project.name}</p>
                <p className="projects__info-text">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
