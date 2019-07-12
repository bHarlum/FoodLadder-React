import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { reduxForm, Field } from 'redux-form';

import { Icon, FormContainer } from "./FormLayout";

const { Title } = Typography;

class LoginForm extends Component {

  render() {
    return (
      <FormContainer>
        <Title>Login</Title>
        <form>
          <div>
            <Input
              prefix={<Icon type="user" />}
              placeholder="Username"
            />
          </div>
          <div>
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
            />
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </div>
        </form>
      </FormContainer>
    );
  }
}

const WrappedForm = reduxForm({
  form: "login",
  validate: (formValues) => {
    const errors = {};

    return errors;
  }
})(LoginForm);

export default WrappedForm;
