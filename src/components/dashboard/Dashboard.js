import React, { Component } from 'react';
import { Typography } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";
import { setCurrentUser } from "./../../actions";
import { FullPage } from "./../layout/Layout";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const { Title } = Typography;

export class Dashboard extends Component {

  state = {
    projects: []
  }

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
    const { projects } = this.state;
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
