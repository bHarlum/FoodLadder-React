import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";

import Logo from "./Logo";
import LocalAPI from "./../../../apis/local";
import { setAuthToken, clearAuthToken } from "./../../../actions/index";

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

class Header extends Component {

  logout = (event) => {
    LocalAPI.get("/users/logout")
      .then(response => {
        this.props.clearAuthToken();
      }).catch(err => {
        console.log(err);
      });
  }

  render(){
    return(
      <HeaderContainer position={this.props.position}>
        <Logo width="370px" height="130px" fill={this.props.logoFill} />
        <Float>
          {this.props.token && <Button type="dashed" onClick={this.logout}>Logout</Button>}
          {!this.props.token &&
            <Link to="/login">
              <Button type="dashed">Login</Button>
            </Link>
          }
        </Float>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    position: state.header_styles.position,
    logoFill: state.header_styles.logoFill,
  }
}

export default connect(mapStateToProps, { setAuthToken, clearAuthToken })(Header);
 