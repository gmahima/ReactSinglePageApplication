import React, { Component } from "react";

class Home extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let teacherTopic = this.topic.value;
    let teacherName = this.name.value;
    let path = `people/${teacherTopic}/${teacherName}`;
    this.props.history.push(path);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            ref={input => (this.name = input)}
          />
          <input
            type="text"
            placeholder="Topic"
            ref={input => (this.topic = input)}
          />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;
