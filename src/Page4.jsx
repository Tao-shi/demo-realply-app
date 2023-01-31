import React from "react";
import remax from "./svg/remax.png";
import exit from "./svg/exit.png";
import exp from "./svg/exp.png";
import keller from "./svg/keller.png";
import coldwell from "./svg/coldwell.png";

const Page4 = () => {
  return (
    <div className="featured-div-container">
      <div className="featured-div">
        <p>Trusted Nationwide</p>
        <img src={remax} />
        <img src={exit} />
        <img src={exp} />
        <img src={keller} />
        <img src={coldwell} />
      </div>
    </div>
  );
};

export default Page4;
