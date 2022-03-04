import React from "react";
import "./Herobanner.scss";
import { Parallax } from "react-parallax";
import Slide from "react-reveal";
import { Zoom } from "react-reveal";
// import "../fonts/DJIcons.ttf";
// import "../fonts/RetroTeam.otf";
// import "../fonts/SocialMediaCircled.otf";

export default function Herobanner() {
  return (
    <div className="HeroBanner">
      <Parallax
        className="parallax-banner"
        bgImage={require("../../public/images/radio-bg-min.png")}
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
              <Slide bottom>
                <h1 className="retro-team-font smaller-please">
                  DRINK. GROOVE. ANTIQUE
                </h1>
              </Slide>
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
        <div className="transition"></div>
      </Parallax>
    </div>
  );
}
