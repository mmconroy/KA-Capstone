import React, { useState, Component } from 'react';
import Modal from 'react-modal'
import {
    withRouter,
} from "react-router-dom";

Modal.setAppElement('#root')

function NewGoal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <img onClick={() => setModalIsOpen(true)} src="https://img.icons8.com/flat_round/64/000000/plus.png" />

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <form className='goalForm'>

                    <input type='text' name='goalName' className='goalName' placeholder=' Set Goal Name ' />

                    <label htmlFor='password'> Goal Amount: </label> <br />
                    <input type='number' name='goalAmount' className='goalAmount' min='0.00' step='0.01' />

                    <label htmlFor='depositFrequency'> Deposit Frequency: </label> <br />
                    <select className='depositFrequency' name='depositFrequency' form='goalForm'>
                        <option value='weekly'> Weekly </option>
                        <option value='bi-weekly'> Bi-Weekly </option>
                        <option value='monthly'> Monthly </option>
                    </select>

                    <label htmlFor='depositAmount'> Deposit Amount: </label> <br />
                    <input type='number' name='goalAmount' className='depositAmount' min='0.00' step='0.01' />

                    <input type="submit" value="Save Goal" className='saveGoal' />
                </form>
            </Modal>
        </>
    )
}

export default withRouter(NewGoal)