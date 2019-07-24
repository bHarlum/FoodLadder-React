import { Typography, Card } from "antd";
import styled from "styled-components";

import antStyled from "./../../../antStyled";

const { Title, Paragraph } = Typography;

export const PostCard = antStyled(Card)`
  margin: 10px 0;
  border: ${props => props.first ? '1px solid rgb(200, 200, 200)' : 'none'};
  img {
    max-width: 100%;
    max-height: 400px;
  }
`;

export const Author = antStyled(Title)`

`;

export const Date = antStyled(Paragraph)`
  font-size: 12px;
  opacity: .5;
`;

export const ImageContainer = styled.img`
  width: 80%;
  max-height: 300px;
  overflow: hidden;
  margin: auto;
`;