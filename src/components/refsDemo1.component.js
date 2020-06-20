// Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component
// refs make it possible to access DOM nodes directly whithin REACT
// need to follow 3 steps  for refs

import React, { Component } from 'react'

class RefsDemo1 extends Component {
    constructor(props) {
        super(props)
        
        //step 1:
        this.inputRef = React.createRef();
    }

    // step 3:
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }


    render() {
        return (
            <div>
                <input type='text' /*step 2:*/ ref={this.inputRef}></input>
            </div>
        )
    }
}

export default RefsDemo1
