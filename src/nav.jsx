import React from "react";
import logo1 from "./realply-logo.png";
import icon1 from "./browser-logo.png";
import "./nav.css";

function FunctionalComponent() {
  return (
    <div className="nav-container">
      <div className="navigation">
        <div className="logo-nav">
          <img className="logo-nav icons-nav" src={logo1} alt="realply_logo" />
        </div>
        <div className="nav-links">
          <a href="">About</a>
          <a href="">How it works</a>
          <a href="">Testimonials</a>
          <a href="">Press</a>
        </div>
        <div className="nav-right">
          <img className="icon-nav icons-nav" src={icon1} alt="web-icon" />
          <span className="lang-div">
            <a href="">EN</a>
          </span>
          <button className="button">Request a Demo</button>
        </div>
      </div>
    </div>
  );
}

export default FunctionalComponent;

const opera = "https://icons8.com/icon/63646/opera";
const chrome = "https://icons8.com/icon/63785/chrome";
const brave = "https://icons8.com/icon/ZAPJV5FAO4PW/brave-web-browser";
const edge = "https://icons8.com/icon/-5h34CbaUb09/microsoft-edge";
const firefox =
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg";
