import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div id="portfolio" className="black-background portfolioContainer">
      <h2 className="white">My Work</h2>
      <div className="projectContainer">
        <div className="projectCard ">
          <img src="/mywebsite/kanban.png" alt="" className="project-img" />
          <div className="overlay ">
            <h3 className="primary">MyKanban</h3>
            <p className="paragraph-projects">
              A React based Kanban Board with a Django Backend
            </p>
            <a
              href="https://niki21599.github.io/kanban-frontend/"
              className="tryLink"
              target="_blank"
            >
              Try Out
            </a>
          </div>
        </div>

        <div className="projectCard ">
          <img src="/mywebsite/chat2.0..jpg" alt="" className="project-img" />
          <div className="overlay ">
            <h3 className="primary">MyChat</h3>
            <p className="paragraph-projects">
              A React based Chat App with a Django Backend
            </p>
            <a
              href="https://niki21599.github.io/chatFrontend/"
              className="tryLink"
              target="_blank"
            >
              Try Out
            </a>
          </div>
        </div>
        <div className={"projectCard "}>
          <img src="/mywebsite/crm.jpg" alt="" className="project-img" />
          <div className="overlay ">
            <h3 className="primary"> MyCRM</h3>
            <p className="paragraph-projects">
              A React based CRM System with a Django Backend
            </p>
            <a
              href="https://niki21599.github.io/react-crm/"
              className="tryLink"
              target="_blank"
            >
              Try Out
            </a>
          </div>
        </div>
        <div className={"projectCard "}>
          <img src="/mywebsite/videotube.jpg" alt="" className="project-img" />
          <div className="overlay ">
            <h3 className="primary">MyTube</h3>
            <p className="paragraph-projects">
              A React based Video Library using the Youtube API
            </p>
            <a
              href="https://niki21599.github.io/youtube_clone/"
              className="tryLink"
              target="_blank"
            >
              Try Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
