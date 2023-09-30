import * as React from "react";
import Countdown from 'react-countdown';

const ContestTimePanel = () => {
    const Completionist = () => <span>Contest ended!</span>;
    return (
        <div className="listing-container card-shadow flex-center-center">
            <h1>Contest ends in : </h1>
            <Countdown date={Date.now() + 5000}>
                <Completionist/>
            </Countdown>
        </div>
    );
};

export default ContestTimePanel;