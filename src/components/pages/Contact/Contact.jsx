import React from "react";
import "./Contact.css";

import Navbar from "../../layout/Navbar/Navbar";
import ContactHeader from "./fragment/ContactHeader/ContactHeader";
import ContactList from "./fragment/ContactList/ContactList";
import Download from "../../layout/Download/Download";
import Footer from "../../layout/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 contact_bg">
          <Navbar />
          <div className="container">
            <ContactHeader />
            <ContactList />
          </div>
          <div className="contact_footer_margin">
            <Download />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
