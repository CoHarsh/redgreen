import * as React from "react";
import Countdown from 'react-countdown';

const ContestTimePanel = () => {
    const Completionist = () => <span>Contest ended!</span>;
    return (
        <div className="listing-container card-shadow flex-center-center">
            <h4 className="font-family-apply">Contest ends in : </h4>
            <h2 className="font-family-apply" style={{margin:"0"}}>
            <Countdown date={Date.now() + 5000}>
                <Completionist />
            </Countdown>
            </h2>
        </div>
    );
};

export default ContestTimePanel;