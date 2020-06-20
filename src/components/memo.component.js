// the thing pure component does for class component that same thing Memo does for functional component

import React from 'react'

const MemoCom = (props) => {
    console.log('Memo render')
    return (
        <div>
            Memo component render {props.name}
        </div>
    )
}

// defining memo
export default React.memo(MemoCom);
