import React from "react";
import forbes from "./svg/forbes.png";
import yahoo from "./svg/yahoo.png";
import entrepreneur from "./svg/entrepreneur.png";
import business from "./svg/business.png";
import usa_today from "./svg/usa_today.png";

const Page2 = () => {
  return (
    <div className="main">
      <div className="featured-div-container">
        <div>
          <span>Featured in</span>
        </div>
        <div className="featured-div">
          <img src={forbes} />
          <img src={yahoo} />
          <img src={entrepreneur} />
          <img src={business} />
          <img src={usa_today} />
        </div>
      </div>
    </div>
  );
};

export default Page2;
