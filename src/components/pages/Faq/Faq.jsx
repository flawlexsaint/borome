import React from "react";
import "./Faq.css";

import Navbar from "../../layout/Navbar/Navbar";
import FaqContact from "./fragment/FaqContact/FaqContact";
import FaqForm from "./fragment/FaqForm/FaqForm";
import FaqHeader from "./fragment/FaqHeader/FaqHeader";
import Download from "../../layout/Download/Download";
import Footer from "../../layout/Footer/Footer";

const Faq = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 faq_bg">
          <Navbar />
          <div className="container">
            <FaqHeader />
          </div>
          <div className="row">
            <div className="col-12 faq_ellipse">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="container">
                    <FaqContact />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 m-auto">
                  <FaqForm />
                </div>
              </div>
              <Download />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
