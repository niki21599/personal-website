import "./Home.css";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";

export default function Home() {
  return (
    <React.Fragment>
      <div id="home" className="home-container black-background padding-sites">
        <div className="home-left-container margin-right-xl">
          <h1 className="white text-left margin-bottom-m text-hello">
            Hi, <br /> I'm <span className="primary"> Niklas </span> Burg <br />{" "}
            Front End develop<span className="secondary">e</span>r
          </h1>
          <a href="#contact" className="contactButton">
            {" "}
            Contact Me{" "}
          </a>
        </div>

        <img src="/me5.png" className="home-img" alt="" />
      </div>
      <div className="black-background white arrowDownContainer">
        <a href="#skills">
          <IconButton className="arrowButton" size="large">
            <ExpandMoreIcon className="white arrow"></ExpandMoreIcon>
          </IconButton>
        </a>
      </div>
    </React.Fragment>
  );
}
