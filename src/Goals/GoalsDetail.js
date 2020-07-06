import React, { Component } from 'react';
import './GoalsDetail.scss'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {
    withRouter,
} from "react-router-dom";

class Details extends Component {
    render() {
        return (
            <>
                <div className='header'>
                    <h1> Your Savings </h1>
                </div>

                <div className='goal'>
                    <div className='hexagon'>
                        <svg width="61" height="70" viewBox="0 0 81 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.216 9.288L71.143 27.144V62.856L40.216 80.712L9.289 62.856V27.144L40.216 9.288ZM40.216 0C38.612 0 37.01 0.415 35.571 1.244L4.645 19.1C1.773 20.761 0 23.826 0 27.144V62.856C0 66.175 1.772 69.24 4.645 70.9L35.572 88.756C37.01 89.585 38.613 90 40.217 90C41.821 90 43.423 89.585 44.862 88.756L75.789 70.9C78.661 69.239 80.434 66.174 80.434 62.856V27.144C80.434 23.825 78.662 20.76 75.789 19.1L44.861 1.244C43.422 0.415 41.82 0 40.216 0Z" fill="black" />
                        </svg>
                    </div>

                    <div className='progress'>
                        <h3 className='goalName'> Goal Name </h3>
                        <Progress
                            percent={0}
                        />
                    </div>
                </div>

                <div className='goalFooter'>
                    <h3 className='money'> $0.00 / $0.00 </h3>
                    <hr />
                </div>

                <div className='recentActivity'>
                    <h2> No recent activity. Once money has been moved
                    into savings, it will show up here.
                    </h2>
                    <div className='img'>
                        <img className='bankIcon' src="https://img.icons8.com/dusk/64/000000/money-box.png" />
                    </div>
                </div>

                <div className='footer'>

                </div>
            </>
        )
    }
}

export default Details