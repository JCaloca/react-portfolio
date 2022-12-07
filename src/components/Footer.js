import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="fixed-bottom text-bg-dark p-3">
      <div className="text-center">
        <a href="https://github.com/JCaloca" className="text-white">
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/jacob-caloca-003479a1/"
          className="text-white"
        >
          LinkedIn
        </a>
        |{" "}
        <a
          href="https://medium.com/@jacobcaloca1/ecma-and-ecmascript-10aff7c90d2"
          className="text-white"
        >
          Medium
        </a>
      </div>
    </footer>
  );
}

export default Footer;
