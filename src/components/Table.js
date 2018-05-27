import React from 'react';
import styled from 'styled-components';


const Task = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 420px;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &.done{
       p{
            text-decoration: line-through;
       }
    }
    p{
        margin: 0px 10px;
    }
    span{
        padding: 0 10px;
    }
`;

const Table = props => {
    return(
        <Task className={props.doneClass ? 'done' : 'undone'}>
            <p>{props.children}</p>
            <span onClick={props.classEvent}>✓</span>
            <span onClick={props.delEvent} >X</span>
        </Task>
    )
}

export default Table;