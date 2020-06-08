import React from 'react'
import Value from './value.component'

const ListRender = () => {
    const Arr = [
        {
            id : 1,
            name : 'Hasan',
            school : 'AAAAA'
        },
        {
            id : 2,
            name : 'Tareque',
            school : 'BBBBB'
        },
        {
            id : 3,
            name : 'Rafee',
            school : 'CCCCCC'
        }
    ]
    const value = Arr.map(x => <Value val={x} />)
    return (
        // List rendering : 4th approach
        <div>{value}</div>
    )
}

export default ListRender;
