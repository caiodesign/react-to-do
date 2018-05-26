import React from 'react';
import Table from './components/Table';

class App extends React.Component {

	// setting my state object.
	state = {
		tasks: [
			{
				id: 1,
				name: 'Treinar'
			},
			{
				id: 2,
				name: 'Estudar'
			}
		]
	};

	deleteTask (id, e) {
		const Tasks = Object.assign([], this.state.tasks);
		const taskIndex = Tasks.findIndex( (item) => item.id === id);

		Tasks.splice(taskIndex, 1);

		this.setState({
			tasks: Tasks
		})

	}

	addtask (e) {
		e.preventDefault();
		const Tasks = Object.assign([], this.state.tasks);
		const newUser = {
			id: () => Tasks[Tasks.length - 1].id + 1,
			name: e.target.taskname.value
		}

		this.setState({
			tasks: Tasks.concat(newUser)
		})

	}

	render() {
		return (
			<div>
				{
					this.state.tasks.map( (item) => {
						return <Table key={item.id} delEvent={this.deleteTask.bind(this, item.id)}>{item.name}</Table>
					})
				}
				<form onSubmit={this.addtask.bind(this)}>
					<input type="text" name="taskname"/>
					<input type="submit" value="Add new task" />
				</form>
			</div>
		);
	};
};

export default App;
