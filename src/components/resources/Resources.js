import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { connect } from "react-redux";

import Faq from "./Faq";
import Manuals from "./Manuals";
import Blueprints from "./Blueprints";
import { Section, FullPage } from "./../layout/app_styles";
import { SideBar, Content } from "./resources_styles";
import { setLocation } from "./../../actions";

const sections = [
  <Faq/>,
  <Manuals/>,
  <Blueprints />
];

class Resources extends Component {

  state = {
    current: 0
  }

  componentDidMount() {
    this.props.setLocation("resources");
  }

  componentWillUnmount() {
    this.props.setLocation(null);
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

export default connect(null, { setLocation })(Resources);