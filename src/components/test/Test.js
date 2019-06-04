import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log("componentwillMount");
  // }

  //   componentWillMount() {
  //     console.log("componentwillMount");
  //   }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentwillMount");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p className="text-secondary">{body}</p>
      </div>
    );
  }
}

export default Test;
