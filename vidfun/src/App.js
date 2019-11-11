import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import MainPage from "./components/MainPage.js";

import RegisterPage from "./components/RegisterPage/RegisterPage.js";
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={MainPage} />
        <Route path="/register" component={RegisterPage} />
      </div>
    );
  }
}

export default App;
