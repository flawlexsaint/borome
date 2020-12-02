import React from "react";
import "./ContactHeader.css";

import Contact_img from "../../../../images/contact/contact_img.svg";

const ContactHeader = () => {
  return (
    <div className="contact_section">
      <div className="contact_left_pane">
        <h1 className="contact_header">
          Frequently <br /> asked questions
        </h1>
      </div>
      <div className="contact_right_pane">
        <img src={Contact_img} alt="" className="card-img" />
      </div>
    </div>
  );
};


export default ContactHeader;
