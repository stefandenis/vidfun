import React, { Component } from "react";
import PropTypes from "prop-types";
class LoginInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        username: "",
        password: ""
      },
      buttonSendData: false,
      error: ""
    };

    this.renderDisplayFields = this.renderDisplayFields.bind(this);
    this.renderSendData = this.renderSendData.bind(this);
    this.extend = this.extend.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onSubmit() {
    this.props.submit(this.state.data);
  }

  extend() {
    this.setState({ username: "", password: "", buttonSendData: true });
    console.log(this.state.buttonSendData);
    const logExtend = document.getElementById("user-info-container");
    logExtend.classList.add("left");
  }

  renderDisplayFields() {
    return (
      <div className="user-box username-pass">
        <div className="user-info-container user-box" id="user-info-container">
          <input
            className="input username"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            className="input password"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>

        <button onClick={this.extend} className="login-btn" type="submit">
          Log in
        </button>
      </div>
    );
  }

  renderSendData() {
    const { data } = this.state;
    return (
      <div className="user-box username-pass">
        <div className="user-info-container user-box" id="user-info-container">
          <input
            onChange={this.handleChange}
            value={data.username}
            className="input username"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            onChange={this.handleChange}
            value={data.password}
            className="input password"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>

        <button onClick={this.onSubmit} className="login-btn" type="submit">
          Log in
        </button>
      </div>
    );
  }

  render() {
    if (!this.state.buttonSendData) return this.renderDisplayFields();
    else return this.renderSendData();
  }
}

LoginInfo.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginInfo;
