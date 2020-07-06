import React, { Component } from "react";
import "./BudgetOverview.css";

export class BudgetOverview extends Component {
  render() {
    return (
      <div>
        <top className="top-chart">
          <h1>Budget</h1>
          <div id="pie-chart"></div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTggihov829CN_suUCInehRIibok4pJHcIUYg&usqp=CAU"></img>
        </top>
        <bottom className="bottom-chart">
          <div className="title ">
            <label>Goals 20%</label>
            <div className="progress">
              <div className="fill a"></div>
            </div>
          </div>
          <div>
            <label>You Decide 30%</label>

            <div className="progress">
              <div className="fill b"></div>
            </div>
          </div>
          <div>
            <label>Essentials 50%</label>
            <div className="progress">
              <div className="fill c"></div>
            </div>
          </div>
        </bottom>
      </div>
    );
  }
}

export default BudgetOverview;
