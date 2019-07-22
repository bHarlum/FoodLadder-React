import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Icon, Layout } from "antd";
import antStyled from "./../../../components/antStyled";

const { Footer: AntFooter } = Layout;

const FooterContainer = antStyled(AntFooter)`
  background-color: #fff;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Row>
          <Col span={1}>
            <a href="https://www.facebook.com/foodladder">
              <Icon type="facebook" />
            </a>
          </Col>
          <Col span={1}>
            <a href="https://twitter.com/FoodLadder">
              <Icon type="twitter" />
            </a>
          </Col>
          <Col span={1}>
            <a href="https://www.instagram.com/foodladder/">
              <Icon type="instagram" />
            </a>
          </Col>
          <Col span={1}>
            <a href="https://www.linkedin.com/company/food-ladder/?originalSubdomain=au">
              <Icon type="linkedin" />
            </a>
          </Col>
          <Col span={6}>
            <Link to="/forum/faq">Frequently Asked Questions</Link>
          </Col>
          <Col span={3}>
            <Link to="/forum/privacypolicy">Privacy Policy</Link>
          </Col>
          <Col span={3}>
            <a href="https://foodladder.org/get-in-touch-2/">Contact Us</a>
          </Col>
        </Row>
      </FooterContainer>
    );
  }
}

export default Footer;
