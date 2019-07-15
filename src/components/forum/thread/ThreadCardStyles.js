import antStyled from "./../../antStyled";

import { Card as AntCard, Typography } from "antd";

const { Paragraph: AntParagraph, Text, Title: AntTitle } = Typography;

export const Card = antStyled(AntCard)`
  width: 98%;
  margin: auto;
`;

export const Note = antStyled(Text)`
  font-size: 8pt;
`;

export const Paragraph = antStyled(AntParagraph)`
  margin-top: 10px;
`;

export const Title = antStyled(AntTitle)`
  margin-bottom: 2px;
`;
