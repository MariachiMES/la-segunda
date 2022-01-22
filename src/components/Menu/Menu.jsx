import React from "react";
import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about-me">Things at La Segunda</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Other Things At La Segunda</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">More Things at La Segunda</a>
        </li>
      </ul>
    </div>
  );
}
