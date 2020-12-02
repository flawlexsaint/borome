import React from "react";
import "./Download.css";

import Ios from "../../images/home/ios.svg";
import Android from "../../images/home/android.svg";

const Download = () => {
  return (
    <div className="row">
      <div className="col-12 download_bg d-flex align-items-center justify-content-between">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="download_left_pane">
              <h1 className="download_header">
                Are you ready to Boro? <br />
                <span className="download_header_color">
                  Download the BoroMe mobile app
                </span>
              </h1>
            </div>
            <div className="download_right_pane d-flex align-items-center justify-content-between">
              <a href="#">
                <img src={Ios} alt="" className="mr-2 custom-card-img" />
              </a>
              <a href="#">
                <img src={Android} alt="" className="custom-card-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
