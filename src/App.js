import React from 'react';
import styled from 'styled-components';
import Table from './components/Table';
import Form from './components/Form';

const Todo = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');
  	font-family: 'Open Sans', sans-serif;
	background-color: #1C2036;
	height: 100vh;
	text-align: center;
	margin: 0 auto;
	width: 100vw; 	
	color: #fff;
`

const Filter = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	span{
		cursor: pointer;
		color: #FCCB0A;
		font-weight: bold;
	}
`

const Title = styled.h1`
	text-transform: uppercase;
	color: #EDEEF0;
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
				<Form addSomeTask={this.addtask.bind(this)} />
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
