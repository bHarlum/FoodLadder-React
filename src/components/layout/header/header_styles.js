import styled from "styled-components";
import { Dropdown as AntDropdown, Layout } from "antd";
import { Link } from "react-router-dom";

import antStyled from "../../antStyled";

const { Header } = Layout;

export const HeaderContainer = antStyled(Header)`
  position: ${ props => props.position || "static" };
  width: 100%;
  height: 84px;
  display: block;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.position === "fixed" ? 'rgba(255, 255, 255, 0)' : '#fff'} ;

  @media(min-width: 850px) {
    display: flex;
  }

  box-shadow: ${ props => props.position === "fixed" ? 'none' : '0 5px 6px rgb(200, 200, 200, .2)'};
  z-index: 1;
`;

export const Float = styled.div`
  position: absolute;
  right: 40px;
`

export const UserBadge = styled.div`
  width: 170px;
  padding: 0 0 0 30px;
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
    pointer-events: none;

    li {
      display: inline-block;
      font-weight: 100;
      margin: 0 15px;
      transition: .3s;
  
      a {
        color: rgb(0, 0, 0);
        transition: .5s;
      }

    } 
  } 

  ul > * {
    opacity: .3;
  }

  ul > .dashboard {
    opacity: ${props => props.location === "dashboard" ? '1' : '.3'};
  }

  ul > .forum {
    opacity: ${props => props.location === "forum" ? '1' : '.3'};
  }

  ul > .resources {
    opacity: ${props => props.location === "resources" ? '1' : '.3'};
  }

  ul > * {
    pointer-events: auto;
  }

  ul:hover > * {
    opacity: 0.3;
  }

  ul:hover > *:hover {
    opacity: 1;
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

export const LogoLink = antStyled(Link)`
  height: 80%;
`;