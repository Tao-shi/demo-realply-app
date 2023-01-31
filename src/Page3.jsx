import React from "react";
import benefit1 from "./svg/benefit_icon1.png";
import benefit2 from "./svg/benefit_icon2.png";

const Page3 = () => {
  return (
    <div className="benefits-container">
      <div className="benefit-div">
        <div className="benefit-icon">
          <img src={benefit1} />
        </div>
        <div className="benefit-heading">Intsant Lead Notification</div>
        <div className="benefit-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore
          ipsa repudiandae distinctio sint doloribus. At ab voluptates nam, a
          error, maxime perferendis corrupti tenetur repellat similique iusto
          beatae tempore!
        </div>
      </div>
      <div className="benefit-div">
        <div className="benefit-icon">
          <img src={benefit2} />
        </div>
        <div className="benefit-heading">ROI Tracking System</div>
        <div className="benefit-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore
          ipsa repudiandae distinctio sint doloribus. At ab voluptates nam, a
          error, maxime perferendis corrupti tenetur repellat similique iusto
          beatae tempore!
        </div>
      </div>
      <div className="benefit-div">
        <div className="benefit-icon">
          <img src={benefit2} />
        </div>
        <div className="benefit-heading">Auto-Pilot Marketing</div>
        <div className="benefit-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore
          ipsa repudiandae distinctio sint doloribus. At ab voluptates nam, a
          error, maxime perferendis corrupti tenetur repellat similique iusto
          beatae tempore!
        </div>
      </div>
    </div>
  );
};

export default Page3;
