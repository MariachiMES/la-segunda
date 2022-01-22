import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faRecordVinyl,
  faIcons,
  faMusic,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="porfolio" className="logo">
            <FontAwesomeIcon
              icon={faRecordVinyl}
              style={{ color: "teal", paddingRight: "6px" }}
            ></FontAwesomeIcon>
            La Segunda
          </a>
          <div className="itemContainer">
            <span id="phone-number">
              <FontAwesomeIcon
                icon={faHeadphones}
                style={{ color: "red", paddingRight: "6px", fontSize: "30px" }}
              ></FontAwesomeIcon>
              210.314.2740
            </span>
            <span id="address">
              <FontAwesomeIcon
                icon={faMicrophone}
                style={{ color: "teal", paddingRight: "6px", fontSize: "30px" }}
              ></FontAwesomeIcon>
              1302 S St. Mary's
            </span>
            <span id="email-address">
              <a href="mailto: someEmail@email.com">
                <FontAwesomeIcon
                  icon={faIcons}
                  style={{
                    color: "yellow",
                    paddingRight: "6px",
                    fontSize: "30px",
                    textShadow: "black 2px 2px",
                  }}
                ></FontAwesomeIcon>
                Email
              </a>
            </span>
            <div className="socials">
              <img
                src={require("../../public/images/instagram-icon.png")}
                style={{
                  height: "50px",
                  marginLeft: "40px",
                  marginRight: "30px",
                }}
              ></img>
              <img
                src={require("../../public/images/facebook-icon.png")}
                style={{ height: "50px" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
