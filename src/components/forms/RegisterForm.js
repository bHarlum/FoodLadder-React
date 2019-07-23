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

    try {
      LocalAPI.post(`/users/register`, { firstName, lastName, phone, email, password, projectId })
        .then( response => {
          this.props.setAuthToken(response.data.token);
          this.props.history.push("/dashboard");
          message.success('Account Created!')
        })
        .catch(error => console.log(error));
    } catch(err) {
      console.log(err);
    }
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

  if(!formValues.firstName) {
    errors.firstName = "error";
  }

  if(!formValues.lastName) {
    errors.lastName = "error";
  }

  if(!formValues.password) {
    errors.password = "error";
  }

  if(formValues.passConfirm !== formValues.password) {
    errors.passConfirm = "error";
  }

  return errors;
}

const WrappedForm = reduxForm({
  form: "register",
  validate
})(RegisterForm);

export default connect(null, { setAuthToken })(WrappedForm);