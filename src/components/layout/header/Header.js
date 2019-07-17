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
      <HeaderContainer position={this.props.position}>
        <Logo width="370px" height="130px" fill={this.props.logoFill} />

        {this.props.token && 
          <Float>
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
                <Name>{this.props.current_user.firstName}</Name>
              </UserBadge>
            </Dropdown>
          </Float>
        }
        {!this.props.token &&
          <Float>
            {!this.props.token &&
              <Link to="/login">
                <Button type="dashed">Login</Button>
              </Link>
            }
          </Float>
        }
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.user.current,
    token: state.auth.token,
    position: state.header_styles.position,
    logoFill: state.header_styles.logoFill,
  }
}

export default connect(mapStateToProps, { 
  setAuthToken, 
  clearAuthToken, 
  setCurrentUser,
  clearCurrentUser
})(Header);
 