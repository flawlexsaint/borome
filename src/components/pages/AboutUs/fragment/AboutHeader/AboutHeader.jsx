import React from "react";
import "./AboutHeader.css";


import Aboutus_header_img from "../../../../images/about/about_header_img.svg";

const AboutUs = () => {
  return (
    <>
      <div className="row about_header_margin">
        <div className="col-lg-6">
          <h1 className="about_us_header">
            Borome believes in enabling people.
          </h1>
        </div>
        <div className="col-lg-6 pt-5">
          <p className="about_us_text">
            We believe our service would enable people be confident in their
            abilities to handle unforseen pressing issues. We want our loans to
            always be available exactly when needed.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <img src={Aboutus_header_img} alt="" className="card-img" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
