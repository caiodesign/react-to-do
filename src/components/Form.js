import React from 'react'

const Form = props => (
    <form onSubmit={props.addTask}>
        <input type='text' name='taskName' placeholder="Type the task name" />
        <button>Save</button>
    </form>
)

export default Form