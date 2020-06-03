import React, { Component } from 'react';
import './RandomNumber.scss';

class RandomNumber extends Component {

	render() {
		return (
			<div className="RandomNumber">
				<p className="RandomNumber__explanation">
					When clicking on the button, make a random number (between 1-100) to appear in the box.
				</p>

				<button>Generate number!</button>
				<div className="box">

				</div>
			</div>
		)
	}
}

export default RandomNumber;
