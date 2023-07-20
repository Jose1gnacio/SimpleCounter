import React from "react";
import PropTypes, { number } from "prop-types";

//create your first component

const TimeOut = (props) => {

    return (
        <div>
            <div className="timerOut">
                <div className="timerOutIcon">
                    <strong><i className="fa-solid fa-hourglass-start fa-2xl"></i></strong>
                </div>
                <div className="number2" id="position1"><strong>0</strong></div>
                <div className="number2" id="position1"><strong>0</strong></div>
                <div className="point2"><strong>:</strong></div>
                <div className="number2" ><strong>0</strong></div>
                <div className="number2" ><strong>{props.number9}</strong></div>
                <div className="point2"><strong>:</strong></div>
                <div className="number2" ><strong>{props.number8}</strong></div>
                <div className="number2" ><strong>{props.number7}</strong></div>
            </div>
        </div>
    )
};

TimeOut.propTypes = {
    number1: PropTypes.number,
    number2: PropTypes.number,
};




export default TimeOut;


