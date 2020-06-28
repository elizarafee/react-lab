import React, { Component } from "react";

class HoverIncreament extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={increamentCount}>Hovered {count} times</h1>
      </div>
    );
  }
}

export default HoverIncreament;
