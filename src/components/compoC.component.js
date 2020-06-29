import React, { Component } from 'react'
import CompoD from './compoD.component'
import UserContext from './userContext'

// limitations of using contextType :
// 1 : it can only work with class components
// 2 : you can only subscribe single component using contextType

class CompoC extends Component {
   static contextType = UserContext
    render() {
        return (
            <div>
                Component C {this.context}
                <CompoD />
            </div>
        )
    }
}

// another way of defining contextType :
// CompoC.contextType = UserContext;

export default CompoC
