import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isYay: false
		}
		
	}

	getinput (e){
		if(e.target.value=== 'yay'){
			this.setState({
				isYay: true
			})
		} else {
			this.setState({
				isYay: false
			})
		}

	}
	

	render() {
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input type="text" className={ this.state.isYay ? 'text-box--green' : 'text-box' } onChange={this.getinput.bind(this)} />
			</div>
		)
	}
}

export default YayValidator;
