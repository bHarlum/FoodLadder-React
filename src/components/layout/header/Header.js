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
    const { headerStyles, token, currentUser } = this.props;

    return(
      <HeaderContainer position={headerStyles.position}>
        {token && 
        <>
          <Link to="/dashboard">
            <Logo width={headerStyles.logoWidth} fill={headerStyles.logoFill} />
          </Link>
          <NavBar currentUser={currentUser}/>
          
        </>
        }
        {!token &&
        <>
          <Logo width={headerStyles.logoWidth} fill={headerStyles.logoFill} />
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
 