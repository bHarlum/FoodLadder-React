import React, { Component } from "react";
import { Form, Icon as AntIcon, Input, Button, Checkbox, Typography } from 'antd';
import styled from "styled-components";
import antStyled from "../antStyled";

const { Title } = Typography;

const Icon = antStyled(AntIcon)`
  color: rgba(0,0,0,.25);
`;

const FormContainer = styled.div`
  width: 300px;
`;

class LoginForm extends Component {

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormContainer>
        <Title>Login</Title>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Username is required' }],
            })(
              <Input
                prefix={<Icon type="user" />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Password is required' }],
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </FormContainer>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedLoginForm;