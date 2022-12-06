import React from "react";

export default function Resume() {
  return (
    <div>
      <p className="display-6">Resume</p>
      <hr />
      <a
        href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
}
