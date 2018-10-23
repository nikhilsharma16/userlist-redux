import React, { Component } from "react";
export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = { person: [] };
  }

  componentDidMount() {
    this.UserList();
  }

  UserList = () => {
    // alert("in api")
    fetch("https://randomuser.me/api/?results=20")
      .then(response => response.json())
      .then(responseJson => {
        // alert("in api 3")
        console.log("data", responseJson.results[0]);

        this.setState({ person: responseJson.results });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div style={{ margin: 150 }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.person.map((v, i) => {
              return (
                <tr key={i}>
                  <td style={{ textAlign: "center" }}>{v.name.first}</td>
                  <td>{v.location.city}</td>
                  <td>{v.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
