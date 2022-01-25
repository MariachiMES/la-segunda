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
            <Slide left>
              <div className="about-text">
                <h1>Vintage Things and Drinks</h1>
                <h3>Antiques.</h3>
              </div>
            </Slide>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
