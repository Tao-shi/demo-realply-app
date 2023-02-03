import React from "react";
import "./main.css";
import Slide from "react-reveal/Slide";
import Nav from "./Nav";

const Landing = () => {
  return (
    <div className="landing main-container main">
      <div className="landing-contents">
        <div className="landing-headeer">
          <h1 className="landing-heading">10x your LinkedIn on Auto-Pilot</h1>
        </div>
        <div className="landing-text-div">
          <p className="landing-text">
            We write, craft and send tousands of data driven, messages to your
            target audience so you can drive more revenue
          </p>
        </div>
        <button className="button">Request a Demo</button>
      </div>
    </div>
  );
};

export default Landing;
