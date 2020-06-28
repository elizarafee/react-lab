import React, { Component } from "react";

class ClickIncreament extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return (
      <div>
        <button onClick={increamentCount}> clicked {count} times</button>
      </div>
    );
  }
}

export default ClickIncreament;
