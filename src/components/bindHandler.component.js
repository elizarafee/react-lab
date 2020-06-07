import React, { Component } from 'react'

class BindHandler extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 message : 'Hi!'
        }
        //  3rd approach : binding in the constructor 
        // this.change = this.change.bind(this)
    }

    // change(){
    //     this.setState({
    //         message : 'Bye!'
    //     })
    // }

    // 4th approach : arrow function in class property
    change = () => {
        this.setState({
            message : 'Bye!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* 1st approach */}
                {/* <button onClick = {this.change.bind(this)}>Click</button>    */}
                {/* 2nd approach */}
                {/* <button onClick = {() => this.change()}>Click</button>    */}
                {/* 3rd approach */}
                {/* <button onClick = {this.change}>Click</button>    */}
                {/* 4th approach */}
                <button onClick = {this.change}>Click</button>
            </div>
        )
    }
}

export default BindHandler
