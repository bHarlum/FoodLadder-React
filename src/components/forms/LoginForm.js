import React, { Component } from 'react';
import { Button, message } from 'antd';
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";

import { FormContainer, Input } from "./form_styles";
import { setAuthToken } from "./../../actions/index";
import LocalAPI from "./../../apis/local";

class LoginForm extends Component {

  onFormSubmit = (formValues) => {
    let { email, password } = formValues;
    const { projectId } = this.props;
    if(!this.props.showEmail){
      email = this.props.email;
    }
    LocalAPI.post(`/users/login`, {email, password, projectId})
      .then( (response) => {
        this.props.setAuthToken(response.data.token);
      })
      .then( response => {
        this.props.history.push("/dashboard");
      }) 
      .catch(err => {
        message.error("Error logging in");
      })
  }

  render() {
    const { handleSubmit, showEmail } = this.props;
    return (
      <FormContainer>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          { showEmail && 
            <Field 
              component={Input}
              name="email"
              type="text"
              placeholder="Email"
              icon="mail"
              errorMessage="Please enter your email."
            />
          }
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

    if(!formValues.email) {
      errors.email = "error";
    }

    if(!formValues.password) {
      errors.password = "error";
    }

    return errors;
  }
})(LoginForm);

export default connect(null, { setAuthToken })(WrappedForm);
