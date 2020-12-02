import React from "react";
import "./How.css";

import Navbar from "../../layout/Navbar/Navbar";
import HowHeader from "./fragments/HowHeader/HowHeader";
import BoromeApp from "./fragments/BoromeApp/BoromeApp";
import Registration from "./fragments/Registration/Registration";
import AppSuccess from "./fragments/AppSuccess/AppSuccess";
import Download from "../../layout/Download/Download";
import Footer from "../../layout/Footer/Footer";

const How = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 how_header_bg">
          <Navbar />
          <div className="container">
            <HowHeader />
            <div className="contained">
              <BoromeApp />
              <Registration />
              <AppSuccess />
            </div>
          </div>
          <Download />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default How;
