import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Icon } from "antd";
import { connect } from "react-redux";

import { FooterContainer, SpacedRow, SocialIcons } from "./footer_styles";

class Footer extends Component {
  render() {
    const { token } = this.props;
    return (
      <FooterContainer>
        <SpacedRow>
          <SocialIcons sm={{ span: 24 }} md={{ span: 9}} lg={{ span: 6 }}>
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
          
          <Col sm={{ span: 24 }} md={{ span: 5}} lg={{ span: 3 }}>
            { token &&
            <Link to="/resources">Frequently Asked Questions</Link>
            }
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 5}} lg={{ span: 3 }}>
            <Link to="/forum/privacypolicy">Privacy Policy</Link>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 5}} lg={{ span: 3 }}>
            <a href="https://foodladder.org/get-in-touch-2/">Contact Us</a>
          </Col>
        </SpacedRow>
      </FooterContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Footer);
