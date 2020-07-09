import React, { useState, Component } from "react";
import Modal from "react-modal";
import "./GoalDepositModal.scss";

function GoalDepositModal() {
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
                    <form className=" depositForm" id=" depositForm">

                        <div className="newDepositAmount">
                            <label className="label" htmlFor=" depositAmount">
                                Deposit Amount:
                            </label>
                            <br />
                            <input
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

        </>
    );
}

export default GoalDepositModal;
