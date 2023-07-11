import React from "react";
import PropTypes from "prop-types";

//create your first component

const TimeOut = (props) => {

    return (
        <div>
            <div className="timerOut">
                <div className="timerOutIcon">
                    <strong><i class="fa-solid fa-hourglass-start fa-2xl"></i></strong>
                </div>
                <div className="number2" id="position1"><strong>0</strong></div>
                <div className="number2" id="position1"><strong>0</strong></div>
                <div className="point2"><strong>:</strong></div>
                <div className="number2" ><strong>0</strong></div>
                <div className="number2" ><strong>0</strong></div>
                <div className="point2"><strong>:</strong></div>
                <div className="number2" ><strong>{props.number8}</strong></div>
                <div className="number2" ><strong>{props.number7}</strong></div>
            </div>

            <div className="controlTimerOut">
                <button type="button" className="btnSetTime btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"><strong>SET TIME</strong></button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Enter the time</label>
                                        <input className="form-control" id="message-text" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Select time unit</label>
                                        <select className="form-select" id="time-unit">
                                            <option value="seconds">Seconds</option>
                                            <option value="minutes">Minutes</option>
                                            <option value="hours">Hours</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                <input type="submit" className="btn btn-warning" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

TimeOut.propTypes = {
	number1: PropTypes.number,
	number2: PropTypes.number,
};




export default TimeOut;


