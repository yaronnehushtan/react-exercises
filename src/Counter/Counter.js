import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			number: 0
		}
	}

	increase () {
		this.setState({
			number: this.state.number+1
		})
	}
	

	render() {
		return (
			<div className="Counter">
				<p>Make the button increase the value:</p>
				<button onClick={this.increase.bind(this)}>Increase</button>
				<div className="Counter__value">{this.state.number}</div>
			</div>
		)
	}
}

export default Counter;
