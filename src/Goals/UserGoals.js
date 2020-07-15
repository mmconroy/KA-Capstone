import React, { useState, Component } from "react";
import "./UserGoals.scss";
import './modals/GoalDepositModal.scss'
import Modal from "react-modal";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { withRouter } from "react-router-dom";


function findPercentage(goal, current) {
    // function to calculate percentage of goal total
    return (current / goal) * 100
}

function UserGoals(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleModalDeposit(props.goalItem.id)
    }
    return (
        <div className='goalInfo'>
            <div className='icon'>
                {/* button to open modal for depositing into goal */}
                <img
                    onClick={() => setModalIsOpen(true)}
                    src="https://img.icons8.com/ios-glyphs/60/000000/honeycombs.png"
                />
            </div>

            <div className='goalProgress'>
                {props.goalItem.goalName}

                <Progress percent={
                    findPercentage(
                        props.goalItem.goalAmount,
                        props.goalItem.currentAmount
                    )}
                />

                <div className='moneyLevel'>
                    <p>$ </p>
                    {props.goalItem.currentAmount}
                    <span className='spacer'> / </span>
                    <p>$ </p>
                    {props.goalItem.goalAmount}
                </div>
                <hr />
            </div>






            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <div className="formDiv">
                    <form className=" depositForm" id=" depositForm" onSubmit={handleSubmit}>

                        <div className="newDepositAmount">
                            <label className="label" htmlFor=" depositAmount">
                                Deposit Amount:
                            </label>
                            <br />
                            <input
                                onChange={props.handleAddNewDeposit}
                                type="number"
                                name=" depositAmount"
                                className=" depositAmount input"
                                min="0.00"
                                step="0.01"
                            />
                        </div>

                        <div className='depositNotes'>
                            <label className="label" htmlFor="depositAmount">
                                Deposit Notes:
                            </label>
                            <br />
                            <textarea
                                className='input2'
                                name="depositNotes"
                                form="depositForm"
                                placeholder='Enter notes here...'
                            ></textarea>
                        </div>
                    </form>

                    <div className="submitBtn">
                        <button className="saveDeposit" type="submit" form=" depositForm">
                            <span> Deposit </span>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default UserGoals;