import React, { Component } from 'react';
import { connect } from "react-redux";

import { setCurrentUser, setLocation } from "./../../actions";
import { FullPage } from "./../layout/app_styles";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

export class Dashboard extends Component {

  componentDidMount() {
    this.props.setLocation("dashboard");
  }

  componentWillUnmount() {
    this.props.setLocation(null);
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

export default connect(mapStateToProps, { setCurrentUser, setLocation })(Dashboard);
