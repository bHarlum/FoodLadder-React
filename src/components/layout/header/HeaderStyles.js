import styled from "styled-components";
import { Dropdown as AntDropdown, Button, Layout } from "antd";

import antStyled from "./../../antStyled";

const { Header } = Layout;

export const HeaderContainer = antStyled(Header)`
  position: ${ props => props.position || "static" };
  width: 100%;
  height: 71px;
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.position === "fixed" ? 'rgba(255, 255, 255, 0)' : '#fff'} ;
`;

export const Float = styled.div`
  position: absolute;
  right: 40px;
`

export const UserBadge = styled.div`
  width: 250px;
  padding: 0 30px;
`;

export const Name = styled.h3`
  display: inline;
  margin: 0 0 0 15px;
`;

export const Dropdown = antStyled(AntDropdown)`
  cursor: pointer;
`;

export const Nav = styled.nav`

  ul {
    margin-bottom: 0;

    li {
      display: inline-block;
      font-weight: 100;
      margin: 0 15px;
  
      a {
        color: rgb(0, 0, 0);
        transition: .5s;
      }

    } 
  } 

  .desktop-nav {
    display: none;
    height: 100%;
  }

  .hamburger {
    display: block;
    position: absolute;
    top: 19px;
    right: 40px;
    z-index: 5;
  }

  .mobile-nav {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 4;
    transition: .5s;
  }

  .mobile-nav.false {
    right: -100vw;
  }

  @media(min-width: 850px){
    .desktop-nav {
      display: flex;
      align-items: center;
    }
  
    .hamburger {
      display: none;
    }

    .mobile-nav {
      display: none;
    }
  }
`