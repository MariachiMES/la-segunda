import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faRecordVinyl,
  faIcons,
  faGlassMartiniAlt,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="porfolio" className="logo">
            <FontAwesomeIcon
              icon={faGlassMartiniAlt}
              style={{ color: "teal", paddingRight: "6px" }}
            ></FontAwesomeIcon>
            <h3 className="retro-team-font">Bartique & Gallery</h3>
          </a>
          <div className="itemContainer">
            <span id="phone-number" className="retro-team-font">
              <FontAwesomeIcon
                icon={faHeadphones}
                style={{ color: "red", paddingRight: "6px", fontSize: "30px" }}
              ></FontAwesomeIcon>
              210.314.2740
            </span>
            <span id="address" className="retro-team-font">
              <FontAwesomeIcon
                icon={faMicrophone}
                style={{ color: "teal", paddingRight: "6px", fontSize: "30px" }}
              ></FontAwesomeIcon>
              1302 S St. Mary's
            </span>
            <span id="email-address" className="retro-team-font">
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
              <a
                href="https://www.instagram.com/la_segunda_bartiqueandgallery/"
                targe="_blank"
              >
                <img
                  src={require("../../public/images/instagram-icon.png")}
                  style={{
                    height: "50px",
                    marginLeft: "40px",
                    marginRight: "30px",
                  }}
                ></img>
              </a>
              <a
                href="https://m.facebook.com/people/La-Segunda-Bartique-Gallery/100073228684341/"
                targe="_blank"
              >
                <img
                  src={require("../../public/images/facebook-icon.png")}
                  style={{ height: "50px" }}
                ></img>
              </a>
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
