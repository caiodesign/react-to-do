import React from 'react'
import Table from './components/Table'
import Form from './components/Form'


class App extends React.Component {

	// setting my state object.
	state = {
		tasks: []
	}

	// add a new task to table.
	addTask = (e) => {
		e.preventDefault()
		const taskName = e.target.elements.taskName.value // get form input value.
		const taskList = this.state.tasks;
		taskList.push(taskName);
		this.setState({
			task: taskList
		})
	}

	render() {
		return (
			<div>
				<Table tasks={this.state.tasks} />
				<Form addTask={this.addTask} />
			</div>
		)
	}
}

export default App