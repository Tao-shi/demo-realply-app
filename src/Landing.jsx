import React from "react";
import "./main.css";
import Nav from "./Nav";

const Landing = () => {
  return (
    <div className="landing main-container main">
      <div data-aos="zoom-in-up" className="landing-contents">
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
        {/* <div className="animate__animated animate__fadeInUp">
          <Nav />
        </div> */}
      </div>
    </div>
  );
};

export default Landing;
