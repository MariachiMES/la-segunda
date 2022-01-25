import React from "react";
import { Parallax } from "react-parallax";
import "./Vendors.scss";
export default function Vendors() {
  return (
    <div className="vendors">
      <div className="vendor-1-container">
        <Parallax
          className="vendor-left"
          bgImage={require("../../public/images/P1240799.JPG")}
          bgImageStyle={{ backgroundSize: "cover" }}
          strengt={1000}
        >
          <div className="vendor-1-text">
            <h1>Vendor 1</h1>
          </div>
        </Parallax>
        <div className="vendor-right">
          <h1>Someone Selling Stuff</h1>
          <h3>The Stuff They Sell</h3>
        </div>
      </div>
      <div className="vendor-2-container">
        <div className="vendor-left">
          {" "}
          <h1>Someone Selling Stuff</h1>
          <h3>The Stuff They Sell</h3>
        </div>
        <Parallax
          className="vendor-right"
          bgImage={require("../../public/images/P1240797.JPG")}
          bgImageStyle={{ backgroundSize: "cover" }}
          strengt={1000}
        >
          {" "}
          <div className="vendor-2-text">
            <h1>Vendor 2</h1>
          </div>
        </Parallax>
      </div>
      <div className="vendor-1-container">
        <Parallax
          className="vendor-left"
          bgImage={require("../../public/images/P1240695.JPG")}
          bgImageStyle={{ backgroundSize: "cover" }}
          strengt={1000}
        >
          <div className="vendor-1-text">
            <h1>Vendor 3</h1>
          </div>
        </Parallax>
        <div className="vendor-right">
          <h1>Someone Selling Stuff</h1>
          <h3>The Stuff They Sell</h3>
        </div>
      </div>
      <div className="vendor-2-container">
        <div className="vendor-left">
          {" "}
          <h1>Someone Selling Stuff</h1>
          <h3>The Stuff They Sell</h3>
        </div>
        <Parallax
          className="vendor-right"
          bgImage={require("../../public/images/P1240830.JPG")}
          bgImageStyle={{ backgroundSize: "cover" }}
          strengt={1000}
        >
          {" "}
          <div className="vendor-2-text">
            <h1>Vendor 4</h1>
          </div>
        </Parallax>
      </div>
      <div className="vendor-3-container">
        <div className="vendor-left"></div>
        <div className="vendor-right"></div>
      </div>
    </div>
  );
}
