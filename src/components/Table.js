import React, { Component } from "react";
import { connect } from "react-redux";
// import Login from '../components/Login';
import { deleteUser } from "../Action/Action";

class Table extends Component {
  onDelete = index => {
    this.props.delTo(index);
  };

  render() {
    return (
      <div style={{ margin: 150 }}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Email</th>
              <th>Designation</th>
              <th>Age</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.table.map((v, k) => {
              return (
                <tr key={k}>
                  <td style={{ textAlign: "center" }}>{v.email}</td>
                  <td>{v.designation}</td>
                  <td>{v.age}</td>
                  <td>{v.city}</td>
                  <td>
                    {v.email === "test values" ? (
                      "No action happend"
                    ) : (
                      <button
                        style={{ padding: 2, marginLeft: 100, marginTop: 5 }}
                        onClick={() => this.onDelete(k)}
                      >
                        Reset
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
    delTo: data => {
      dispatch(deleteUser(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
