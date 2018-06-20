import React from 'react';
import styled from 'styled-components';


const FormTag = styled.form`
    margin-top: 20px;
	input[type="submit"]{
		margin-left: 20px;
	}
	input[name="taskname"]{
		color: #FCCB0A;
	}
`


const Form = props => {
    return (

        <FormTag onSubmit={props.addSomeTask}>
            <div class="group">      
                <input type="text" name="taskname" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>New task name</label>
            </div>
            <input type="submit" value="Add new task" />
        </FormTag>

    )
}

export default Form;