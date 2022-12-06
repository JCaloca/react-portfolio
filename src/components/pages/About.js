import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="clearfix">
        <p className="display-5">Full Stack Web Developer</p>
        <hr />
        <img
          className="profile-pic col-md-6 float-md-end mb-3 ms-md-3"
          src={process.env.PUBLIC_URL + "/assets/prof-pic.jpg"}
          alt="J. Caloca"
        />
        <p className="lead">
          Hello, I'm Jacob Caloca. A recent graduate from the UC Berkely Coding
          Bootcamp Extension, with a background in customer service and sales.
          Throughout the bootcamp I have expanded my technical knowledge and
          widened my practical know how.
        </p>
        <p>
          I am excited to continue to grow professionally as a new graduate and
          expand my tech stack more.
        </p>
      </div>
    </div>
  );
}
