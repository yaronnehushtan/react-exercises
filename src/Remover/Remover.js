import React, { Component } from 'react';
import './Remover.scss';

class Remover extends Component {

	constructor(props) {
		super(props);
		this.state = {
			students: [
				'Abby Mecoil',
				'Toni Zuck',
				'Peter Hanshfield',
				'Rose Tobernak'
			],
			choosen: ''
		};
	}

	deleteStudent(studentToDelete){
		console.log(studentToDelete);
		const newArray= this.state.students;
		newArray.splice(studentToDelete,1)
		
		this.setState ({
			students: newArray
		})

		
	}

	render() {
		return (
			<div className="Remover">
				<h3>Remover:</h3>
				<p>Add a delete button for each student to remove it from the list.</p>
				<ul className="Remover__list">
					{this.state.students.map((student, index) => {
						return ( <li key={index}>{student} <button onClick={this.deleteStudent.bind(this,index)}>Delete</button></li>)
					})}
				</ul>
			</div>
		)
	}
}

export default Remover;
