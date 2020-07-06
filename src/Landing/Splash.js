import React, { Component } from "react";
import loading_img from "./load_img.png";
import "./Splash.css";

export class Splash extends Component {
  render() {
    return (
      <div className="splash__wrapper">
        <img src={loading_img} alt="Bee Logo" className="loading-img" />
      </div>
    );
  }
}

export default Splash;
