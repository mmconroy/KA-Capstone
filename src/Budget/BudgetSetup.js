import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BudgetSetup.css";

function BudgetSetup(props) {
  return (
    <div>
      <div className="fund-page">
        <div className="fund-title">
          <h3>
            To get started, enter 20% of your yearly income. That's how much
            you'll want to put toward your savings.{" "}
          </h3>
        </div>
        <form onSubmit={props.onSubmit}>
          <div className="fund-form">
            <input
              placeholder="$ Enter Amount"
              type="number"
              defaultValue=""
              value={props.savingsAmount === 0 ? "" : props.savingsAmount}
              onChange={props.handleGoalInputChange}
              name="savingsAmount"
            ></input>{" "}
          </div>
          <div className="fund">
            <button onClick={props.handleSubmitNewSavingsGoal}>
              Calculate
            </button>{" "}
          </div>

          {/* <div className="alt-goal">
            <label htmlFor="currency-field">Save towards another goal</label>
            <input
              placeholder="$ Enter Amount"
              type="text"
              value={props.savingsAmount}
              onChange={props.handleInputChange}
            ></input>{" "}
            <button onClick={() => props.history.push("/Goals/")}>
              Submit
            </button>{" "}
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default BudgetSetup;
