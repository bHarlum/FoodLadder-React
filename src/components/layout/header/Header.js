import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";

import Logo from "./Logo";
import LocalAPI from "./../../../apis/local";
import { 
  setAuthToken, 
  clearAuthToken, 
  setCurrentUser, 
  clearCurrentUser 
} from "./../../../actions/index";
import { HeaderContainer, Float, UserBadge } from "./HeaderStyles";
import NavBar from "./NavBar";

class Header extends Component {

  setUser = () => {
    if(this.props.token && this.props.currentUser.id === undefined){
      LocalAPI.get("/users/current")
      .then(response => {
        this.props.setCurrentUser(response.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  componentDidMount() {
    this.setUser();
  }

  componentDidUpdate() {
    this.setUser();
  }

  logout = (event) => {
    LocalAPI.get("/users/logout")
      .then(response => {
        this.props.clearAuthToken();
        this.props.clearCurrentUser();
      }).catch(err => {
        console.log(err);
      });
  }

  render(){

    return(
      <HeaderContainer position={this.props.headerStyles.position}>
        {this.props.token && 
        <>
          <Link to="/dashboard">
            <Logo width={this.props.headerStyles.logoWidth} height="130px" fill={this.props.headerStyles.logoFill} />
          </Link>
          <NavBar currentUser={this.props.currentUser}/>
          
        </>
        }
        {!this.props.token &&
        <>
          <Logo width={this.props.headerStyles.logoWidth} height="130px" fill={this.props.headerStyles.logoFill} />
          <Float>
            <Link to="/login">
              <Button type="dashed">Login</Button>
            </Link>
          </Float>
        </>
        }
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.current,
    token: state.auth.token,
    headerStyles: state.headerStyles,
  }
}

export default connect(mapStateToProps, { 
  setAuthToken, 
  clearAuthToken, 
  setCurrentUser,
  clearCurrentUser
})(Header);
 