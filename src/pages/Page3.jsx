import React from "react";
import benefit1 from "../svg/benefit_icon1.png";
import benefit2 from "../svg/benefit_icon2.png";
import benefit3 from "../svg/benefit_icon3.png";

const Page3 = () => {
  return (
    <div className=" page3 main">
      <div data-aos="fade-up" className="benefits-container">
        <div className="benefit-div">
          <div className="benefit-icon">
            <img src={benefit1} />
          </div>
          <div className="benefit-heading">Intsant Lead Notification</div>
          <div className="benefit-text">
            Lorem ipsum dolor sit amet consectetur. Risus sit vel sit in quisque
            neque. Elit amet ut pellentesque purus morbi fringilla.
          </div>
        </div>
        <div className="benefit-div">
          <div className="benefit-icon">
            <img src={benefit2} />
          </div>
          <div className="benefit-heading">ROI Tracking System</div>
          <div className="benefit-text">
            Lorem ipsum dolor sit amet consectetur. Risus sit vel sit in quisque
            neque. Elit amet ut pellentesque purus morbi fringilla.
          </div>
        </div>
        <div className="benefit-div">
          <div className="benefit-icon">
            <img src={benefit3} />
          </div>
          <div className="benefit-heading">Auto-Pilot Marketing</div>
          <div className="benefit-text">
            Lorem ipsum dolor sit amet consectetur. Risus sit vel sit in quisque
            neque. Elit amet ut pellentesque purus morbi fringilla.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
