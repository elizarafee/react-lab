import React, { Component } from 'react'

class MountingB extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 name : 'Eliza'
        }
        console.log('B : Mounting : constructor')
    }

    componentDidMount(){
        console.log('B : Mounting : componentDidMount')
    }

    static getDerivedStateFromProps(props, state){
        console.log('B : Mounting : getDerivedFromProps')
        return null
    }

    render() {
        console.log('B : Mounting : render')
        return (
            <div>
                Mounting lifecycle B
            </div>
        )
    }
}

export default MountingB;
