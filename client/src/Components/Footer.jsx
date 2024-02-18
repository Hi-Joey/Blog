import React, { Component } from "react";
import logo from "../img/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={logo} alt="logo"></img>
        <span>
          Made with ❤ Yang and <b>React Class</b>
        </span>
      </footer>
    );
  }
}
