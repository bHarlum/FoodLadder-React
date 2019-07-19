import styled from "styled-components";
import { Dropdown as AntDropdown } from "antd";

import antStyled from "./../../antStyled";

export const HeaderContainer = styled.div`
  position: ${ props => props.position || "static" };
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Float = styled.div`
  position: absolute;
  right: 40px;
  top: 45px;
`

export const UserBadge = styled.div`
  width: 250px;
  padding: 15px 30px;
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
      text-transform: uppercase;
      font-weight: 100;
      margin: 0 15px;
  
      a {
        color: #000;
        opacity: 0.6;
        transition: .4s;
      }
      a:hover {
        opacity: 1;
      }
    } 
  } 

  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: block;
    position: absolute;
    top: 50px;
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