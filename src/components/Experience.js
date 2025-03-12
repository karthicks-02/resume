import React from 'react';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>
      <div className="job">
        <h3>Intern Engineer at Tekion Corp</h3>
        <p className="job-title">Feb 2023 - Aug 2023</p>
        <ul>
          <li>Developed a robust and scalable Cypress testing framework for an automotive cloud platform, ensuring high-quality and efficient end-to-end testing of web applications.</li>
          <li>Automated PDF snapshot testing, significantly improving test coverage and ensuring consistent document rendering across different scenarios.</li>
          <li>Migrated predefined UI automation steps to API-level tests, improving test stability, execution speed, and overall system reliability, while reducing UI dependencies.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Associate Automation Engineer at Tekion Corp</h3>
        <p className="job-title">Sep 2023 - July 2024</p>
        <ul>
          <li>Developed a Playwright framework from scratch.</li>
          <li>Enabling cross-browser testing and parallel execution, which reduced test time and minimized failures.</li>
          <li>Migrated test automation framework from Cypress to Playwright, improving cross-browser compatibility and test execution speed.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Associate Automation Engineer at Tekion Corp</h3>
        <p className="job-title">Aug 2024 - Present</p>
        <ul>
          <li>Built a RestAssured framework from scratch for automated API testing, ensuring high reliability and efficiency.</li>
          <li>Integrated the framework with CI/CD pipelines, enabling continuous testing and faster feedback loops.</li>
          <li>Enhanced test coverage and reporting, providing clear insights into API performance and stability.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
