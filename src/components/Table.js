import React from 'react'


const Table = props => (
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
                <tr>
                    {props.tasks && <td>{props.tasks}</td>}
                    {props.tasks && <td>Edit</td>}
                </tr>
            </tbody>
        </table>
    </div>
)

export default Table