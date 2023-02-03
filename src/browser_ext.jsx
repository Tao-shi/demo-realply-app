import React from "react";
import Slide from "react-reveal/Slide";

const BrowserExt = () => {
  return (
    <Slide bottom>
      <div>
        <div className="browser-ext">
          <div className="browser-ext-div">
            <div>
              <button className="button">Install Extension for Chrome</button>
            </div>
            <div className="browser-icons-div">
              <div className="browser">
                <a href="">
                  <img className="browser-icons" src={chrome} alt="chrome" />
                </a>
                <span>Chrome</span>
              </div>
              <div className="browser">
                <a href="">
                  <img className="browser-icons" src={firefox} alt="firefox" />
                </a>
                <span>Firefox</span>
              </div>
              <div className="browser">
                <a href="">
                  <img className="browser-icons" src={brave} alt="brave" />
                </a>
                <span>Brave</span>
              </div>
              <div className="browser">
                <a href="">
                  <img className="browser-icons" src={edge} alt="edge" />
                </a>
                <span>Edge</span>
              </div>
              <div className="browser">
                <a href="">
                  <img className="browser-icons" src={opera} alt="opera" />
                </a>
                <span>Opera</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

const opera = "https://img.icons8.com/color/480/null/opera--v1.png";
const chrome = "https://img.icons8.com/color/480/null/chrome--v1.png";
const brave = "https://img.icons8.com/color/480/null/brave-web-browser.png";
const edge = "https://img.icons8.com/color/480/null/ms-edge-new.png";
const firefox =
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg";

export default BrowserExt;
