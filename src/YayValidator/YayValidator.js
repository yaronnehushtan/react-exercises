import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {

	render() {
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input type="text" className="text-box" />
			</div>
		)
	}
}

export default YayValidator;
