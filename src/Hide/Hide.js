import React, { Component } from 'react';
import './Hide.scss';

class Hide extends Component {

	render() {
		return (
			<div className="Hide">
				<button>Hide text now!</button>
				<p>
					You can read this text,
					but if you click the button it should disappear. Forever.
				</p>
			</div>
		)
	}
}

export default Hide;
