import React from "react";
import "./Footer.css";

import Footer_logo from "../../images/layout/footer_logo.svg";

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 footer_bg">
        <div className="container ">
          <div className="footer_grid_section mt-5 mb-4 pt-4 pb-4">
            <div className="pane_one">
              <a href="/">
                <img src={Footer_logo} alt="" />
              </a>
              <p className="footer_text mt-2">
                ©2020 <br /> All Rights Reserved.
              </p>
            </div>
            <div className="pane_two mx-auto">
              <ul>
                <li>
                  <a href="#" className="footer_header mb-3">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="pane_three mx-auto">
              <ul>
                <li>
                  <a href="#" className="footer_header mb-3">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Chat with us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Send an email
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="pane_four mx-auto">
              <ul>
                <li>
                  <a href="#" className="footer_header mb-3">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Medium
                  </a>
                </li>
              </ul>
            </div>
            <div className="pane_five mx-auto">
              <ul>
                <li>
                  <a href="#" className="footer_header mb-3">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="footer_text">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
