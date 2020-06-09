import React from 'react'
import Value from './value.component'

const ListRender = () => {
    const Arr = ['Hasan', 'Tareque', 'Eliza', 'Rafee'];
    const value = Arr.map((val, index) => <h2 key={index}>{index} {val}</h2>)
    return (
        // List rendering : 4th approach
        <div>{value}</div>
    )
}

export default ListRender;
