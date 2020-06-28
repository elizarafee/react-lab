// another pattern for sharing code between react components which is the render props pattern. where the props value is a function like HIGHER ORDER COMPONENT.

import React, { Component } from "react";

class RenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increamentCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
        <div>
            {this.props.render(this.state.count, this.increamentCount)}
        </div>
    )
  }
}

export default RenderProps;
