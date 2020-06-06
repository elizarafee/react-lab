import React, {Component} from 'react'

/*does and don'ts 

state is managed within the component. declared in function body. states can be changed it means it's mutable .
functional component : useState Hook
class component : this.state/ this.setState
1 - never try to change the state irectly instead use setState. otherwise react will  not rerender the component
2 - react may group multiple setState calls into a single update for better performance so there have to pass a funcgtion as an setState argument instead of object
3 - when someone need to update the state based on the previous state make sure to pass a function as a argument instead of a object

*/

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    increase(){
        // this.setState({
        //     count : this.state.count + 1
        // },(()=> console.log(this.state.count)) 
        // )
        this.setState(prevState => ({
            count : prevState.count + 1
        }), (()=> console.log(this.state.count)))
    }

    incrementFive(){
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();
    }


    
    render(){
        return(
            <div>
                <h1>count : {this.state.count}</h1>
                <button onClick = {() => this.incrementFive()}>Increament</button>
            </div>
        )

    }
}

export default Counter