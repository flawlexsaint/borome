import React from "react";
import "./AppSuccess.css";

import App_success from "../../../../images/how/appsuccess.jpg";


const AppSuccess = () => {
  return (
    <div className="appsuccess_grid_section">
      <div className="appsuccess_left_pane">
        <h3 className="appsuccess_header">
          Submit your application and get your loan
        </h3>
        <p className="appsuccess_text mt-4">
          We utilize industry standard technology to ensure our system is
          smarter, more reliable and easy to use. Your information is secured
          properly using enterprise grade server security and your card
          information is stored on PCI DSS compliant servers. We partner with
          top financial institutions to ensure your data is safe and data use is
          strictly governed by our privacy policy.
        </p>
      </div>
      <div className="appsuccess_right_pane">
        <img src={App_success} alt="" className="card-img" />
      </div>
    </div>
  );
};

export default AppSuccess;
