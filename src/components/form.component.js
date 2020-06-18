import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
    };
  }

  changeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  changeComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Username </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeUsername}
          />
        </div>
        <div>
          <label>Comments </label>
          <textarea
            type="text"
            value={this.state.comment}
            onChange={this.changeComment}
          />
        </div>
      </form>
    );
  }
}

export default Form;
