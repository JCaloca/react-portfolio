import React from 'react';

export default function Project(props) {
    return (
     <div className="container">
      {props.projects.map(project => (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt="" />
                <div className="card-body" key={project.id}>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
        </div>
       ))}
     </div>  
    )
}