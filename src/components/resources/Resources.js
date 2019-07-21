import React, { Component } from "react";
import { Layout, Menu } from "antd";
import antStyled from "./../antStyled";

const { Sider, Content } = Layout;

const SideBar = antStyled(Sider)`
  height: 70vh;
  background-color: #fff;
`;

class Resources extends Component {

  state = {
    current: 1
  }

  onMenuClick = async (item) => {
    const { key } = item;
    await this.setState({
      current: key
    })
  }

  render() {

    return(
      <Layout>
        <SideBar>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={this.onMenuClick}
          >
            <Menu.Item key="1">Manuals</Menu.Item>
            <Menu.Item key="2">FAQs</Menu.Item>

          </Menu>
        </SideBar>
        <Content>
          {this.state.current}
        </Content>
      </Layout>
    );
  }
}

export default Resources;