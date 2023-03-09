import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div id="skills" className="grey-background padding-sites skillsContainer">
      <h2 className="text-center white">My Skills </h2>

      <div className="skillCardContainer">
        <div className="card">
          <img src="/mywebsite/js.png" className="skill-img" alt="" />

          <div className="skill-text">Javascript</div>
        </div>
        <div className="card">
          <img src="/mywebsite/react.png" className="skill-img" alt="" />

          <div className="skill-text">React</div>
        </div>
        <div className="card">
          <img src="/mywebsite/html.png" className="skill-img" alt="" />

          <div className="skill-text">HTML / CSS</div>
        </div>
        <div className="card">
          <img src="/mywebsite/scrum.png" className="skill-img" alt="" />

          <div className="skill-text">SCRUM</div>
        </div>
        <div className="card">
          <img src="/mywebsite/git.png" className="skill-img" alt="" />

          <div className="skill-text">Git</div>
        </div>
        <div className="card">
          <img src="/mywebsite/python.png" className="skill-img py" alt="" />

          <div className="skill-text">Python</div>
        </div>
        <div className="card">
          <img src="/mywebsite/rest.png" className="skill-img" alt="" />

          <div className="skill-text">Rest API</div>
        </div>
        <div className="card">
          <img src="/mywebsite/test.png" className="skill-img" alt="" />

          <div className="skill-text"> Test Automation</div>
        </div>
        <div className="card">
          <img src="/mywebsite/database.png" className="skill-img" alt="" />

          <div className="skill-text"> Databases</div>
        </div>
      </div>
    </div>
  );
}
