import React from 'react';
import Table from './components/Table';
import Form from './components/Form';

class App extends React.Component {

	// setting my state object.
	state = {
		tasks: []
	};


	clearInputValue = (e) => e.value = " ";

	editTask = (e) => {
		e.preventDefault();
		console.log(0);
	}

	addTask = (e) => {
		e.preventDefault();
		if(e.target.elements.taskName.value.length > 2){
			this.setState({
				tasks: this.state.tasks.concat(e.target.elements.taskName.value)
			});
			this.clearInputValue(e.target.elements.taskName);
		}
		
	};

	render() {
		return (
			<div>
				<Table editTask={this.editTask} tasks={this.state.tasks} />
				<Form addTask={this.addTask} />
			</div>
		);
	};
};

export default App;
