import React from 'react';

const Table = props => {
    return(
        <div>
            <div>{props.children}</div>
            <div><button onClick={props.delEvent}>Delete</button></div>
        </div>
    )
}

export default Table;