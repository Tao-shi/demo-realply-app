import React from "react";
import logo1 from "./svg/realply_icon.png";
import logo2 from "./svg/realply_text.png";
import icon1 from "./svg/browser-logo.png";
import Bounce from "react-reveal/Bounce";
// import "./nav.css";

function Nav() {
  return (
    <nav className="nav ">
      <div className="logo-nav">
        <Bounce>
          <img
            id="logo1"
            className="logo-nav icons-nav"
            src={logo1}
            alt="realply_logo"
          />
        </Bounce>
        <img
          id="logo2"
          className="logo-nav icons-nav"
          src={logo2}
          alt="realply_logo"
        />
      </div>
      <div className="nav-links">
        <a href="">About</a>
        <a href="">How it works</a>
        <a href="">Testimonials</a>
        <a href="">Press</a>
      </div>
      <div className="nav-right">
        <img className="icon-nav icons-nav" src={icon1} alt="web-icon" />
        <a href="">EN</a>
        <button className="nav-button">Request a Demo</button>
      </div>
    </nav>
  );
}

export default Nav;
