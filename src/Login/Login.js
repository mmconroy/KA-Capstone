import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <>
        {/* <div className="rectangle">
          <h1 className="header"> Create Account </h1>
        </div> */}
        <div className="form">
          <form className="loginForm">
            <div className="username">
              <label htmlFor="username"> Username: </label> <br />
              <input type="text" name="username" className="input" />
            </div>

            <div className="password">
              <label htmlFor="password"> Password: </label> <br />
              <input type="password" name="password" className="input" />
            </div>

            <div className="confirmation">
              <label htmlFor="confirmation"> Password Confirmation: </label>{" "}
              <br />
              <input type="password" name="confirmation" className="input" />
            </div>
            <input type="submit" value="Enter Your Hive" className="submit" />
          </form>
        </div>
      </>
    );
  }
}

export default Login;
