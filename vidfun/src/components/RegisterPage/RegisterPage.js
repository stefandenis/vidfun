import React, { Component } from "react";
import Logo from "../Logo";
import "./RegisterPage.css";
import axios from "axios";
import { generateKeyPair } from "crypto";
const Verifier = require("email-verifier");

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "",
        username: "",
        email: "",
        password: "",
        password2: ""
      }
    };
    this.registerButton = this.registerButton.bind(this);
    this.submit = this.submit.bind(this);
    this.passwordMatch = this.passwordMatch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }

  handleChange(e) {
    const { name, username, email, password, password2 } = this.state.data;
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  passwordMatch() {
    const { name, username, email, password, password2 } = this.state.data;

    if (!(password === password2)) {
      return <div style={divStyle}> Passwords do not match</div>;
    }
  }

  registerButton() {
    const { name, username, email, password, password2 } = this.state.data;
    if (password === password2 && password.length && password2.length)
      return (
        <button className="register-btn" onSubmit={this.submit}>
          Register
        </button>
      );
    else
      return (
        <button className="register-btn" style={disabledButton} disabled>
          Register
        </button>
      );
  }

  submitRegister(event) {
    event.preventDefault();

    fetch("http://localhost:5000/register", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*"
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer" // no-referrer, *client
    })
      .then(function(response) {
        console.log(response);
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }

  submit() {}

  render() {
    return (
      <div>
        <div align="center" className="register-header">
          <Logo />

          <hr id="delimiter-register" />
          <hr id="delimiter-register" />

          <div className="form-register-container">
            <a className="social-login" href="#">
              <i class="fab fa-facebook" />
              Login with Facebook
            </a>
            <a className="social-login" href="#">
              <i class="fab fa-twitter-square" />
              Login with Twitter
            </a>
            <a className="social-login" href="#">
              <i class="fab fa-google-plus-square" />
              Login with Google
            </a>
            <div align="left">
              <form onSubmit={this.submitRegister}>
                <label for="name">Your name</label>
                <input
                  onChange={this.handleChange}
                  className="register-fields"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name..."
                />

                <label for="username">Your username</label>
                <input
                  onChange={this.handleChange}
                  className="register-fields"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username..."
                />

                <label for="email">Your email</label>
                <input
                  onChange={this.handleChange}
                  className="register-fields"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email..."
                />

                <label for="password">Choose your password</label>
                <input
                  onChange={this.handleChange}
                  className="register-fields"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password..."
                />

                <label for="password2">Verify your password</label>
                <input
                  onChange={this.handleChange}
                  className="register-fields"
                  id="password2"
                  type="password"
                  name="password2"
                  placeholder="Verify password..."
                />

                {this.passwordMatch()}
                {this.registerButton()}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var divStyle = {
  color: "red"
};

var disabledButton = {
  backgroundColor: "gray"
};

export default RegisterPage;
