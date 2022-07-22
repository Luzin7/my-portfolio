import React from "react";

import "../style/projects/projects.css";
import { PROJECTS } from "../utils/getProjects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <ul className="projects__links">
          {PROJECTS.map((project) => (
            <li className="project__link-wrapper">
              {/* path/project.name */}
              <img src={project.media} alt="project demo images" />
              <p>{project.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
