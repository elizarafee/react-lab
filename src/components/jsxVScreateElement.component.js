import React from 'react'

// using JSX is easier but using createElement is painful coz you have to use it everytime for every tag declaration... 
// EXAMPLE : a simple code is written in both JSX and createElement() method

const Hello = () => {
    /***  JSX CODE:  ***/
    // return(
    //     <div className = 'class1' id = 'id1'>
    //         <h1>Hello Tareque!</h1>
    //     </div>
    // ) 

    /*** createElement() method ***/
    return React.createElement('div', {className : 'class1', id : 'id1'}, React.createElement('h1', null, 'Hello Tareque'))
}

export default Hello