import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Avatar, Menu } from "antd";

import Logo from "./Logo";
import LocalAPI from "./../../../apis/local";
import { setAuthToken, clearAuthToken, setCurrentUser, clearCurrentUser } from "./../../../actions/index";
import { HeaderContainer, Dropdown, Float, UserBadge, Name } from "./HeaderStyles";
import { Nav } from "./../Layout";

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
          <Nav>
            <ul>
              <li>
                <Link to="/forum">Forum</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
          </Nav>
          <Dropdown overlay={
              <Menu>
                <Menu.Item key="0">
                  <a href="/settings">Settings</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2">
                  <Button type="dashed" onClick={this.logout}>Logout</Button>
                </Menu.Item>
              </Menu>
          } trigger={['click']}>
            <UserBadge>
              <Avatar icon="user" size={35} />
              <Name>{this.props.currentUser.firstName}</Name>
            </UserBadge>
          </Dropdown>
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
 