import React from "react";
import "./ContactList.css";

const ContactList = () => {
  return (
    <div className="contact_list_section">
      <div className="row">
        <div className="col-11">
          <div className="container contact_list_bg shadow contact_list_margin">
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">What is BoroMe?</p>
            </div>
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">How does BoroMe work?</p>
            </div>
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">Why was my loan request rejected</p>
            </div>
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">
                My loan amount is small! How can i get a higher amount?
              </p>
            </div>
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">
                If I make a repayment earlier, will i pay less?
              </p>
            </div>
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">
                How do I check my balance and due date?
              </p>
            </div>
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">Why was my loan request rejected</p>
            </div>
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">
                My loan amount is small! How can i get a higher amount?
              </p>
            </div>
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">
                If I make a repayment earlier, will i pay less?
              </p>
            </div>
            <div className="list_group d-flex align-items-center">
              <p className="list_text">+</p>
              <p className="list_text ml-3">
                How do I check my balance and due date?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
