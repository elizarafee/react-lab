import React from 'react'

const ListRender = () => {

    const Arr = ['hello', 'world!', 'you', 'are', 'fake']
    const value = Arr.map(x => <h2>{x}</h2>)
    return (
        // List rendering : 3rd approach
        <div>{value}</div>
    )
}

export default ListRender;
