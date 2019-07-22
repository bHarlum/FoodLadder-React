import React, { Component } from 'react';
import { Typography, Row, Col } from "antd";
import styled from "styled-components";

import LoginForm from "./../forms/LoginForm";
import { FullPage, Centered } from "./../layout/Layout";

const { Title } = Typography;

const BannerImage = styled.div`
  background-image: url(https://foodladder.org/wp-content/uploads/2018/08/Frame-06-08-2018-02-23-43-2-1.jpg);
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export class Login extends Component {
  render() {
    return (
      <FullPage>
        <Row>
          <Col xs={{span: 24}} md={{span: 12}} style={{height: "500px"}}>
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
