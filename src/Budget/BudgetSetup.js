import React, { Component } from "react";
import "./BudgetSetup.css";

class BudgetSetup extends Component {
  render() {
    return (
      <div>
        <div className="fund-page">
          <div className="fund-title">
            <h1>Funds</h1>
          </div>
          <form>
            <div className="fund-form">
              <input type="number" placeholder="$ Income" id="input" />
            </div>
            <div className="fund">
              <label htmlFor="calculate">20% Savings Goal</label>
              <button>Calculate</button>
            </div>

            <div className="alt-goal">
              <label htmlFor="currency-field">Save towards another goal</label>
              <input type="text" placeholder="$ Enter Amount" />
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BudgetSetup;
