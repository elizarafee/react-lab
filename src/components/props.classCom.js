import React, {Component} from 'react'

class Prop extends Component {
    render(){
    return (
    <span>
    <h3>first name : {this.props.fnamee}, last name : {this.props.snamee}</h3>
    <p>{this.props.children}</p>
    </span>
    )
    }
}

export default Prop