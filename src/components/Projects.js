import React from "react";

const Projects = () => {
  return (
    <section className="experience" id="experience">
      <h2>Projects</h2>
      <div className="job">
        <h3>Playwright Framework For TataSky Website</h3>
        <p className="project-description">
          Developed a test automation framework for a tatasky page using
          Playwright to ensure functionality and smooth user experience.
        </p>
        <a
          href="https://github.com/karthicks-02/loginTest"
          className="btn-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
      <div className="job">
        <h3>Cypress Framework For Amazon Website</h3>
        <p className="project-description">
          Developed a test automation framework for a amazon page using Cypress.
        </p>
        <a
          href="https://github.com/karthicks-02/loginTest"
          className="btn-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </section>
  );
};

export default Projects;
