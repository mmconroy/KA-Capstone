import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BudgetSetup.css";

function BudgetSetup(props) {
  return (
    <div>
      <div className="fund-page">
        <div className="fund-title">
          <h1>Funds</h1>
        </div>
        <form onSubmit={props.onSubmit}>
          <div className="fund-form">
            <input
              placeholder="$ Enter Amount"
              type="number"
              defaultValue=""
              value={props.savingsAmount === 0 ? "" : props.savingsAmount}
              onChange={props.handleInputChange}
              name="savingsAmount"
            ></input>{" "}
          </div>
          <div className="fund">
            <label htmlFor="calculate">20% Savings Goal</label>
            <button onClick={props.handleSubmit}>Calculate</button>{" "}
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
