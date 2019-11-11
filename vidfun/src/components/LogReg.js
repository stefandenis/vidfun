import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginInfo from "./LoginInfo.js";

const RegisterBox = () => {
  return (
    <div className="user-box register">
      <Link to="/register" className="link">
        Register
      </Link>
    </div>
  );
};

class LogReg extends Component {
  submit(data) {
    console.log(data);
  }

  render() {
    return (
      <div id="user-box-login-register">
        <LoginInfo submit={this.submit} />

        <RegisterBox />
      </div>
    );
  }
}

export default LogReg;
