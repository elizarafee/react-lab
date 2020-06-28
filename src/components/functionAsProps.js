import React, { Component } from 'react'

class FunctionAsProps extends Component {
    render() {
        return (
            <div>
                {this.props.name(false)}
            </div>
        )
    }
}

export default FunctionAsProps