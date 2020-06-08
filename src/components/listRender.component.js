import React from 'react'

const ListRender = () => {

    const Arr = ['hello', 'world!', 'you', 'are', 'fake']

    return (
        // List rendering : 1st approach
        <div>
            <h3>{Arr[0]}</h3>
            <h3>{Arr[1]}</h3>
            <h3>{Arr[2]}</h3>
            <h3>{Arr[3]}</h3>
            <h3>{Arr[4]}</h3>
        </div>
    )
}

export default ListRender;
