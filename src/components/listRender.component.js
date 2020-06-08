import React from 'react'

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
    const value = Arr.map(x => <h3>name : {x.name}, school : {x.school}</h3>)
    return (
        // List rendering : 4th approach
        <div>{value}</div>
    )
}

export default ListRender;
