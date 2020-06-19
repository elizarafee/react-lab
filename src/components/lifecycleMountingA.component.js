import React, { Component } from 'react'
import MountingB from './lifecycleMountingB.component'

class MountingA extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 name : 'Eliza'
        }
        console.log('A : Mounting : constructor')
    }

    componentDidMount(){
        console.log('A : Mounting : componentDidMount')
    }

    static getDerivedStateFromProps(props, state){
        console.log('A : Mounting : getDerivedFromProps')
        return null
    }

    render() {
        console.log('A : Mounting : render')
        return (
            <div>
                Mounting lifecycle A
                <MountingB />
            </div>
        )
    }
}

export default MountingA;
