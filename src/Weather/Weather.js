import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {

	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://my-json-server.typicode.com/evyros/react-weather-app/forecast</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is:</strong>
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is:</strong>
				</div>
			</div>
		)
	}
}

export default Weather;
