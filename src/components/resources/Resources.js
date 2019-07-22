import React, { Component } from "react";
import { Layout, Menu } from "antd";

import antStyled from "./../antStyled";
import Faq from "./Faq";
import Manuals from "./Manuals";
import Blueprints from "./Blueprints";
import { Section, FullPage } from "./../layout/Layout";

const { Sider, Content: AntContent } = Layout;

const SideBar = antStyled(Sider)`
  min-height: 78vh;
  background-color: rgb(247, 247, 247);

  ul, li {
    background-color: rgb(249, 249, 249);
  }
`;

const Content = antStyled(AntContent)`
  min-height: 78vh;
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
      <FullPage>
        <Layout>
          <SideBar>
            <Menu
              mode="inline"
              defaultSelectedKeys={["0"]}
              onClick={this.onMenuClick}
            >
              <Menu.Item style={{marginTop: 0}} key="0">FAQs</Menu.Item>
              <Menu.Item key="1">Manuals</Menu.Item>
              <Menu.Item key="2">Blueprints</Menu.Item>

            </Menu>
          </SideBar>
          <Content>
            <Section>
              {sections[current]}
            </Section>
          </Content>
        </Layout>
      </FullPage>
    );
  }
}

export default Resources;