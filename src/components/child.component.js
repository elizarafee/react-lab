import React from 'react'


const Child = (props) => {
    return (
        <div>
            <button onClick={()=>{props.greetHandler('Eliza')} }>Greet parent</button>
        </div>
    )
}

export default Child;
