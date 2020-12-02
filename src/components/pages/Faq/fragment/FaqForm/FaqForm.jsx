import React from "react";
import "./FaqForm.css";

const FaqForm = () => {
  return (
    <div className="container">
      <h1 className="faq_form_header text-center mt-5 mb-5">
        Or fill out this form, we’ll <br /> quickly get back to you
      </h1>
      <form className="mb-5 pb-5">
        <div class="form-row">
          <div class="form-group col-md-6 mb-4">
            <label for="inputState" className="mb-3 form_label">
              How can we help you?
            </label>
            <select id="inputState" class="form-control faq_input">
              <option selected>Select a subject</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div class="form-group col-md-6 mb-4">
            <label for="inputAddress" className="mb-3 form_label">
              First Name
            </label>
            <input
              type="text"
              class="form-control faq_input"
              id="inputAddress"
              placeholder="Type your first name"
              required
            />
          </div>
          <div class="form-group col-md-6 mb-4">
            <label for="inputAddress" className="mb-3 form_label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control faq_input"
              id="inputAddress"
              required
              placeholder="Type your surname"
            />
          </div>
        </div>
        <div className="form-row">
          <div class="form-group col-md-6 mb-4">
            <label for="inputAddress" className="mb-3 form_label">
              Email Address
            </label>
            <input
              type="email"
              required
              class="form-control faq_input"
              id="inputAddress"
              placeholder="Type your email"
            />
          </div>
          <div class="form-group col-md-6 mb-4">
            <label for="inputAddress" className="mb-3 form_label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control faq_input"
              id="inputAddress"
              required
              placeholder="Type your phone number"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-12 mb-4">
            <label
              for="exampleFormControlTextarea1"
              className="mb-3 form_label"
            >
              Example textarea
            </label>
            <textarea
              class="form-control faq_input"
              id="exampleFormControlTextarea1"
              rows=""
              placeholder="Type your text"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="btn faq_btn pl-5 pr-5">
          Send
        </button>
      </form>
    </div>
  );
};

export default FaqForm;
