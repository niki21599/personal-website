import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div id="skills" className="grey-background padding-sites skillsContainer">
      <h2 className="text-center white">My Skills </h2>

      <div className="skillCardContainer">
        <div className="card">
          <img src="/js.png" className="skill-img" alt="" />

          <div className="skill-text">Javascript</div>
        </div>
        <div className="card">
          <img src="/react.png" className="skill-img" alt="" />

          <div className="skill-text">React</div>
        </div>
        <div className="card">
          <img src="/html.png" className="skill-img" alt="" />

          <div className="skill-text">HTML / CSS</div>
        </div>
        <div className="card">
          <img src="/scrum.png" className="skill-img" alt="" />

          <div className="skill-text">SCRUM</div>
        </div>
        <div className="card">
          <img src="/git.png" className="skill-img" alt="" />

          <div className="skill-text">Git</div>
        </div>
        <div className="card">
          <img src="/python.png" className="skill-img py" alt="" />

          <div className="skill-text">Python</div>
        </div>
        <div className="card">
          <img src="/rest.png" className="skill-img" alt="" />

          <div className="skill-text">Rest API</div>
        </div>
        <div className="card">
          <img src="/test.png" className="skill-img" alt="" />

          <div className="skill-text"> Test Automation</div>
        </div>
        <div className="card">
          <img src="/database.png" className="skill-img" alt="" />

          <div className="skill-text"> Databases</div>
        </div>
      </div>
    </div>
  );
}
