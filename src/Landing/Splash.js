import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import loading_img from "./load_img.svg";
import "./Splash.css";

export class Splash extends Component {
  render() {
    return (
      <div className="splash__wrapper">
        <img src={loading_img} alt="Bee Logo" className="loading-img" />
        {/* <p className="splash-text">Tap here to begin ➡️</p> */}
        <Link className="splash-text" to="/Landing">
          Tap Here to Begin
        </Link>
      </div>
    );
  }
}

export default Splash;
