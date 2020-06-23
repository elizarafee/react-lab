import React, { Component } from 'react'
import HigherOrderComponent from './higherOrderComponent'

class ClickCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 count: 0
        }
    }

    increamentCount = () => {
        this.setState( prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.increamentCount}>{this.props.greet} Clicked {count} times</button>
            </div>
        )
    }
}

export default HigherOrderComponent(ClickCounter)
