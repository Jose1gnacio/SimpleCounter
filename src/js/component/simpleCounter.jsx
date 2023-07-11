import React from "react";
import PropTypes from "prop-types";

const SimpleCounter = (props) => {

    return (
        <>
			<div>
				<div className="timer">
					<div className="timerIcon">
						<strong><i className="fa-solid fa-stopwatch  fa-2xl"></i></strong>
					</div>
					<div className="number" id="position1"><strong>{props.number6}</strong></div>
					<div className="number" id="position1"><strong>{props.number5}</strong></div>
					<div className="point">:</div>
					<div className="number" ><strong>{props.number4}</strong></div>
					<div className="number" ><strong>{props.number3}</strong></div>
					<div className="point">:</div>
					<div className="number" ><strong>{props.number2}</strong></div>
					<div className="number" ><strong>{props.number1}</strong></div>
				</div>
				<div className="controlTimer">
					<div className="controls">
						<strong><i onClick={props.playButton} className="fa-solid fa-play fa-2xl"></i></strong>
					</div>
					<div onClick={props.pauseButton} className="controls">
						<strong><i className="fa-solid fa-pause fa-2xl"></i></strong>
					</div>
					<div className="controls">
						<strong><i onClick={props.resetButton} className="fa-solid fa-rotate fa-2xl"></i></strong>
					</div>
				</div>
			</div>			
		</>
    )
};
SimpleCounter.propTypes = {
	number1: PropTypes.number,
	number2: PropTypes.number,
	number3: PropTypes.number,
	number4: PropTypes.number,
	number5: PropTypes.number,
	number6: PropTypes.number,
	pauseButton: PropTypes.func,
	playButton: PropTypes.func,
	resetButton: PropTypes.func
};
export default SimpleCounter;