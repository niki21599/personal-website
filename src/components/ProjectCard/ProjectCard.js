import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({
  projectImg,
  reverse,
  description,
  linkToProject,
  linkToGithub,
  skills,
  projectName,
}) => {
  return (
    <div
      className={
        reverse ? "project-container mb-64 reverse" : "project-container mb-64"
      }
    >
      <img src={projectImg} alt="" className="project-foto" />
      <div
        className={
          reverse ? "projectDescription mr-32" : "projectDescription ml-32"
        }
      >
        <h2
          className={
            reverse
              ? "white alignRight alignCenterResponsive heading-desc"
              : "white alignLeft alignCenterResponsive heading-desc"
          }
        >
          {projectName}
        </h2>
        <h3
          className={
            reverse
              ? "white alignRight mt--16 alignCenterResponsive"
              : "white alignLeft mt--16 alignCenterResponsive"
          }
        >
          {skills}
        </h3>
        <p
          className={
            reverse
              ? "white alignRight desc-text alignCenterResponsive"
              : "white alignLeft desc-text alignCenterResponsive"
          }
        >
          {description}
        </p>
        <div
          className={
            reverse ? "buttonBox rightButton row-reverse" : "buttonBox"
          }
        >
          <a
            href={linkToProject}
            className={reverse ? "tryLink ml-32" : "tryLink mr-32"}
            target="_blank"
          >
            Try Out
          </a>
          <a href={linkToGithub} className="github" target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
