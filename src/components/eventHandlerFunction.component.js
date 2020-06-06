import React from 'react'

const EventHandler1 = () => {
    function eventHandler(){
        console.log('Button clicked!')
    }
    return (
        <div>
            <button onClick={eventHandler}>Click</button>
        </div>
    )
}

export default EventHandler1;
