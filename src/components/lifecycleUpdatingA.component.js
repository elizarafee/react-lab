import React, { Component } from 'react'
import UpdatingB from './lifecycleUpdatingB.component'

class UpdatingA extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 name : 'Eliza'
        }
        console.log('A : Updating : constructor')
    }

    
    static getDerivedStateFromProps(){
        console.log('A : Updating : getDerivedFromProps')
        return null
    }

    
    shouldComponentUpdate(nextProps, nextState){
        console.log('A : Updating : shouldComponentUpdate')
        return true
    }

    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('A : Updating : getSnapshotBeforeUpdate')
        return null
    }


    componentDidUpdate(prevProps, prevState){
        console.log('A : Updating : componentDidUpdate')
    }


    change = () => {
        this.setState({
            name: 'Tareque'
        })
    }

    render() {
        console.log('A : Updating : render')
        return (
            <div>
                Updating lifecycle A
                <h3>{this.state.name}</h3>
                <button onClick={this.change.bind(this)}>change</button>
                <UpdatingB />
            </div>
        )
    }
}

export default UpdatingA;
