import styled from "styled-components";

export const ImageContainer = styled.div`
  background-image: ${props => 'url('+props.image+')'};
  height: 300px;
  background-size: cover;
  background-position: center;
`;
