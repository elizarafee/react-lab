import React, { Component } from 'react'


class UpdatingB extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 name : 'Eliza'
        }
        console.log('B : Updating : constructor')
    }

    static getDerivedStateFromProps(){
        console.log('B : Updating : getDerivedFromProps')
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('B : Updating : shouldComponentUpdate')
        return true
    }

    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('B : Updating : getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState){
        console.log('B : Updating : componentDidUpdate')
    }

    render() {
        console.log('B : Updating : render')
        return (
            <div>
                Updating lifecycle B
            </div>
        )
    }
}

export default UpdatingB;
