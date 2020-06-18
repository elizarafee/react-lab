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
        </div>
    )
    
}

export default InlineStyle;