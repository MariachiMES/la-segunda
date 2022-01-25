import React from "react";
import Herobanner from "../components/Herobanner/Herobanner";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";
import "./Landing.scss";
import { useState } from "react";

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Herobanner></Herobanner>
      <div className="spacer"></div>
      <About></About>
      <div className="spacer"></div>
    </div>
  );
}
