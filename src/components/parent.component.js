import React, { Component } from 'react'
import Child from './child.component'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 parentName : 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`parent name : ${this.state.parentName}, Child name : ${childName}`)
    }

    render() {
        return (
            <div>
                <Child greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default Parent
