// react.fragments let us group a list of children elements without adding extra nodes to the DOM
// < React.Fragments > or <>
// it can contain the 'key' attr on rendering lists of items

import React from 'react'

const Fargments = () => {
    return (
        <React.Fragment>
            <h1>The Cow</h1>
            <p>Cow is a domestic animal</p>
        </React.Fragment>
    )
}

export default Fargments;
