import React from "react";
import "./Terms.css";

import Navbar from "../../layout/Navbar/Navbar";
import TandC from "./fragment/TandC/TandC";
import DandI from "./fragment/DandI/DandI";
import Footer from "../../layout/Footer/Footer";
import Download from "../../layout/Download/Download";

const Terms = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 terms_bg">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto tandc_margin_top">
                <TandC />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mx-auto terms_ellipse">
              <div className="container">
                <DandI />
              </div>
            </div>
          </div>
          <Download />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Terms;
