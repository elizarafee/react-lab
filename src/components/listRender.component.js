import React from 'react'

const ListRender = () => {

    const Arr = ['hello', 'world!', 'you', 'are', 'fake']

    return (
        // List rendering : 2nd approach
        <div>
            {
                Arr.map(x => <h2>{x}</h2>)
            }
        </div>
    )
}

export default ListRender;
