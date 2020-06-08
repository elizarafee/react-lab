import React, { Component } from 'react'
/*
there are 4 approaches of conditional rendering :
1 - if else
2 - element variable
3 - ternary operator ( it can be used in JSX)
4 - short circuit operator (this is just a specific case of this ternary operator which has not any else condition)
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
        // if(this.state.ifLoggedIn){
        //     return <h1>hello Eliza</h1>
        // }else{
        //     return <h1>hello guest</h1>
        // }

        // 2 : element variable
        // let message
        // if(this.state.ifLoggedIn){
        //     message = <div>hello Eliza</div>
        // }else{
        //     message = <div>hello guest</div>
        // }
        // return <div>{message}</div>

        // 3 : ternary operator ( it can be used in JSX)
        // return this.state.ifLoggedIn ? 
        // (<div>Hello Eliza</div>) :
        // (<div>Hello guest</div>)

        // 4 - short circuit operator (this is just a specific case of this ternary operator which has not any else condition)
        return this.state.ifLoggedIn && <div>Hello Eliza</div>
    }
}


export default Condition
