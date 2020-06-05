import React, {Component} from 'react'

class Message1 extends Component {
    constructor(){
        super();

        this.state = {
            message : 'Please subscribe',
            btnMessage : 'Subscribe'
        }
    }

    messageChange(){
        this.setState ({
                message : 'thanks for subscribing',
                btnMessage : 'Subscribed'
        })
    }

    btnChange(){
        /**** it wont be executed coz Maximum update depth exceeded(state) */
        // this.setState ({
        //         message : 'thanks for subscribing',
        //         btnMessage : 'Subscribed'
        // })
    }
    
    render(){
        
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button className = 'subscribeBtn' onClick= {()=> this.messageChange()}>{this.state.btnMessage}</button>
                {this.btnChange()}
            </div>
        )
    }
}


export default Message1