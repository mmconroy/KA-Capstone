import React, { useState, Component } from "react";
import Modal from "react-modal";
import "./NewGoalModal.scss";

function NewGoalModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
            <img
                className='image'
                onClick={() => setModalIsOpen(true)}
                src="https://img.icons8.com/ios/50/000000/add.png"
            />

            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <div className="formDiv">
                    <form className="goalForm" id="goalForm">
                        <div className="newGoalName">
                            <label className="label" htmlFor="goalName">
                                {" "}
                Goal Name:{" "}
                            </label>{" "}
                            <br />
                            <input type="text" name="goalName" className="goalName input" />
                        </div>

                        <div className="newGoalAmount">
                            <label className="label" htmlFor="goalAmount">
                                {" "}
                Goal Amount:{" "}
                            </label>{" "}
                            <br />
                            <input
                                type="number"
                                name="goalAmount"
                                className="goalAmount input"
                                min="0.00"
                                step="0.01"
                            />
                        </div>

                        <div className="NewDepositFrequency">
                            <label className="label" htmlFor="depositFrequency">
                                {" "}
                Deposit Frequency:{" "}
                            </label>{" "}
                            <br />
                            <select
                                className="depositFrequency input"
                                name="depositFrequency"
                                form="goalForm"
                            >
                                <option value="weekly"> Weekly </option>
                                <option value="bi-weekly"> Bi-Weekly </option>
                                <option value="monthly"> Monthly </option>
                            </select>
                        </div>

                        <div className="NewDepositAmount">
                            <label className="label" htmlFor="depositAmount">
                                {" "}
                Deposit Amount:{" "}
                            </label>{" "}
                            <br />
                            <input
                                type="number"
                                name="goalAmount"
                                className="depositAmount input"
                                min="0.00"
                                step="0.01"
                            />
                        </div>
                    </form>

                    <div className="submitBtn">
                        <button className="saveGoal" type="submit" form="goalForm">
                            <span> Save Goal </span>
                        </button>
                    </div>
                </div>
            </Modal>

        </>
    );
}

export default NewGoalModal;
