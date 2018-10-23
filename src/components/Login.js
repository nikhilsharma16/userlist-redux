import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../Action/Action";
class Login extends Component {
  state = {
    email: "",
    password: "",
    age: "",
    city: "",
    designation: ""
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onChangePswd = e => {
    this.setState({ password: e.target.value });
  };

  onChangeAge = e => {
    this.setState({ age: e.target.value });
  };

  onChangeCity = e => {
    this.setState({ city: e.target.value });
  };

  onChangeDesignation = e => {
    this.setState({ designation: e.target.value });
  };

  // onSubmit = () => {
  //   alert("Succsessful");
  //   // let { email, password } = this.state;
  //   // if (email == "admin" && password == "123") {

  //   //   alert("Login successfull")
  //   // } else {
  //   //   alert("Invalid Crediatnials");
  //   // }
  // };

  onReset = () => {
    alert("Unsuceesfull");
    this.setState({ email: "", password: "", age:"", city:"", designation:"" });
  };

  render() {
    return (
      <div
        className="container"
        style={{
          border: "solid",
          borderRadius: 20,
          marginLeft: 220,
          marginTop: 10,
          padding: 45,
          paddingRight: 68,
          marginRight: 40,
          width: 360,
          backgroundColor:"grey",
          color:"white"
        }}
      >
        <h1 style={{ textAlign: "left", color: "green" }}>Login Form</h1>

        <input
          type="text"
          placeholder="email"
          onChange={this.onChangeEmail}
          value={this.state.email}
          style={{ textAlign: "center", width: "100%", margin: 15 }}
        />
        <br />
        <input
          type="number"
          placeholder="age"
          onChange={this.onChangeAge}
          value={this.state.age}
          style={{ textAlign: "center", width: "100%", margin: 15 }}
        />
        <br />

        <input
          type="text"
          placeholder="city"
          onChange={this.onChangeCity}
          value={this.state.city}
          style={{ textAlign: "center", width: "100%", margin: 15 }}
        />
        <br />
        <input
          type="text"
          placeholder="designation"
          onChange={this.onChangeDesignation}
          value={this.state.designation}
          style={{ textAlign: "center", width: "100%", margin: 15 }}
        />
        <br />

        <input
          type="text"
          placeholder="enter password"
          onChange={this.onChangePswd}
          value={this.state.password}
          style={{ textAlign: "center", width: "100%", margin: 15 }}
        />
        <br />
        <button
          className="btn-success"
          style={{
            textAlign: "center",
            width: 80,
            margin: 15,
            border: "solid",
            borderRadius: 20
          }}
          onClick={() => this.props.addTo(this.state)}
        >
          Submit
        </button>
        <button
          className="btn-primary"
          style={{
            textAlign: "center",
            width: 80,
            margin: 15,
            border: "solid",
            borderRadius: 20,
            left: 350
          }}
          onClick={this.onReset}
        >
          Reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    table: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTo: data => {
      dispatch(addUser(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
