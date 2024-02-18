import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="auth">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Login</button>
          <p>This is an error!</p>
          <span>
            Don't have an acccout?
            <br />
            <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    );
  }
}
