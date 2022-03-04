import React from "react";
import { Parallax } from "react-parallax";
import "./About.scss";
import { Slide } from "react-reveal";

export default function About() {
  return (
    <div className="About">
      <Parallax
        bgImage={require("../../public/images/P1240685.JPG")}
        bgImageSize="cover"
        className="about-parallax"
        strength={500}
      >
        <div className="big-container">
          <div className="text-container">
            <div className="about-text">
              <Slide left>
                <h1 className="retro-team-font">Vintage Gallery.</h1>
                <h3 className="retro-team-font">Classic Drinks.</h3>
              </Slide>
            </div>
          </div>
        </div>
        <div className="transition"></div>
      </Parallax>
    </div>
  );
}
