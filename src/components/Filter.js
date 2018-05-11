import React from 'react'

const Filter = props => (
    <input type='text' name='filterName' placeholder="Search here" onChange={props.addFilter}/>
)

export default Filter