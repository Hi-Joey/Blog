import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: { username: "", password: "" },
      errorStatus: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      inputs: { ...this.state.inputs, [e.target.name]: e.target.value },
    });
  };

  changeError = (err) => {
    this.setState({ errorStatus: err });
  };

  render() {
    return (
      <div className="auth">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleInputChange}
          />

          <Button inputs={this.state.inputs} error={this.changeError} />

          {this.state.errorStatus && <p>{this.state.errorStatus}</p>}
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

function Button(props) {
  const navigate = useNavigate();
  const { currentUser, login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Login inputs", props.inputs);
      await login(props.inputs);
      navigate("/");
    } catch (err) {
      props.error(err.response);
    }
  };

  return <button onClick={handleSubmit}>Login</button>;
}
