import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "..Style/Header.css";
import img from "../Images/img1.jpg";
import "./Header.css";

export default class Header extends Component {
  state = {
    email: "",
    password: ""
  };

  onChangeName = e => {
    this.setState({ email: e.target.value });
  };

  onChangePswd = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = () => {
    let { email, password } = this.state;
    if (email == "admin" && password == "123") {
      this.props.onLogin();
    } else {
      alert("Invalid Crediatnials");
    }
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          height: "40px",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "black",
          boxShadow: "lightgreen 0px 0px 10px 0px",
          textAlign: "right",
          paddingTop: 8
        }}
      >
        <img
          src={img}
          alt="logo"
          style={{
            position: "fixed",
            left: 0,
            height: 39.5,
            top: 0,
            borderRadius: 50,
            borderColor: "black"
          }}
        />

        <Link to="/" style={{ padding: "20px", color: "white" }}>
          Home
        </Link>
        <Link to="/adduser" style={{ padding: "8px", color: "white" }}>
          Add User
        </Link>
        <Link to="/users" style={{ padding: "8px", color: "white" }}>
          Users
        </Link>
        <Link to="/apitest" style={{ padding: "8px", color: "white" }}>
          User List
        </Link>
      </div>
    );
  }
}
