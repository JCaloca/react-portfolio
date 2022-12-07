import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <div className="resume-link">
        <p className="display-6">Resume</p>
        <hr />
        <p>
          Download my
          <a
            type="button"
            className="btn btn-dark btn-lg px-5"
            href={process.env.PUBLIC_URL + "/assets/react-resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </p>
      </div>
      <div className="skills-list">
        <ul>
          <li>MERN: MongoDb, Express, React, Node</li>
          <li>HTML, CSS, JavaScript</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>Bootstrap, Bulma, Tailwind</li>
          <li>Heroku</li>
          <li>JSON, AJAX, Fetch</li>
        </ul>
      </div>
    </div>
  );
}
