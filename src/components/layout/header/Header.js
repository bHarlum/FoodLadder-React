import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, message } from "antd";

import Logo from "./Logo";
import LocalAPI from "./../../../apis/local";
import { 
  setAuthToken, 
  clearAuthToken, 
  setCurrentUser, 
  clearCurrentUser 
} from "./../../../actions/index";
import { HeaderContainer, Float, LogoLink } from "./header_styles";
import NavBar from "./NavBar";

class Header extends Component {

  setUser = () => {
    if(this.props.token && !this.props.currentUser.id){
      LocalAPI.get("/users/current")
        .then(response => {
          this.props.setCurrentUser(response.data);
        }).catch(err => {
          this.props.clearAuthToken();
          message.info("You have been logged out for security reasons.");
        })
    }
  }

  componentDidMount() {
    this.setUser();

    LocalAPI.put('/users/update', { firstName: "test"})
      .then(response => {
        console.log(response);
      }).catch( err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    this.setUser();
  }

  render(){
    const { headerStyles, token, currentUser } = this.props;

    return(
      <HeaderContainer position={headerStyles.position}>
        {token && 
        <>
          <LogoLink to="/dashboard">
            <Logo width={headerStyles.logoWidth} fill={headerStyles.logoFill} />
          </LogoLink>
          <NavBar currentUser={currentUser}/>
          
        </>
        }
        {!token &&
        <>
          <LogoLink to="/">
            <Logo width={headerStyles.logoWidth} fill={headerStyles.logoFill} />
          </LogoLink>
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
 