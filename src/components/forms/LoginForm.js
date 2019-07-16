import React, { Component } from 'react';
import { Button, Typography } from 'antd';
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";

import { FormContainer, Input } from "./FormLayout";
import { setAuthToken } from "./../../actions/index";
import LocalAPI from "./../../apis/local";

const { Title } = Typography;

class LoginForm extends Component {

  onFormSubmit = (formValues) => {
    const { email, password } = formValues;
    LocalAPI.post(`/users/login`, {email, password})
      .then( (response) => {
        this.props.setAuthToken(response.data);
      })
      .then( response => {
        this.props.history.push("/dashboard");
      }) 
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <FormContainer>
        <Title>Login</Title>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field 
            component={Input}
            name="email"
            type="text"
            placeholder="Email"
            icon="mail"
            errorMessage="Please enter your email."
          />
          <Field 
            component={Input}
            name="password"
            type="password"
            placeholder="Password"
            icon="lock"
            errorMessage="Please enter your password."
          />
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
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

export default connect(null, { setAuthToken })(WrappedForm);
