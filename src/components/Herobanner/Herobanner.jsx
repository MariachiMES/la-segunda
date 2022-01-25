import React from "react";
import "./Herobanner.scss";
import { Parallax } from "react-parallax";
import Slide from "react-reveal";
import { Zoom } from "react-reveal";

export default function Herobanner() {
  return (
    <div className="HeroBanner">
      <Parallax
        className="parallax-banner"
        bgImage={require("../../public/images/radio-bg.png")}
        strength={500}
        bgImageStyle={{ top: -375 }}
      >
        <div className="big-container">
          <div className="logo-wrapper">
            <div className="logo">
              <Zoom bottom>
                <img
                  src={require("../../public/images/la-segunda-fixed.png")}
                ></img>
              </Zoom>
            </div>
            <div className="desktop-call">
              <Slide bottom>DRINK.GROOVE.ANTIQUE</Slide>
            </div>
            <Parallax className="call-to-action" strength={1000}>
              {" "}
              <Slide right cascade>
                <div>
                  <p>DRINK.</p> <p>GROOVE.</p>
                  <p>ANTIQUE.</p>
                </div>
              </Slide>
            </Parallax>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
