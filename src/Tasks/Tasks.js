import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			newTask: ''
		}
	}
	

	addTask (){
		this.setState ({
			tasks: [...this.state.tasks, this.state.newTask]
		})
	}

	getinput (e){
		this.setState ({
			newTask: e.target.value
		})
	}

	render() {
		return (
			<div className="Tasks">
				<h3>Tasks:</h3>
				<p>Make a Todo list (add only):</p>
				<input placeholder="Your task..." onChange={this.getinput.bind(this)}/> <button onClick={this.addTask.bind(this)}>Add task</button>
				<ul>
					{this.state.tasks.map((task)=>{
						return (<li>{task}</li>)
					})}
				</ul>
			</div>
		)
	}
}

export default Tasks;
