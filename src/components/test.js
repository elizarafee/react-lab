import React from 'react'
import ReactDOM from 'react-dom'

const Test = () => {
    return ReactDOM.createPortal(
        <div>
            <h1> Hasan Tareque</h1>
        </div>
    ,
    document.getElementById('portal-1')
    )
}

export default Test;
