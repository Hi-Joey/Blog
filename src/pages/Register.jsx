import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div className="auth">
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder="username" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button>Register</button>
          <p>This is an error!</p>
          <span>
            Do you have an acccout?
            <br />
            <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    );
  }
}
