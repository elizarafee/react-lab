import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class CompoD extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Component D {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default CompoD;
