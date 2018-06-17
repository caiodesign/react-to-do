import React from 'react';
import Table from './components/Table';
import styled from 'styled-components';

const Todo = styled.div`
	background-color: rgb(28, 28, 28);
	height: 100vh;
	text-align: center;
	margin: 0 auto;
	width: 100vw; 	
	color: #fff;
	form{
		margin-top: 20px;
	}
	input[type="submit"]{
		margin-left: 20px;
	}
`

const Filter = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	span{
		cursor: pointer;
		color: blue;
		font-weight: bold;
	}
`

const Title = styled.h1`
	color: #fff;
	margin-top: 0px;
	padding-top: 20px;
`

class App extends React.Component {

	// setting my state object.
	state = {	
		tasks: [
			{
				id: 1,
				name: 'Study',
				completed: false
			},
			{
				id: 2,
				name: 'Workout',
				completed: false
			}
		],
		completed: 0,
		incompleted: 2
	};

	componentWillMount() {
		document.title = 'React To-Do app';
		localStorage.getItem('tasks') && this.setState({
			tasks: JSON.parse(localStorage.getItem('tasks'))
		})
	}

	componentWillUpdate(nextProps, nextState){
		localStorage.setItem('tasks', JSON.stringify(nextState.tasks)); 
		localStorage.setItem('tasksDate', Date.now()); 
	}

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

	showAllTasks () {
		this.setState({
			filter: undefined
		})
	}

	render() {
		let StateTasks;
		this.state.filter ? StateTasks = this.state.filter : StateTasks = this.state.tasks;
		return (
			<Todo>
				<Title>Tasks To Do</Title>
				{
					StateTasks.map( (item) => {
						return <Table doneClass={item.completed} key={item.id} classEvent={this.toggleDoneClass.bind(this, item.id)} delEvent={this.deleteTask.bind(this, item.id)}>{item.name}</Table>
					})
				}
				<form onSubmit={this.addtask.bind(this)}>
					<div class="group">      
						<input type="text" name="taskname" required />
						<span class="highlight"></span>
						<span class="bar"></span>
						<label>New task name</label>
					</div>
					<input type="submit" value="Add new task" />
				</form>
				<Filter>
					<br />
					<p onClick={this.filterCompletedTasks.bind(this)}>
						<span>Filter completed:</span> {this.state.completed}
					</p>
					<p onClick={this.filterIncompletedTasks.bind(this)}>
						<span>Filter incompleted:</span> {this.state.incompleted}
					</p>
					<p onClick={this.showAllTasks.bind(this)}>
						<span>Show all</span>
					</p>
				</Filter>
			</Todo>
		);
	};
};

export default App;
