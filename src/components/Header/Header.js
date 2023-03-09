import React from "react";
import "./Header.css";

export default function Header(props) {
  let home = "home";
  let about = "about";
  let portfolio = "portfolio";

  let [activeSection, setActiveSection] = React.useState(home);

  let openMenu = () => {
    props.setOpen(true);
  };

  return (
    <div className="header padding-sites">
      <div className="header-container">
        <div className="logo">
          {" "}
          <img className="logo-img" src="/mywebsite/nb-logo.png" alt="" />
        </div>
        <div className="menu">
          <a
            href="#home"
            className={
              "menuPoint margin-right-s " +
              (activeSection === home ? " primary" : "white")
            }
          >
            Home
          </a>
          <a
            href="#about"
            className={
              "menuPoint  margin-right-s margin-left-s " +
              (activeSection == about ? " primary" : " white")
            }
          >
            About
          </a>
          <a
            href="#portfolio"
            className={
              "menuPoint margin-left-s " +
              (activeSection == portfolio ? "primary" : "white")
            }
          >
            Portfolio
          </a>
        </div>
        <div className="menu-responsive white">
          <img
            src={
              props.open
                ? "/mywebsite/close.png"
                : "/mywebsite/icons8-menü-60.png"
            }
            alt=""
            className="responsive-img"
            onClick={() => {
              props.setOpen(!props.open);
            }}
          />

          {props.open ? (
            <div className="openMenu">
              <a
                href="#home"
                className="menuPointRes primary"
                onClick={() => props.setOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="menuPointRes"
                onClick={() => props.setOpen(false)}
              >
                {" "}
                About
              </a>
              <a
                href="#portfolio"
                className="menuPointRes"
                onClick={() => props.setOpen(false)}
              >
                Portfolio
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
