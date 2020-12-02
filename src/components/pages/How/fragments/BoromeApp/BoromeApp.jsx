import React from "react";
import "./BoromeApp.css";

import BoromeApp_download from "../../../../images/how/borome_download.jpg";

const BoromeApp = () => {
  return (
    <div className="borome_grid_section">
      <div className="borome_left_pane">
        <h3 className="borome_header mb-4">Start by downloading the BoroMe app</h3>
        <p className="borome_text">
          We utilize industry standard technology to ensure our system is
          smarter, more reliable and easy to use. Your information is secured
          properly using enterprise grade server security and your card
          information is stored on PCI DSS compliant servers. We partner with
          top financial institutions to ensure your data is safe and data use is
          strictly governed by our privacy policy.
        </p>
      </div>
      <div className="borome_right_pane">
        <img src={BoromeApp_download} alt="" className="card-img" />
      </div>
    </div>
  );
};

export default BoromeApp;

