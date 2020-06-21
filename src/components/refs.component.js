import React, { Component } from 'react'
import ForwardRef from './forwardRef.component'

class Refs extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <ForwardRef ref={this.inputRef} />
                <button onClick={this.focusInput}>Focus Input</button>
            </div>
        )
    }
}

export default Refs
