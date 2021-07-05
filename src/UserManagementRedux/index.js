import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import {connect} from 'react-redux';
class Home extends Component {
  render() {
    let {addUser} = this.props;
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              addUser();
            }}
          >
            Add User
          </button>
        </div>
        <Users />
        <Modal />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: () => {
      const action = {
        type: 'EDIT_USER',
        payload: null
      }
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps) (Home);