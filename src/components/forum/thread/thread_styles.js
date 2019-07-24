import styled from "styled-components";
import antStyled from "../../antStyled";

import { Card as AntCard, Typography, Tag as AntTag } from "antd";

const { Paragraph: AntParagraph, Text, Title: AntTitle } = Typography;

export const Card = antStyled(AntCard)`
  width: 98%;
  margin: auto;
  
  .ant-list-item-meta-title {
    font-size: 28px;
    line-height: 37px;
  }

  .ant-list-item-extra {
    width: 185px;

    img {
      width: 100%;
    }
  }

  .ant-card-cover {
    max-height: 330px !important;
    overflow: hidden;
  }
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

export const Tag = antStyled(AntTag)`
  border: none;
  background-color: rgb(230, 230, 230);
`;

export const RepliesTitle = styled.h4`
  color: rgb(138, 138, 138);
  font-size: 18px;
  margin: 30px 0 20px 15px;
`;