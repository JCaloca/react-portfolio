import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "PWA Text Editor",
    description:
      "A JavaScript text editor that runs in the browser. This is a single-page application built using PWA criteria.",
    img: "/assets/text-editor.png",
    deployed: "https://amazing-js-text-editor.herokuapp.com/",
    repo: "https://github.com/JCaloca/PWA-Text-Editor",
  },
  {
    id: 1,
    title: "Team Profile Generator",
    description:
      "A command line application that generates a web page through users input.",
    img: "/assets/team-profile-generator.png",
    deployed:
      "https://drive.google.com/file/d/1pvPUEjATH9fWhVduLa77IkLiolYoGNlK/view",
    repo: "https://github.com/JCaloca/Team-Profile-Generator",
  },
  {
    id: 2,
    title: "Note Taker",
    description:
      "An application used to take notes built out on the back end through Express.js.",
    img: "/img/note-taker.png",
    deployed: "https://note-taker-jakec.herokuapp.com/",
    repo: "https://github.com/JCaloca/Express.js-Note-Taker",
  },
  {
    id: 3,
    title: "Employee Tracker",
    description:
      "A content management system (CMS) interface built in the command line application. Built using Node.js, Inquirer npm and MySQL",
    img: "/img/employeetracker.png",
    deployed:
      "https://drive.google.com/file/d/1t4hHrdtT5rALhNQChNyF6Rq0ACji0_N5/view",
    repo: "https://github.com/JCaloca/Employee-Tracker",
  },
  {
    id: 4,
    title: "NoSQL Social Network API",
    description:
      "A NoSQl based API for a social network application where users can share their thoughts, react to friends' thoughts and create a friends list.",
    img: "/img/nosql-api.png",
    deployed:
      "https://drive.google.com/file/d/1NLj5Je5KFYrpRGvMp6OkoXqaZiEkm9qo/view",
    repo: "https://github.com/JCaloca/NoSQL-Social-Network-API",
  },
  {
    id: 5,
    title: "Geo Chart Tracker",
    description:
      "An app to find music that is popular in different locations all over the world!",
    img: "/img/geochart-tracker.png",
    deployed: "https://jcaloca.github.io/Geo-Chart-Tracker/",
    repo: "https://github.com/JCaloca/Geo-Chart-Tracker",
  },
];

export default function Portfolio() {
  return (
    <div>
      <p className="display-6">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}
