import React, { Component } from 'react'

class eventHandler2 extends Component {
    eventHandler2() {
        console.log('Button clicked!')
    }

    render() {
        return (
            <div>
                <button onClick={this.eventHandler2}>Click</button>
            </div>
        )
    }
}

export default eventHandler2
