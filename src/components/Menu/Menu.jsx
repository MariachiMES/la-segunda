import React from "react";
import "./Menu.scss";
import Slide from "react-reveal";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <Slide right big cascade>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a className="retro-team-font" href="#about-me">
              Things at La Segunda
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a className="retro-team-font" href="#portfolio">
              Other Things At La Segunda
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a className="retro-team-font" href="#morethings">
              More Things at La Segunda
            </a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a className="retro-team-font" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="street-address">
          <div className="retro-team-font">
            {" "}
            <h2 className="retro-team-font">La Segunda</h2>
            <h3 className="retro-team-font">1302 S St. Mary's </h3>
            <h3 className="retro-team-font">San Antonio, TX 78210</h3>
            <h3 className="retro-team-font">210.314.2740</h3>
          </div>
        </div>
        <div className="hours">
          <h2 className="retro-team-font">Hours of operation</h2>
          <h3 className="retro-team-font">MON, TUES: CLOSED</h3>
          <h3 className="retro-team-font">WED, THURS, FRI: 2P-8P</h3>
          <h3 className="retro-team-font">SAT, SUN: 11A-8P</h3>
        </div>
      </Slide>
    </div>
  );
}
