import React from "react";
import "./Homepage.css";

import Navbar from "../../layout/Navbar/Navbar";
import HomepageDetails from "./fragment/HomepageDetails/HomepageDetails";
import HomepageFeatures from "./fragment/HomepageFeatures/HomepageFeatures";
import HomepageHeader from "./fragment/HomepageHeader/HomepageHeader";
import HomepageMoney from "./fragment/HomepageMoney/HomepageMoney";
import Download from "../../layout/Download/Download";
import Footer from "../../layout/Footer/Footer";
import InformationSection from "./fragment/InformationSection/InformationSection";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <HomepageHeader />
      </div>
      <div className="row">
        <div className="col-12 homepage_bg">
          <div className="container homepage_feature_margin">
            <HomepageFeatures />
          </div>
        </div>
        <div className="container">
          <HomepageDetails />
        </div>
      </div>
      <div className="row hide">
        <div className="col-12 money_img">
          <div className="card-img-overlay money_bg">
            <HomepageMoney />
          </div>
        </div>
      </div>
      <div className="container">
        <InformationSection />
      </div>
      <Download />
      <Footer />
    </>
  );
};

export default Homepage;
