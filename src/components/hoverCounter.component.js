import React, { Component } from 'react'
import HigherOrderComponent from './higherOrderComponent'


class HoverCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 count: 0
        }
    }

    increamentCount = () => {
        this.setState( prevState => {
            return {count: prevState.count +1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h1 onMouseOver={this.increamentCount}>{this.props.greet} Hovered {count} times</h1>
            </div>
        )
    }
}

export default HigherOrderComponent(HoverCounter)
