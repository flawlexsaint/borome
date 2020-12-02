import React from "react";
import "./FaqHeader.css";

const FaqHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="faqheader_section">
        <h1 className="faq_header">We’re always available</h1>
        <p className="faq_text mt-4">
          Take control of that situation with loans that reach <br /> your bank
          account instantly anytime you need it
        </p>
      </div>
    </div>
  );
};

export default FaqHeader;
