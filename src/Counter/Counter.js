import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {

	render() {
		return (
			<div className="Counter">
				<p>Make the button increase the value:</p>
				<button>Increase</button>
				<div className="Counter__value">0</div>
			</div>
		)
	}
}

export default Counter;
