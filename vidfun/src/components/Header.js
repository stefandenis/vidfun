import React, { Component } from "react";
import LogReg from "./LogReg.js";
import Logo from "./Logo.js";

class Header extends Component {
  submit(data) {
    console.log(data);
  }

  render() {
    return (
      <header id="header">
        <span id="logo-margin">
          <Logo />
        </span>
        <LogReg submit={this.submit} />
      </header>
    );
  }
}

export default Header;
