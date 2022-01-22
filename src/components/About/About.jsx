import React from "react";
import { Parallax } from "react-parallax";
import "./About.scss";

export default function About() {
  return (
    <div className="About">
      <Parallax
        className="about-parallax"
        strength={500}
        bgImageStyle={{ width: "100%", height: "auto" }}
      >
        <div className="big-container">
          <div className="text-container">
            <div className="about-text">
              <h1>Vintage Things and Drinks</h1>
              <h3>Antiques.</h3>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
