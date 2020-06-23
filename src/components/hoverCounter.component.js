import React, { Component } from 'react'
import HigherOrderComponent from './higherOrderComponent'


class HoverCounter extends Component {
    render() {
        const {count, increamentCount} = this.props
        return (
            <div>
                <h1 onMouseOver={increamentCount}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default HigherOrderComponent(HoverCounter)
