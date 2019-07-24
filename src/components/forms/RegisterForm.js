import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, message } from "antd";
import { connect } from "react-redux";

import LocalAPI from "./../../apis/local";
import { Input, Icon } from "./form_styles";
import { setAuthToken } from "./../../actions";

class RegisterForm extends Component {

  onFormSubmit = (formValues) => {
    const { email } = this.props;
    const { firstName, lastName, phone, password } = formValues;
    const { project } = this.props;
    const projectId = project._id;

    LocalAPI.post(`/users/register`, { firstName, lastName, phone, email, password, projectId })
      .then( response => {
        this.props.setAuthToken(response.data.token);
        this.props.history.push("/dashboard");
        message.success('Account Created!')
      })
      .catch(err => {
        message.error(err.response.data);
      });
  }
  
  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <Field 
          component={Input}
          name="firstName"
          type="text"
          placeholder="First Name"
          errorMessage="First Name is required"
          prefix={<Icon type="user" />}
        />
        <Field 
          component={Input}
          name="lastName"
          type="text"
          placeholder="Last Name"
          errorMessage="Last Name is required"
          prefix={<Icon type="contacts" />}
        />
        <Field 
          component={Input}
          name="phone"
          type="text"
          placeholder="Phone Number"
          errorMessage="That doesn't seem to be a valid phone number"
          prefix={<Icon type="phone" />}
        />
        <Field 
          component={Input}
          name="password"
          type="password"
          placeholder="Password"
          errorMessage="Please enter your password."
          prefix={<Icon type="lock" />}
        />
        <Field 
          component={Input}
          name="passConfirm"
          type="password"
          placeholder="Password Confirmation"
          errorMessage="Passwords do not match."
          prefix={<Icon type="key" />}
        />
        <Button type="primary" htmlType="submit">Submit</Button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  const { firstName, lastName, phone, password, passConfirm } = formValues;

  if(!firstName) {
    errors.firstName = "error";
  }

  if(!lastName) {
    errors.lastName = "error";
  }

  if(!password) {
    errors.password = "error";
  }

  if(passConfirm !== password) {
    errors.passConfirm = "error";
  }

  return errors;
}

const WrappedForm = reduxForm({
  form: "register",
  validate
})(RegisterForm);

export default connect(null, { setAuthToken })(WrappedForm);