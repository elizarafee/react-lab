import React, {Component} from 'react'

class Prop extends Component {
    render(){
    const {fnamee, snamee} = this.props
    return (
    <div>
    <h3>first name : {fnamee}, last name : {snamee}</h3>
    <p>{this.props.children}</p>
    </div>
    )
    }
}

export default Prop