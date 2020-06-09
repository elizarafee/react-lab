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
    // in list rendering key props have to be included and it need to have a unique id. and the  key props is not accessibe from the child component
    const value = Arr.map(x => <Value key={x.id} val={x} />)
    return (
        // List rendering : 4th approach
        <div>{value}</div>
    )
}

export default ListRender;
