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
import { HeaderContainer, Float } from "./HeaderStyles";
import NavBar from "./NavBar";

class Header extends Component {

  setUser = () => {
    console.log("setting User");
    if(this.props.token && this.props.currentUser.id === undefined){
      LocalAPI.get("/users/current")
      .then(response => {
        this.props.setCurrentUser(response.data);
      }).catch(err => {
        this.props.clearAuthToken();
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

  render(){

    return(
      <HeaderContainer>
        {this.props.token && 
        <>
          <Link to="/dashboard">
            <Logo width={this.props.headerStyles.logoWidth} fill={this.props.headerStyles.logoFill} />
          </Link>
          <NavBar currentUser={this.props.currentUser}/>
          
        </>
        }
        {!this.props.token &&
        <>
          <Logo width={this.props.headerStyles.logoWidth} fill={this.props.headerStyles.logoFill} />
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
 