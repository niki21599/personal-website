import "./About.css";
import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="grey-background padding-top-l padding-sites padding-bottom-xl"
    >
      <div className="aboutme aboutContainer">
        <img src="/mywebsite/me5.png" alt="" className="me-img" />
        <div className="max-width500 ">
          <h2 className="white">About me. </h2>
          <p className="white">
            Ich heiße Niklas Burg, spiele gerne Fußball, liebe es meine Freunde
            mit Zaubertricks zu begeistern und Programmiere für mein Leben gern.
          </p>
        </div>
      </div>
      <div className="journeyContainer padding-top-l">
        <div className="max-width-250 journeyCard">
          <img src="/mywebsite/walk.png" alt="" className="journey-img" />
          <h5 className="white"> My Beginnings</h5>
          <p className="white">
            Mein Berufsleben hat mit einer Ausbildung zum Bankkaufmann begonnen.
            Nach erfolgreicher Ausbildung habe ich drei Jahre als Kundenberater
            gearbeitet.
          </p>
        </div>
        <div className="max-width-250 journeyCard">
          <img src="/mywebsite/heart.png" alt="" className="journey-img" />
          <h5 className="white">Developing Passion</h5>
          <p className="white">
            Während meiner Zeit als Kundenberater habe ich durch eine
            nebenberufliche Weiterbildung meine Leidenschaft fürs Programmieren
            entwickelt.
          </p>
        </div>
        <div className="max-width-250 journeyCard">
          <img src="/mywebsite/takeoff.png" alt="" className="journey-img" />
          <h5 className="white">My Future</h5>
          <p className="white">
            Nach erfolgreicher Absolvierung eines Bootcamps habe ich meine
            Fähigkeiten als Software Entwickler durch das Realisieren mehrerer
            Projekte weiterentwickelt.
          </p>
        </div>
      </div>
    </div>
  );
}
