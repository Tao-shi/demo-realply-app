import React from "react";
import logobig from "./svg/logo-big.png";

const PageOne = () => {
  return (
    <div className="page1 main">
      <div className="full-logo">
        <img id="big-logo" src={logobig} alt="realply-logo" />
      </div>
    </div>
  );
};

export default PageOne;
