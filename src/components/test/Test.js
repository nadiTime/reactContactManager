import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          title: data.title,
          body: data.body
        });
        console.log(data);
      });
  }
  // componentDidUpdate() {
  //   console.log("component updated");
  // }
  // componentWillUpdate() {
  //   console.log("component will updated");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="display-4">{title}</h1>
        <p className="lead">{body}</p>
      </div>
    );
  }
}

export default Test;
