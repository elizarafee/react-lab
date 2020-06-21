import React from 'react'

//functional component accept the props as its perameter but when the component is passed as a perameter to the createRef method it receives the 'ref' attribute as it's second perameter
const ForwardRef = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default ForwardRef;
