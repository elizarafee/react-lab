import React, { Component } from "react";
import RegCom from "./regclass.component";
import PureCom from "./pure.component";

class ComponentVsPurecom extends Component {
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
        <RegCom name={this.state.name} />
        <PureCom name={this.state.name} />
      </div>
    );
  }
}

export default ComponentVsPurecom;
