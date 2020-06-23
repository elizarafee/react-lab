// a pattern where a function takes a component as an argument and returns a new component
// const NewComponent = higherOrderComponent(OriginalComponent)
// HOC adds additional data or functionality to the original component. so the new component can refered to as enhanced components
// const EnhancedComponent = higherOrderComponent(OriginalComponent)

import React from "react";

const HigherOrderComponent = (OriginalComponent) => {
  class newComponent extends React.Component {
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
        <OriginalComponent
          count={this.state.count}
          increamentCount={this.increamentCount}
          // passing props from app.js wont go to the counters instead it will go for the HOC
          // so when you make HOC make sure to pass down the rest of the props like the next line
          {... this.props}
        />
      );
    }
  }

  return newComponent;
};

export default HigherOrderComponent;
