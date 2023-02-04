import React from "react";
import forbes from "../svg/forbes.png";
import yahoo from "../svg/yahoo.png";
import entrepreneur from "../svg/entrepreneur.png";
import business from "../svg/business.png";
import usa_today from "../svg/usa_today.png";

const Page2 = () => {
  return (
    <div className=" page2 main">
      <div data-aos="fade-up" className="featured-div-container">
        <div id="featured-heading">
          <span>Featured in</span>
        </div>
        <div className="featured-div">
          <img src={forbes} alt="forbes" />
          <img src={yahoo} alt="yahoo" />
          <img src={entrepreneur} alt="entrepreneur" />
          <img src={business} alt="business" />
          <img src={usa_today} alt="usa-today" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
