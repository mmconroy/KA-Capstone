import React, { Component } from "react";
import "./GoalsDetail.scss";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { withRouter } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <>
        <div className="progressBar">
          <h3 className="goalName"> Goals </h3>
          <Progress percent={0} />
        </div>

        <div className="goalFooter">
          <h3 className="money"> $0.00 / $0.00 </h3>
          <hr />
        </div>

        <div className="emptyScreen">
          <div className="img">
            <img
              className="bankIcon"
              src="https://img.icons8.com/dusk/64/000000/money-box.png"
            />
          </div>
          <h2>
            Once you create your first goal it will appear here.
            Press the button below to add a new goal.
          </h2>
        </div>

        <div className="newGoal">
          <button className="addGoal">
            <span> Add Goal </span>
          </button>
        </div>
      </>
    );
  }
}

export default Details;
