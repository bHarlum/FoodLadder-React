import React, { Component } from 'react';

import LoginForm from "./../forms/LoginForm";
import { FullPage, Centered } from "./../layout/Layout";
import { Typography } from "antd";

const { Title } = Typography;

export class Login extends Component {
  render() {
    return (
      <FullPage>
        <Centered>
          <Title>Login</Title>
          <LoginForm history={this.props.history} />
        </Centered>
      </FullPage>
    );
  }
}

export default Login;
