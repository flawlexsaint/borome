import React from "react";
import "./Registration.css";

import Registration_img from "../../../../images/how/borome_registration.jpg";

const Registration = () => {
  return (
    <div className="registration_grid_section">
      <div className="registration_left_pane">
        <img src={Registration_img} alt="" className="card-img" />
      </div>
      <div className="registration_right_pane">
        <h3 className="registration_header">
          Register and complete your profile
        </h3>
        <p className="registration_text mt-4">
          We want to drive financial inclusion in Nigeria by being the most
          reliable way Nigerians can get access to loans to meet pressing needs.
          We believe in providing a service that people can rely on and vouch
          for. We are committed to giving Nigerians access to credit in the most
          reliable means possible. We want to use technology to make this
          services as instant as possible.
        </p>
      </div>
    </div>
  );
};

export default Registration;

