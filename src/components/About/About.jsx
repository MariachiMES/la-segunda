import React from "react";
import { Parallax } from "react-parallax";
import "./About.scss";

export default function About() {
  return (
    <div className="About">
      <Parallax
        bgImage={require("../../public/images/P1240757.JPG")}
        strength={500}
        bgImageStyle={{ width: "100%", height: "auto" }}
      >
        <div className="big-container">
          <div className="text-container">
            <div className="about-text">
              <h1>Vintage Things and Stuffs</h1>
              <h3>Find Antique Things, Come on In.</h3>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
