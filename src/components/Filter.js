import React from 'react'

const Filter = props => (
    <input type='text' name='search' placeholder="Search here" onChange={props.getSearchValue}/>
)

export default Filter