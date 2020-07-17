import React, { useState, Component } from "react";
import "./MyGoals.scss";
import Modal from "react-modal";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { withRouter } from "react-router-dom";
import NewGoalModal from "./modals/NewGoalModal";
import UserGoals from "./UserGoals";

function MyGoals(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalCurrentAmount, setTotalCurrentAmount] = useState(
    props.goalList.reduce((curr, val) => curr + val.currentAmount, 0)
  );
  console.log(totalCurrentAmount);
  const [totalGoalAmount, setTotalGoalAmount] = useState(
    props.goalList.reduce((curr, val) => curr + val.goalAmount, 0)
  );
  console.log(totalGoalAmount);

  function findSavingsPercentage() {
    let percent = (totalCurrentAmount / totalGoalAmount) * 100;

    return Math.floor(percent);
  }

  return (
    <>
      <div className="goals__wrapper">
        <div className="progressBar">
          <h3 className="goalName"> Your Yearly Savings Goal </h3>
          <Progress
            percent={Number(findSavingsPercentage())}
            theme={{
              success: {
                color: "#D4FCC3",
              },
              active: {
                color: "#DF8B21",
              },
              default: {
                color: "#fbc630",
              },
            }}
          />{" "}
        </div>

        <div className="goalFooter">
          <h3 className="money">
            ${totalCurrentAmount} / ${totalGoalAmount}
          </h3>{" "}
          <hr />
        </div>
        <div className="userGoals">
          {/* <h3 className="goalName"> Your Individual Goals </h3> */}
          <ul className="goalList">
            {/* Maps through goals and renders them on page */}
            {props.goalList.map((goalItem) => (
              <UserGoals
                handleAddNewDeposit={props.handleAddNewDeposit}
                handleModalDeposit={props.handleModalDeposit}
                goalItem={goalItem}
                key={goalItem.id}
                goals={props.goalList}
                newDeposit={props.newDeposit}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyGoals;

/* <div className="emptyScreen">
        <div className="img">
          <img
            className="bankIcon"
            src="https://img.icons8.com/dusk/64/000000/money-box.png"
          />
        </div>
        <h2>
          Press the button below to create a new goal,
          once you create your first goal it will appear here.
          </h2>
      </div> */
