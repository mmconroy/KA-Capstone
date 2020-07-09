import React, { useState, Component } from "react";
import "./GoalsDetail.scss";
import Modal from "react-modal";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { withRouter } from "react-router-dom";
import NewGoalModal from './modals/NewGoalModal'


function MyGoals() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
          Press the button below to create a new goal,
          once you create your first goal it will appear here.
          </h2>
      </div>
    </>
  );
}



export default MyGoals;
