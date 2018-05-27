import React from 'react';
import Table from './components/Table';
import styled from 'styled-components';

const Todo = styled.div`
	text-align: center;
	margin: 0 auto;
	width: 100%;
	max-width: 720px;
`

class App extends React.Component {

	// setting my state object.
	state = {	
		tasks: [
			{
				id: 1,
				name: 'Treinar',
				completed: false
			},
			{
				id: 2,
				name: 'Estudar',
				completed: false
			},
			{
				id: 3,
				name: 'Trabalhar',
				completed: false
			},
			{
				id: 4,
				name: 'Correr',
				completed: false
			},
			{
				id: 5,
				name: 'Jogar',
				completed: false
			}
		],
		completed: 0,
		incompleted: 5
	};


	deleteTask (id, e) {
		const Tasks = Object.assign([], this.state.tasks);
		const taskIndex = Tasks.findIndex( (item) => item.id === id);
		Tasks.splice(taskIndex, 1);
		this.setState({
			tasks: Tasks
		})
		setTimeout(() =>{
			this.refreshTask();
		}, 100)
	}

	addtask (e) {
		e.preventDefault();
		const Tasks = Object.assign([], this.state.tasks);
		const newUser = {
			id:	Math.floor((Math.random() * 100) + 1),
			name: e.target.taskname.value,
			completed: false
		}
		this.clearInput(e.target.taskname);
		this.setState({
			tasks: Tasks.concat(newUser),
		})
	}

	clearInput (...params) {
		const input = params.map( (item) => item.value = "");
		return input;
	}	

	toggleDoneClass (id, e) {
		const Tasks = Object.assign([], this.state.tasks);
		const index = this.state.tasks.findIndex( (item) => item.id === id);
		e.target.parentNode.classList.toggle('done');

		Tasks[index].completed ? Tasks[index].completed = false : Tasks[index].completed = true;
		this.refreshTask();
		this.setState({
			tasks: Tasks,
		})
	}

	refreshTask () {
		const getCompletedTasks = this.state.tasks.filter((item) => {
			return item.completed === true;
		})

		this.setState({
			completed: getCompletedTasks.length,
			incompleted: this.state.tasks.length - getCompletedTasks.length
		})
	}

	filterCompletedTasks () {
		const getCompletedTasks = this.state.tasks.filter((item) => {
			return item.completed === true;
		})

		this.setState({
			filter: getCompletedTasks
		})
	}

	filterIncompletedTasks () {
		const getIncompletedTasks = this.state.tasks.filter((item) => {
			return item.completed === false;
		})

		this.setState({
			filter: getIncompletedTasks
		})
	}

	


	render() {
		let StateTasks;
		this.state.filter ? StateTasks = this.state.filter : StateTasks = this.state.tasks;
		return (
			<Todo>
				<h1>Tasks</h1>
				{
					StateTasks.map( (item) => {
						return <Table key={item.id} classEvent={this.toggleDoneClass.bind(this, item.id)} delEvent={this.deleteTask.bind(this, item.id)}>{item.name}</Table>
					})
				}
				<form onSubmit={this.addtask.bind(this)}>
					<input type="text" name="taskname" maxLength="16"/>
					<input type="submit" value="Add new task" />
				</form>
				<div>
					<br />
					<p onClick={this.filterCompletedTasks.bind(this)}>Filter for completed tasks: {this.state.completed}</p><p onClick={this.filterIncompletedTasks.bind(this)}>Filter for incompleted Tasks: {this.state.incompleted}</p>
				</div>
			</Todo>
		);
	};
};

export default App;
