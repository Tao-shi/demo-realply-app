import React from "react";
import logo from "../svg/realply-logo.png";
import insta from "../svg/instagram.png";
import twitter from "../svg/twitter.png";
import linkedin from "../svg/linkedin.png";
import fb from "../svg/facebook.png";
import yt from "../svg/youtube.png";

const Footer = () => {
  return (
    <div className="page10 ">
      <div className="footer">
        <div id="border-up"> </div>
        <div className="addr">
          <div className="footer-logo">
            <img src={logo} alt="realply-logo" />
          </div>
          <span>7014 E Camelback Rd. Suite B100A, Scottsdale AZ 85251</span>
          <div className="legal">
            <span id="legal-head">Legal</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookies Policy</span>
          </div>
        </div>
        <div id="border-down"> </div>
        <div className="socials">
          <span id="copyright-text">
            Copyright 2020 Realply. All rights reserved. Various trademarks held
            by their respective owners.
          </span>
          <div className="social-icons">
            <a href="">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="">
              <img src={fb} alt="facebook" />
            </a>
            <a href="">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="">
              <img src={insta} alt="instagram" />
            </a>
            <a href="">
              <img src={yt} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
