import React from "react";
import "./InformationSection.css";

import Brag from "../../../../images/home/brag.svg";
import Pricing from "../../../../images/home/pricing.svg";
import Safety from "../../../../images/home/safety.svg";

const InformationSection = () => {
  return (
    <div className="row information_margin">
      <div className="col-md-4 p-4">
        <div className="row">
          <div className="col-4">
            <img src={Brag} alt="" className="card-img" />
          </div>
          <div className="col-8">
            <h1 className="brag_header">Brag about your credit score</h1>
            <p className="brag_text mt-4 mb-4">
              Building and maintaining high credit scores gets you a number of
              benefits exclusive to BoroMe clients like higher amounts and
              longer loan dirations.
            </p>
            <button className="btn custom_btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-3">
        <div className="row">
          <div className="col-4">
            <img src={Pricing} alt="" className="card-img" />
          </div>
          <div className="col-8">
            <h1 className="brag_header">
              Transparent pricing - no hidden costs
            </h1>
            <p className="brag_text mt-4 mb-4">
              Clear transparent pricing for all our loans and collections so you
              are always in the know about all the fees and withdrawals - no
              arbitrary charges.
            </p>
            <button className="btn custom_btn">Calculate</button>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-3">
        <div className="row">
          <div className="col-4">
            <img src={Safety} alt="" className="card-img" />
          </div>
          <div className="col-8">
            <h1 className="brag_header">You’re always safe. we ensure it!</h1>
            <p className="brag_text mt-4 mb-4">
              All your information is stored securely with bank grade security
              and is encrypted. Your data is safe with us and not shared with
              3rd parties.
            </p>
            <button className="btn custom_btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
