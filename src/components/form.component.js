import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "",
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

  changeTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
      alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
      event.preventDefault()
  }

  render() {
      const {username, comment, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={this.changeUsername}
          />
        </div>
        <div>
          <label>Comments </label>
          <textarea
            type="text"
            value={comment}
            onChange={this.changeComment}
          />
        </div>
        <div>
          <label>Topic </label>
          <select value={topic} onChange={this.changeTopic}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;
