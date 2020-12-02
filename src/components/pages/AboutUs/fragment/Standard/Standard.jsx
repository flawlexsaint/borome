import React from "react";
import "./Standard.css";

import Standard_img from "../../../../images/about/standard_right.jpg";

const Standard = () => {
  return (
    <div className="container">
      <div className="standard_section">
        <div className="standard_left_pane d-flex align-items-center">
          <div className="row">
            <div className="mb-5">
              <h1 className="standard_header mb-4">
                Industry standard technology
              </h1>
              <p className="standard_text">
                We utilize industry standard technology to ensure our system is
                smarter, more reliable and easy to use. Your information is
                secured properly using enterprise grade server security and your
                card information is stored on PCI DSS compliant servers. We
                partner with top financial institutions to ensure your data is
                safe and data use is strictly governed by our privacy policy.
              </p>
            </div>
            <div className="">
              <h1 className="standard_header mb-4">
                Industry standard technology
              </h1>
              <p className="standard_text">
                We utilize industry standard technology to ensure our system is
                smarter, more reliable and easy to use. Your information is
                secured properly using enterprise grade server security and your
                card information is stored on PCI DSS compliant servers. We
                partner with top financial institutions to ensure your data is
                safe and data use is strictly governed by our privacy policy.
              </p>
            </div>
          </div>
        </div>
        <div className="standard_right_pane">
          <img src={Standard_img} alt="" className="card-img" />
        </div>
      </div>
    </div>
  );
};

export default Standard;
