import React from "react";
import "./Menu.scss";
import Slide from "react-reveal";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <Slide right big cascade>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#about-me">Things at La Segunda</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#portfolio">Other Things At La Segunda</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#morethings">More Things at La Segunda</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="street-address">
          {" "}
          <h2>La Segunda</h2>
          <h3>1302 S St. Mary's </h3>
          <h3>San Antonio, TX 78210</h3>
          <h3>210.314.2740</h3>
        </div>
        <div className="hours">
          <h2>Hours of operation</h2>
          <h3>MON, TUES: CLOSED</h3>
          <h3>WED, THURS, FRI: 2P-8P</h3>
          <h3>SAT, SUN: 11A-8P</h3>
        </div>
      </Slide>
    </div>
  );
}
