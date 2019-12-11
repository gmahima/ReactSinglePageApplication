import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class Home extends Component {
  handleSubmit(event) {
    event.preventDefault();
    let name = this.name.value;
    let topic = this.topic.value;
    let path = `people/${name}/${topic}`;
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>name</label>
          <input ref={input => (this.name = input)} />
          <label>topic</label>
          <input ref={input => (this.topic = input)} />
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    );
  }
}
