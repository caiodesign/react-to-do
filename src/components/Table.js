import React from 'react'

const Tasks = props => <tr><td>{props.tasks}</td><td><button onClick={props.editTask}>edit</button></td></tr>;

class Table extends React.Component{
    render () {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Task name
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.tasks.map( (item, index) =>  
                                <Tasks key={index} tasks={item} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table
