// Component doesn't implement the shouldUpdateMAethod. it always returns true by default

import React, { Component } from 'react'

class RegCom extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        console.log('Regular component render')
        return (
            <div>
                Regular component render {this.props.name}
            </div>
        )
    }
}

export default RegCom;
