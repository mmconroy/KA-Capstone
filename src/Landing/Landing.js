import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./Landing.css";
import background from "./landing_background.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <section className="body__wrapper">
          <div className="text-wrapper">
            <h1 className="landing-title">Welcome to The Hive</h1>
            <p className="landing-tagline">
              Where Budgeting does not have to BEE a secret
            </p>
          </div>
          <div className="buttons__wrapper">
            <button className="log-in">Log In</button>
            {/* <button className="sign-up">Sign Up</button> */}
            <Link className="sign-up" to="/Login">
              Sign Up
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
