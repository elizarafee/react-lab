import React from 'react'

const sty = {
    color: 'red',
    fontSize: '5rem',
    fontStyle: 'italic'
}

const InlineStyle = () => {
    return (
        <div>
            <h1 style={sty}>Inline Style</h1>
            {/* regular CSS stylesheet can be used in any file outside o that */}
            <h1 className='color'>CSS stylesheet</h1>
            {/* CSS module is locally scoped so the next line will get an error */}
            {/* <h1 className={styy.colors}>CSS module</h1> */}
            {/* regular CSS stylesheet can be used in any file outside o that */}
            <h1 className='colors'>CSS stylesheet from outside</h1>
            {/* CSS module is locally scoped so the next line will get an error */}
            {/* <h1 className={a.colors}>CSS module from outside</h1> */}
        </div>
    )   
}

export default InlineStyle;