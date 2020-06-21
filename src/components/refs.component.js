import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }

    focusInput(){
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef}></input>
            </div>
        )
    }
}

export default Refs
