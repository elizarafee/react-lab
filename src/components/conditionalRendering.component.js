import React, { Component } from 'react'
/*
there are 4 approaches of conditional rendering :
1 - if else
2 - element variable
3 - ternary operator
4 - short circuit operator
*/

class Condition extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 ifLoggedIn : true
        }
    }

    render() {
        // 1 : if else
        if(this.state.ifLoggedIn){
            return <h1>hello Eliza</h1>
        }else{
            return <h1>hello guest</h1>
        }
    }
}


export default Condition
