import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skill-set">
        <div className="skill">
          <h3>Frontend</h3>
          <p>Cypress , Playwright , Selenium</p>
        </div>
        <div className="skill">
          <h3>Backend</h3>
          <p>Karate , RestAssured</p>
        </div>
        <div className="skill">
          <h3>Tools</h3>
          <p>Git, Docker, Jenkins, AWS</p>
        </div>
        <div className="skill">
          <h3>Languages</h3>
          <p>Java , JavaScript , Typescript</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
