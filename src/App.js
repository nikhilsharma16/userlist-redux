import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import Card from "./components/Card";
import Table from "./components/Table";
import UserList from "./components/UserList";

class App extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "lightgreen",
          border: "solid",
          borderRadius: 100,
          height: "100",
          marginTop: 50
        }}
      >
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Header} />
            <Route path="/adduser" component={AddUser} />
            <Route path="/users" component={Table} />
            <Route path="/apitest" component={UserList} />
          </div>
        </BrowserRouter>
        <Card />
      </div>
    );
  }
}

export default App;
