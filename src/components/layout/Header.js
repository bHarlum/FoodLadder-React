import React, { Component } from "react";
import styled from "styled-components";

import logo from "./../../assets/images/food_ladder_logo.png";

const Logo = styled.div`
  width: 302px;
  height: 58px;
  background-image: url(${logo});
  background-size: cover;
`

class Header extends Component {

  render(){
    return(
      <Logo />
    );
  }
}

export default Header;