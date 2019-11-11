import React, { Component } from "react";
import Header from "./Header.js";

class MainPage extends Component {
  submit(data) {
    console.log(data);
  }

  render() {
    return <Header submit={this.submit} />;
  }
}

export default MainPage;
