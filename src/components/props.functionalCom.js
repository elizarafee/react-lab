import React from 'react'

const Pro = props => {
    console.log(props)
    return (
        <div>
            <h1>first name : {props.fname}, second name : {props.sname}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Pro; 