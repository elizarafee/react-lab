// react.fragments let us group a list of children elements without adding extra nodes to the DOM
// < React.Fragments > or <>
// it can contain the 'key' attr on rendering lists of items

import React from 'react'

const Fargments = () => {
    const items = ['abc', 'bcd', 'cde', 'def', 'efg']
    return (
        <React.Fragment>
            {
            items.map((val, index) => (
                <React.Fragment key={index}>
                    <h1>{index} {val}</h1>
                </React.Fragment>
            ))
            }
            <h1>The Cow</h1>
            <p>Cow is a domestic animal</p>
        </React.Fragment>
    )
}

export default Fargments;
