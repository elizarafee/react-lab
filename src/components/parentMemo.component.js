import React, { Component } from "react";
import MemoCom from './memo.component'

class ParentMemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Eliza",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Eliza",
      });
    }, 2000);
  }

  render() {
      console.log('***********Parent class***************')
    return (
      <div>
        <h1>parent class</h1>
        <MemoCom name={this.state.name}/>
      </div>
    );
  }
}

export default ParentMemo;
