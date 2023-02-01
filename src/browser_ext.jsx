import React from "react";

const BrowserExt = () => {
  return (
    <div>
      <div className="main">
        {/* <div className="footer"> */}
        <div className="browser-ext-div">
          <div>
            <button className="button">Install Extension for Chrome</button>
          </div>
          <div className="browser-icons-div">
            <a href="">
              <img className="browser-icons" src={chrome} alt="chrome" />
            </a>
            <a href="">
              <img className="browser-icons" src={firefox} alt="firefox" />
            </a>
            <a href="">
              <img className="browser-icons" src={brave} alt="brave" />
            </a>
            <a href="">
              <img className="browser-icons" src={edge} alt="edge" />
            </a>
            <a href="">
              <img className="browser-icons" src={opera} alt="opera" />
            </a>
          </div>
          <div className="browser-names">
            <span>Chrome</span>
            <span>Firefox</span>
            <span>Brave</span>
            <span>Edge</span>
            <span>Opera</span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

const opera = "https://img.icons8.com/color/480/null/opera--v1.png";
const chrome = "https://img.icons8.com/color/480/null/chrome--v1.png";
const brave = "https://img.icons8.com/color/480/null/brave-web-browser.png";
const edge = "https://img.icons8.com/color/480/null/ms-edge-new.png";
const firefox =
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg";

export default BrowserExt;
