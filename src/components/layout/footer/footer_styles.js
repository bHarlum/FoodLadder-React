import { Row, Col, Layout } from "antd";

import antStyled from "../../antStyled";

const { Footer: AntFooter } = Layout;

export const FooterContainer = antStyled(AntFooter)`
  background-color: #fff;
  a {
    color: #000;
    opacity: .5;
    transition: .5s;
  }
  a:hover {
    opacity: 1;
  }
`;

export const SpacedRow = antStyled(Row)`
  display: flex;
  justify-content: space-between;
`

export const SocialIcons = antStyled(Col)`
  a {
    font-size: 20px;
    margin: 0 12px;
  }
`;