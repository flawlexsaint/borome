import React from "react";
import "./HomepageHeader.css";

import Homepage_header_img from "../../../../images/home/banner.svg";
import Dropdown from "../../../../images/home/dropdown.svg";

const HomepageHeader = () => {
  return (
    <>
      <div className="homepage_section mt-5">
        <div className="homepage_text_section">
          <div className="">
            <h1 className="homepage_header mb-3">
              Instant access to loans in minutes
            </h1>
            <p className="homepage_text mb-5">
              Take control of that situation with loans that reach your bank
              account instantly anytime you need it
            </p>
            <a href="#" className="homepage_btn">
              Learn more <img src={Dropdown} alt="" className="ml-1" />
            </a>
          </div>
        </div>
        <div className="homepage_image_section">
          <img src={Homepage_header_img} alt="" className="card-img" />
        </div>
      </div>
    </>
  );
};

export default HomepageHeader;
