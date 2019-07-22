import React, { Component } from "react";
import { Layout, Menu } from "antd";

import antStyled from "./../antStyled";
import Faq from "./Faq";
import Manuals from "./Manuals";
import Blueprints from "./Blueprints";

const { Sider, Content: AntContent } = Layout;

const SideBar = antStyled(Sider)`
  height: 70vh;
  background-color: #fff;
`;

const Content = antStyled(AntContent)`
  height: 70vh;
  overflow: scroll;
`;

const sections = [
  <Faq/>,
  <Manuals/>,
  <Blueprints />
];

class Resources extends Component {

  state = {
    current: 0
  }

  onMenuClick = async (item) => {
    const { key } = item;
    await this.setState({
      current: key
    })
  }

  render() {
    const { current } = this.state;

    return(
      <Layout>
        <SideBar>
          <Menu
            mode="inline"
            defaultSelectedKeys={["0"]}
            onClick={this.onMenuClick}
          >
            <Menu.Item key="0">FAQs</Menu.Item>
            <Menu.Item key="1">Manuals</Menu.Item>
            <Menu.Item key="2">Blueprints</Menu.Item>

          </Menu>
        </SideBar>
        <Content>
          {sections[current]}
        </Content>
      </Layout>
    );
  }
}

export default Resources;