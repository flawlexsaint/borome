import React from "react";
import "./HomepageDetails.css";

import Detail_icon from "../../../../images/home/loan_details.svg";
import Ios from "../../../../images/home/ios.svg";
import Android from "../../../../images/home/android.svg";

const HomepageDetails = () => {
  return (
    <>
      <div className="homepage_details mt-5 hd_sm">
        <div className="homepage_left_pane">
          <img src={Detail_icon} alt="" className="card-img" />
        </div>
        <div className="homepage_right_pane">
          <div className="">
            <h1 className="homepage_details_header mb-5">
              Get your loan in 5 minutes. <br />
              <span className="header_color_span">
                Download the BoroMe mobile app
              </span>
            </h1>
            <p className="homepage_details_text">
              <span className="detail_count">1</span>Sign up for an account with
              your full name, email and phone number..
            </p>
            <p className="homepage_details_text">
              <span className="detail_count">2</span>Fill out your profile
              withyour contacts, personal information, and banking details.
            </p>
            <p className="homepage_details_text">
              <span className="detail_count">3</span>Apply for a loan after you
              accept the offered rates and our terms or repayment.
            </p>
            <p className="homepage_details_text">
              <span className="detail_count">4</span>Get your money instantly in
              your BoroMe Wallet which can then be transferred to your bank.
            </p>
            <div className="d-flex align-items-center mt-5">
              <img src={Ios} alt="" />
              <img src={Android} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageDetails;
