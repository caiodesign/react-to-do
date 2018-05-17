import React from 'react';
import Table from './components/Table';
import Form from './components/Form';
import Filter from './components/Filter';


class App extends React.Component {

	// setting my state object.
	state = {
		tasks: [],
		filter: undefined
	};

	// add a new task to table.
	getInputValue = (e) => {
		return  e.target.elements.taskName.value;
	}

	getSearchValue = (e) => {
		console.log(e.target.value);
		return  e.target.value;
	}
	addTask = (e) => {
		e.preventDefault()
		this.setState({
			tasks: this.state.tasks.concat(this.getInputValue(e))
		});
	};

	/*setInputValue = (e) => {
	
	}
	
	filterTasks = (e) => {
		e.preventDefault();
		const searching = this.state.tasks.map( (item, index) => {
			const value = item.indexOf(this.getSearchValue(e));
		})
	}*/

	render() {
		return (
			<div>
				<Filter filterTasks={this.filterTasks}/>
				<Table tasks={this.state.tasks} />
				<Form addTask={this.addTask} />
			</div>
		);
	};
};

export default App;
