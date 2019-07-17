import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Avatar, Dropdown, Menu } from "antd";

import Logo from "./Logo";
import LocalAPI from "./../../../apis/local";
import { setAuthToken, clearAuthToken, setCurrentUser, clearCurrentUser } from "./../../../actions/index";

const HeaderContainer = styled.div`
  position: ${ props => props.position || "static" };
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Float = styled.div`
  position: absolute;
  right: 40px;
  top: 45px;
`

const UserBadge = styled.div`
  width: 250px;
  padding: 15px 30px;
`;

const Name = styled.h3`
  display: inline;
  margin: 0 0 0 15px;
`;

class Header extends Component {

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
          <nav>
            <ul>
              <li>
                <Link to="/forum">Forum</Link>
              </li>
            </ul>
          </nav>
          <Dropdown overlay={
              <Menu>
                <Menu.Item key="0">
                  <a href="#">Settings</a>
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
    headerStyles: state.header_styles,
  }
}

export default connect(mapStateToProps, { 
  setAuthToken, 
  clearAuthToken, 
  setCurrentUser,
  clearCurrentUser
})(Header);
 