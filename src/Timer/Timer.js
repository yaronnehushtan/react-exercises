import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			timer: 0,
			isRun: false
		}
	}
	

	play () {
		if (!this.state.isRun){
			this.setState({
				isRun: true
			})
			this.timer= setInterval (()=>{
				console.log('enter to TINER');
				
				this.setState({
					timer: this.state.timer+1
				})
			},1000)
		}	
	}

	pause (){
		this.setState({
			isRun: false
		})
		clearInterval (this.timer)
	}

	reset (){
		this.setState({
			isRun: false
		})
		clearInterval (this.timer)
		this.setState({
			timer:0
		})
	}



	render() {
		return (
			<div className="Timer">
				<h3>Timer</h3>
				<ul className="Timer__explanation">
					<li><b>Play:</b> the timer should count the seconds and keep updating</li>
					<li><b>Pause:</b> the timer freeze the timer</li>
					<li><b>Reset:</b> should set the timer to 0</li>
				</ul>
				<div className="Timer__actions">
					<button onClick={this.play.bind(this)}>Play</button>
					<button onClick={this.pause.bind(this)}>Pause</button>
					<button onClick={this.reset.bind(this)}>Reset</button>
				</div>
				<div className="Timer__value">{this.state.timer}</div>
			</div>
		)
	}
}

export default Timer;
