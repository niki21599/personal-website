import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <div className="white-background footerContainer padding-sites">
      <div className="noticeContainer ">
        <a href="" className="light-grey ">
          Impressum
        </a>
        <div className="mrl6 light-grey">-</div>
        <a href="" className="light-grey">
          Legal Notice
        </a>
      </div>
      <div className="logoContainer">
        <a
          href="https://www.linkedin.com/in/niklas-burg-566761178/"
          target="_blank"
        >
          <img src="/mywebsite/linkedin.png" alt="" className="social-img" />
        </a>
        <a href="https://github.com/niki21599" target="_blank">
          <img src="/mywebsite/github.png" alt="" className="social-img" />
        </a>
        <a href="https://www.xing.com/profile/Niklas_Burg2/cv" target="_blank">
          <img src="/mywebsite/xing.png" alt="" className="social-img" />
        </a>
      </div>
    </div>
  );
}
