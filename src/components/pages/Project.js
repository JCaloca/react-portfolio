import React from "react";

export default function Project(props) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.projects.map((project) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={project.img}
                className="card-img-top"
                alt="Screenshot of the application"
              />
              <div className="card-body" key={project.id}>
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
              <div className="card-body">
                <a href={project.repo} className="card-link">
                  GitHub Repo
                </a>
                <a href={project.deployed} className="card-link">
                  Deployed Site or Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
