//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import SimpleCounter from "./component/simpleCounter.jsx"
import TimeOut from "./component/timeOut.jsx"

// include your styles into the webpack bundle
import "../styles/index.css";

const CounterTime = (props) => {

	return (
		<>
			<SimpleCounter {...props} />
			<TimeOut {...props} />

		</>
	)
};

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
let z = 0;
let myInterval = null;

let numberTwo = [10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = 11;
let c = 6;
let d = 4
function counter() {
	/* console.log(number[i]); */
	a++;
	if (number[a] === 10) {
		a = 0;
		e++;
		if (number[e] === 6) {
			e = 0;
			i++
		};
	};

	b--;
	if (numberTwo[b] === 10) {
		b = 10;
		c--;
		if (c === 0) {
			d--;
			c = 6
		}

	};


	ReactDOM.render(<CounterTime playButton={playTimer} pauseButton={pauseTimer} resetButton={resetTimer} number1={number[a]} number2={number[e]} number3={number[i]} number4={number[o]} number5={number[u]} number6={number[z]} number7={numberTwo[b]} number8={numberTwo[c]} number9={numberTwo[d]} />, document.getElementById("counterTime"));
};


function pauseTimer() {
	/* console.log("estoy aqui") */
	clearInterval(myInterval);
	myInterval = null;

};
function playTimer() {

	if (!myInterval) {
		myInterval = setInterval(counter, 1000);
	};
};
function resetTimer() {
	a = 0;
	e = 0;
	i = 0;
	o = 0;
	u = 0;
	z = 0;
	b = 11;
	c = 6;
	d = 4;
	if (!myInterval) {
		myInterval = setInterval(counter, 1000);
	};
};
playTimer();







