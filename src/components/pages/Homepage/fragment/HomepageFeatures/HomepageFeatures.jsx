import React from "react";
import "./HomepageFeatures.css";

import Ease_icon from "../../../../images/home/ease_icon.svg";
import Speed_icon from "../../../../images/home/speed_icon.svg";
import Reliable_icon from "../../../../images/home/reliable_icon.svg";

const HomepageFeatures = () => {
  return (
    <div className="row hf_sm">
      <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 p-4">
        <h1 className="homepage_pane_one">100+</h1>
        <h2 className="homepage_features_header">
          reasons <br /> to choose <br /> BoroMe
        </h2>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 p-4">
        <img src={Ease_icon} alt="" />
        <h2 className="homepage_sub_header">Easy to use</h2>
        <p className="homepage_features_text">
          Our process is simple and User friendly. Simply complete your profile
          and fill in your banking information. You get credited.
        </p>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 p-4">
        <img src={Speed_icon} alt="" />
        <h2 className="homepage_sub_header">Super fast</h2>
        <p className="homepage_features_text">
          BoroMe knows how urgent you need money to resolve pressing issues -
          that is why we does not hesitate to be there right when you need us.
        </p>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 p-4">
        <img src={Reliable_icon} alt="" />
        <h2 className="homepage_sub_header">Very reliable</h2>
        <p className="homepage_features_text">
          With the integration of Artificial Intelligence, you can count on our
          systems to be available and ready to disburse instantly. No storiesT
        </p>
      </div>
    </div>
  );
};

export default HomepageFeatures;
