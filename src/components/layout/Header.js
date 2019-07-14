import React, { Component } from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "./../../assets/images/food_ladder_logo_white.svg";

// const Logo = styled.div`
//   width: 302px;
//   height: 58px;
//   background-image: url(${logo});
//   background-size: cover;
// `

const logoStyle = {
  fill: "#fff",
  width: "370px",
  height: "130px",
}

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

class Header extends Component {

  render(){
    return(
      <HeaderContainer>
        <Logo style={logoStyle} />
      </HeaderContainer>
    );
  }
}

export default Header;