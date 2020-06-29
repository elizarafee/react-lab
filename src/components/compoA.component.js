import React, { Component } from 'react'
import CompoC from './compoC.component'
import { UserConsumer } from './userContext'


class CompoA extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                    return (
                    <div>
                        Component A {username}
                        <CompoC />
                    </div>
                    )
                    }
                }
            </UserConsumer>
        )
    }
}

export default CompoA
