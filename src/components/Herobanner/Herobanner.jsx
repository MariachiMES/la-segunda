import React from "react";
import "./Herobanner.scss";
import { Parallax } from "react-parallax";
export default function Herobanner() {
  return (
    <div className="HeroBanner">
      <Parallax
        className="parallax-banner"
        strength={500}
        bgImageStyle={{
          width: "100%",
          height: "auto",
        }}
      >
        <div className="big-container">
          <div className="logo-wrapper">
            <div className="logo">
              <img
                src={require("../../public/images/la-segunda-fixed.png")}
              ></img>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
