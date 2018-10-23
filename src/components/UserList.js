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
            <tr style={{ textAlign: "center",borderRadius:2, border:"solid" }}>
              <th style={{ textAlign: "center",borderRadius:2, border:"solid" }}>Name</th>
              <th style={{ textAlign: "center",borderRadius:2, border:"solid" }}>City</th>
              <th style={{ textAlign: "center",borderRadius:2, border:"solid" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.person.map((v, i) => {
              return (
                <tr key={i} style={{borderRadius:2, border:"solid"} }>
                  <td style={{ textAlign: "center",borderRadius:2, border:"solid" }}>{v.name.first}</td>
                  <td style={{ textAlign: "center",borderRadius:2, border:"solid" }}>{v.location.city}</td>
                  <td style={{ textAlign: "center",borderRadius:2, border:"solid" }}>{v.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
