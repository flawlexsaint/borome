import React from "react";
import "./SneakpeakHeader.css";


import Count_bg from "../../../../images/about/user_bg.svg";

const SneakpeakHeader = () => {
  return (
    <>
      <div className="container">
        <div className="row sneak_peak_sm">
          <div className="col-md-9 mx-auto">
            <h1 className="sneakpeak_header">
              A Sneak peek of
              <span className="sneakpeak_span_color">
                <br />
                BoroMe’s impressive numbers
              </span>
            </h1>
            <div className="row mt-5">
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3">
                <img src={Count_bg} alt="" className="card-img" />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <div className="">
                    <h1 className="count_header mb-4">5mins</h1>
                    <p className="count_text">
                      Loan <br /> Processing <br /> Time
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3">
                <img src={Count_bg} alt="" className="card-img" />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <div className="">
                    <h1 className="count_header mb-4">45k+</h1>
                    <p className="count_text">
                      Happy <br /> Customers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3">
                <img src={Count_bg} alt="" className="card-img" />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <div className="">
                    <h1 className="count_header mb-4">100k+</h1>
                    <p className="count_text">
                      Loan <br /> Requests
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-3">
                <img src={Count_bg} alt="" className="card-img" />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                  <div className="">
                    <h1 className="count_header mb-4">N25m</h1>
                    <p className="count_text">
                      Loaned To <br /> Customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SneakpeakHeader;
