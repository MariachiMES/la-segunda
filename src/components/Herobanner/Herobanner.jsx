import React from "react";
import "./Herobanner.scss";
import { Parallax } from "react-parallax";
export default function Herobanner() {
  return (
    <div className="HeroBanner">
      <Parallax
        className="parallax-banner"
        bgImage={require("../../public/images/radio-bg.png")}
        strength={500}
        bgImageStyle={{
          top: -300,
        }}
      >
        <div className="big-container">
          <div className="logo-wrapper">
            <div className="logo">
              <img
                src={require("../../public/images/la-segunda-fixed.png")}
              ></img>
            </div>
            <Parallax className="call-to-action" strength={1000}>
              {" "}
              <div>DRINK. GROOVE. ANTIQUE.</div>
            </Parallax>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
