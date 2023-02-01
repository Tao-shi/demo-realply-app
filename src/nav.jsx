import React from "react";
import logo1 from "./svg/realply-logo.png";
import icon1 from "./svg/browser-logo.png";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
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
          {/* <span className="lang-div"> */}
          <a href="">EN</a>
          {/* </span> */}
          <button className="button">Request a Demo</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
