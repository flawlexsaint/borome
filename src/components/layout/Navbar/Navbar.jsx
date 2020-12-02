import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../images/layout/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md bg-primary">
        <div className="container">
          <NavLink class="navbar-brand" to="/">
            <img src={Logo} alt="" className="navbar-brand" />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <span class="my-2 mr-auto"></span>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <NavLink class="nav-link ml-3" to="/">
                  Home <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link ml-3" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link ml-3" to="/how-it-works">
                  How it works
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link ml-3" to="/faq">
                  FAQs
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link ml-3" to="/contact">
                  Contact
                </NavLink>
              </li>
              <NavLink to="/login" className="ml-3 btn custom_btn">
                Login
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
