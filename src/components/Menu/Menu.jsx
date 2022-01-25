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
      </Slide>
    </div>
  );
}
