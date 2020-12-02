import React from "react";
import "./FaqContact.css";

import Faq_mobile from "../../../../images/faq/faq_mobile.svg";
import Faq_contact from "../../../../images/faq/faq_contact.svg";

const FaqContact = () => {
  return (
    <>
      <div className="row faq_contact">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="d-flex align-items-center mb-5 mt-5 justify-content-center">
            <img src={Faq_mobile} alt="" />
            <div className="ml-4">
              <h3 className="faq_contact_header">0801 847 8894</h3>
              <div className="d-flex">
                <p className="faq_contact_text mr-4">
                  Mon - Fri <br /> Sat & Sun
                </p>
                <p className="faq_contact_text">
                  9am-6pm <br /> 11am - 2pm
                </p>
              </div>
              <div className="btn faq_btn">Call Now</div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="d-flex align-items-center mb-5 mt-5 justify-content-center">
            <img src={Faq_contact} alt="" />
            <div className="ml-4">
              <h3 className="faq_contact_header">Chat with us</h3>
              <p className="faq_contact_text">
                Everyday <br /> 9am-8pm
              </p>
              <div className="btn faq_btn">Start Chat</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContact;
