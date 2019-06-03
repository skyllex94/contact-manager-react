import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillMount() {
    console.log("componentwillMount");
  }

  //   componentWillMount() {
  //     console.log("componentwillMount");
  //   }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentwillMount");
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
