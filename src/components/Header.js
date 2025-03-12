import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="name">Karthick Sundaram</h1>
        <h2 className="job-title">Software Developer In Test</h2>
        <p></p>
        <p className ="job">An accomplished and results-driven Software Developer in Test (SDET) with extensive experience in developing automated test frameworks and ensuring software quality across various platforms, including web, mobile, and APIs. Proficient in test automation, performance testing, CI/CD integration, and collaborating with development teams to deliver high-quality software solutions efficiently. Adept at writing scalable and maintainable test code and integrating it within the software development lifecycle.</p>
        <a
          href="https://www.linkedin.com/in/karthick-sundaram-538680237"
          className="btn-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          View LinkedIn Profile
        </a>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="btn-scroll"
        >
          Scroll to Experience
        </Link>
      </div>
    </header>
  );
};

export default Header;
