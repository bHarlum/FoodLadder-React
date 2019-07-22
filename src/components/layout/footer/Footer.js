import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Icon, Layout } from "antd";
import antStyled from "./../../../components/antStyled";

const { Footer: AntFooter } = Layout;

const FooterContainer = antStyled(AntFooter)`
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

const SpacedRow = antStyled(Row)`
  display: flex;
  justify-content: space-between;
`

const SocialIcons = antStyled(Col)`
  a {
    font-size: 20px;
    margin: 0 12px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <SpacedRow>
          <SocialIcons span={4}>
            <a href="https://www.facebook.com/foodladder">
              <Icon type="facebook" theme="filled" />
            </a>
            <a href="https://twitter.com/FoodLadder">
              <Icon type="twitter" />
            </a>
            <a href="https://www.instagram.com/foodladder/">
              <Icon type="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/food-ladder/?originalSubdomain=au">
              <Icon type="linkedin" theme="filled" />
            </a>
          </SocialIcons>
          
          <Col span={6}>
            <Link to="/forum/faq">Frequently Asked Questions</Link>
          </Col>
          <Col span={3}>
            <Link to="/forum/privacypolicy">Privacy Policy</Link>
          </Col>
          <Col span={3}>
            <a href="https://foodladder.org/get-in-touch-2/">Contact Us</a>
          </Col>
        </SpacedRow>
      </FooterContainer>
    );
  }
}

export default Footer;
