import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			results:[]
		};
	}

	search(e){
		let result= this.state.items.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()))
		this.setState({
			results:result
		})
	}

	render() {
		return (
			<div className="Filter">
				<p>Filter the list as you type.</p>
				<input placeholder="Search..." className="Filter__textbox" onChange={this.search.bind(this)}/>
				<ul>
					{this.state.results.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Filter;
