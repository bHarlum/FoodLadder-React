import React, { Component } from 'react';
import { connect } from "react-redux";

import LocalAPI from "./../../apis/local";
import { setCurrentUser } from "./../../actions";
import { FullPage } from "./../layout/Layout";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

export class Dashboard extends Component {

  componentDidMount() {
    LocalAPI.get("/projects/user/current")
      .then( response => {
        this.setState({projects: response.data})
      }).catch( err => {
        console.log(err);
      })
  }

  render() {
    const { currentUser } = this.props;
    return (
      <FullPage>
        { currentUser.admin &&
          <AdminDashboard />
        }
        { currentUser.admin === false && 
          <UserDashboard />
        }
        
      </FullPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.current, 
  }
}

export default connect(mapStateToProps, { setCurrentUser })(Dashboard);
