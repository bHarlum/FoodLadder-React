import React, { Component } from 'react';

import RegisterForm from "./../forms/RegisterForm";
import { FullPage, Centered } from "./../layout/Layout";
import { Typography } from "antd";

const { Title } = Typography;

export class Register extends Component {
  render() {
    return (
      <FullPage>
        <Centered>
          <Title>Register New Project</Title>
          <RegisterForm/>
        </Centered>
      </FullPage>
    );
  }
}

export default Register;
