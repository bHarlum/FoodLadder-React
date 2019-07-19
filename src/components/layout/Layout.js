import React, { Component } from 'react';
import styled from "styled-components";

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.landing ? '570px' : '400px'};
  height: ${props => props.overlay ? '100vh' : 'default'};
  position: ${props => props.overlay ? 'fixed' : 'static'};
  width: ${props => props.overlay ? '100%' : 'default'};
  z-index: 3;
  background-color: ${props => props.overlay ? 'rgb(240, 242, 245)' : 'default'};
`;

export const FullPage = styled.div`
  min-height: 71vh;
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
`

function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export class Capitalized extends Component {

  render() {
    return (
      jsUcfirst(this.props.text)
    );
  }
};
