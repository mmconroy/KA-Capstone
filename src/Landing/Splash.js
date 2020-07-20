import React, { Component } from "react";
import { Link } from "react-router-dom";

import loading_img from "./load_img.svg";
import "./Splash.css";

export class Splash extends Component {
  render() {
    return (
      <div className="splash__wrapper">
        <img src={loading_img} alt="Bee Logo" className="loading-img" />
        <p className="splash-copy">Budgeting doesn't have to BEE a secret.</p>
        <Link className="splash-text" to="/Setup">
          Tap Here to Begin
        </Link>
      </div>
    );
  }
}

export default Splash;
