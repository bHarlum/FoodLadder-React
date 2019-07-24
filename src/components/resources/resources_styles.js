import { Layout } from "antd";

import antStyled from "./../antStyled";

const { Sider, Content: AntContent } = Layout;

export const SideBar = antStyled(Sider)`
  min-height: 78vh;
  background-color: rgb(247, 247, 247);

  ul, li {
    background-color: rgb(249, 249, 249);
  }
`;

export const Content = antStyled(AntContent)`
  min-height: 78vh;
  overflow: scroll;
`;
