import React from "react";
import "./AboutUs.css";

import Navbar from "../../layout/Navbar/Navbar";
import AboutHeader from "../AboutUs/fragment/AboutHeader/AboutHeader";
import SneakpeakHeader from "./fragment/SneakpeakHeader/SneakpeakHeader";
import Standard from "../AboutUs/fragment/Standard/Standard";
import Blog from "./fragment/Blog/Blog";
import Download from "../../layout/Download/Download";
import Footer from "../../layout/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 about_us_bg">
          <Navbar />
          <div className="container">
            <AboutHeader />
          </div>
        </div>
      </div>
      <SneakpeakHeader />
      <div className="row">
        <div className="col-12 about_us_ellipse">
          <div className="container standard_section_margin">
            <Standard />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 about_right_bg">
          <div className="container"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 about_blog_margin">
          <div className="container mb-5 pb-5">
            <Blog />
          </div>
        </div>
      </div>
      <Download />
      <Footer />
    </>
  );
};

export default AboutUs;
