import React, { Component } from "react";
import "./BudgetSetup.css";

export class BudgetSetup extends Component {
  render() {
    return (
      <div>
        <div className="fund-page">
          <div className="fund-title">
            <h1>Funds</h1>
          </div>

          <div className="fund-form">
            <form>
              <label for="currency-field">Salary/Income</label>
              <input
                type="text"
                name="currency-field"
                id="currency-field"
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                value=""
                data-type="currency"
                placeholder="$"
              />
            </form>
          </div>

          <div className="fund-btn">
            <button>Calculate</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BudgetSetup;
