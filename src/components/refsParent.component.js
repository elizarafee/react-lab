// refs is only can be used in class component not in functional component
import React, { Component } from 'react'
import Refs from './refs.component'

class RefsParent extends Component {
    constructor(props) {
        super(props)

        this.parentRef = React.createRef();
    }

    parentFocus = () => {
        this.parentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Refs ref={this.parentRef} />
                <button onClick={this.parentFocus}>Focus Input</button>
            </div>
        )
    }
}

export default RefsParent
