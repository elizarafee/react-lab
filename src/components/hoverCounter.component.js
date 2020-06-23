import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 count: 0
        }
    }

    increamentCount = () => {
        this.setState( prevStae => {
            return {count: prevStae.count +1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h1 onMouseOver={this.increamentCount}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default HoverCounter
