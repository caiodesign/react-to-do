import React from 'react'

const Task = props => <tr><td>{props.task}</td></tr>;

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
                                <Task key={index} task={item} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table