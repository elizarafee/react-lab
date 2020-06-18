import React from 'react'
import './css/style.component.css'

const StyleSheet = (props) => {
    let color = props.head_col ? 'heading-color' : '';
    let size = props.head_size ? 'heading-size' : '';

    return (
        <div>
            <h1 className={`${color} ${size}`}>Styling Heading</h1>
        </div>
    )
}

export default StyleSheet;
