import React, { Component } from 'react';
import { Typography, Row, Col } from "antd";

import LoginForm from "./../forms/LoginForm";
import { FullPage, Centered } from "./../layout/app_styles";
import { BannerImage } from "./auth_styles";

const { Title } = Typography;

export class Login extends Component {
  render() {
    return (
      <FullPage>
        <Row>
          <Col className="desktop-only" xs={{span: 24}} md={{span: 12}} style={{height: "500px"}}>
            <BannerImage/>
          </Col>
          <Col xs={{span: 24}} md={{span: 12}}>
            <Centered>
              <Title>Login</Title>
              <LoginForm history={this.props.history} showEmail={true} />
            </Centered>
          </Col>
        </Row>
      </FullPage>
    );
  }
}

export default Login;
