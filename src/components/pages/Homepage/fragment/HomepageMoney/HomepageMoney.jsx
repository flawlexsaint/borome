import React from "react";
import "./HomepageMoney.css";

import Pane_one from "../../../../images/home/test.svg";
import Pane_two from "../../../../images/home/test_2.svg";
import Pane_three from "../../../../images/home/test_3.svg";

import Arrow_up from "../../../../images/home/arrow_up.svg";
import Arrow_down from "../../../../images/home/arrow_down.svg";

const HomepageMoney = () => {
  return (
    <div className="container homepage_money_margin hide">
      <div className="row">
        <div className="col-6">
          <h1 className="money_section_header mb-5">
            What our some <br /> of customers <br /> say about us
          </h1>
          <div className="money_section_text">
            Take control of that situation with loans <br /> that reach your
            bank account instantly <br /> anytime you need it
          </div>
        </div>
        <div className="col-6">
          <div className="testimonial_pane bg-dark p-4">
            <div className="d-flex align-items-center hiden" id="blogThree">
              <img src={Pane_one} alt="" />
              <div className="ml-3">
                <h1 className="test_name">John Doe</h1>
                <p className="money_section_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, dignissimos? Ipsa alias iure nesciunt inventore
                  optio. Possimus voluptatem ipsa hic.
                </p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={Pane_two} alt="" />
              <div className="ml-3">
                <h1 className="test_name">Saka Badmus</h1>
                <p className="money_section_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, dignissimos? Ipsa alias iure nesciunt inventore
                  optio. Possimus voluptatem ipsa hic.
                </p>
              </div>
            </div>
            <div className="d-flex mt-4" id="blogThree">
              <img src={Pane_three} alt="" />
              <div className="ml-3">
                <h1 className="test_name">Darlene Warren</h1>
                <p className="money_section_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, dignissimos? Ipsa alias iure nesciunt inventore
                  optio. Possimus voluptatem ipsa hic.
                </p>
              </div>
            </div>
          </div>
          <a href="#blogOne" className="blog_bg mr-2">
            <img src={Arrow_down} alt="" />
          </a>
          <a href="#blogThree" className="blog_bg">
            <img src={Arrow_up} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomepageMoney;
