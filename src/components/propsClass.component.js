import React, {Component} from 'react'

class Prop extends Component {
    constructor(){
        super();

        this.state = {
            state1 : 'Hasan',
            state2 : 'Tareque'
        }
    }
    
    render(){
    const {fnamee, snamee} = this.props
    const {state1, state2} = this.state
    
    return (
    <div>
    <h3>first props : {fnamee}, last props : {snamee}</h3>
    <h3>first state : {state1}, last state : {state2}</h3>
    <p>{this.props.children}</p>
    </div>
    )
    }
}

export default Prop