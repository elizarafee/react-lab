import React, { Component} from 'react';
// imorting a FUNCTIONAL component in a CLASS component
import Eliza from './eliza.component';

class Age extends Component {
    render(){
        return <Eliza age={20} />
    }
}

export default Age;