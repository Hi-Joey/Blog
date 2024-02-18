import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: { username: "", email: "", password: "" },
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
        <h1>Register</h1>
        <form>
          <input
            required
            type="text"
            name="username"
            placeholder="username"
            onChange={this.handleInputChange}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="email"
            onChange={this.handleInputChange}
          />
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleInputChange}
          />
          <Button inputs={this.state.inputs} error={this.changeError} />

          {this.state.errorStatus && <p>{this.state.errorStatus}</p>}
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

function Button(props) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", props.inputs);
      console.log("User has been created.");
      //alert("User has been created.");
      navigate("/login");
    } catch (err) {
      console.log("error occur", err);
      console.log("error occur", err.message);
      props.error(err.response.data.message);
    }
  };

  return <button onClick={handleSubmit}>Register</button>;
}
