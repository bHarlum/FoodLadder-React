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