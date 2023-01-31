import React from "react";
import forbes from "./svg/forbes.png";
import yahoo from "./svg/yahoo.png";
import entrepreneur from "./svg/entrepreneur.png";
import business from "./svg/business.png";
import usa_today from "./svg/usa_today.png";

const Page2 = () => {
  return (
    <div className="featured-div-container">
      <div className="featured-div">
        {/* <div>Featured in</div> */}
        <img src={forbes} />
        <img src={yahoo} />
        <img src={entrepreneur} />
        <img src={business} />
        <img src={usa_today} />
      </div>
    </div>
  );
};

export default Page2;
