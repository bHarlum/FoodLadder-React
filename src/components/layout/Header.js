import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// import { ReactComponent as Logo } from "./../../assets/images/food_ladder_logo_white.svg";

import Logo from "./Logo";

const HeaderContainer = styled.div`
  position: ${ props => props.position || "static" };
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

class Header extends Component {

  render(){
    return(
      <HeaderContainer position={this.props.position}>
        <Logo width="370px" height="130px" fill={this.props.logoFill} />
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    position: state.header_styles.position,
    logoFill: state.header_styles.logoFill,
  }
}

export default connect(mapStateToProps)(Header);