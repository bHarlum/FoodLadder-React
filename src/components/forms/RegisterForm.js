import React, { Component } from "react";
import { Steps, Button, message } from "antd";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";
import { setAuthToken } from "./../../actions";
import { Input, Icon } from "./FormLayout";

const { Step } = Steps;

const formPages = [

  <fieldset>
    <Field 
      component={Input}
      name="line1"
      type="text"
      placeholder="Address Line 1"
      errorMessage="Address is required"
      prefix={<Icon type="home" />}
    />
    <Field 
      component={Input}
      name="line2"
      type="text"
      placeholder="Address Line 2"
    />
    <Field 
      component={Input}
      name="postcode"
      type="text"
      placeholder="Postcode"
    />
    <Field 
      component={Input}
      name="city"
      type="text"
      placeholder="City"
    />
    <Field 
      component={Input}
      name="state"
      type="text"
      placeholder="State"
    />
    <Field 
      component={Input}
      name="country"
      type="text"
      placeholder="Country"
      errorMessage="Country is required"
      prefix={<Icon type="flag" />}
    />
  </fieldset>,

  <fieldset>
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
      name="email"
      type="text"
      placeholder="Email"
      errorMessage="Please enter your email."
      prefix={<Icon type="mail" />}
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
  </fieldset>,

  <fieldset>
    <Field 
      component={Input}
      name="bio"
      type="textarea"
      placeholder="Project Bio"
    />
  </fieldset>,

];

class RegisterForm extends Component {

  state = {
    current: 0,
  };

  next = () => {
    this.setState((state) => ({
      current: state.current + 1
    }));
  }

  prev = () => {
    this.setState((state) => ({
      current: state.current + -1
    }));
  }

  onFormSubmit = (formValues) => {
    const { firstName, lastName, phone, email, password } = formValues;

    try {
      LocalAPI.post(`/users/register`, { firstName, lastName, phone, email, password })
        .then(response => {
          this.props.setAuthToken(response.data.token);
          this.props.history.push("/dashboard");
        })
        .catch(error => console.log(error));
    } catch(err) {
      console.log(err);
    }
  }


  nextPage = (event) => {
    console.log("next");
  }

  render() {
    const { current } = this.state;
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <Steps current={current}>
          <Step title="Project Details" description="Confirmation"/>
          <Step title="Registration" description="User Details"/>
          <Step title="Basic Details 3" description="this is a description 3"/>
        </Steps>
        <fieldset className="steps-content">
          {formPages[current]}
        </fieldset>
        <fieldset className="steps-action">
          {current < formPages.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === formPages.length - 1 && (
            <Button type="primary" htmlType="submit" /* onClick={() => message.success('Processing complete!') }*/>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </fieldset>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.email) {
    errors.title = "error";
  }

  if(!formValues.password) {
    errors.body = "error";
  }

  if(formValues.password !== formValues.passConfirm){
    errors.passConfirm = "error"
  }
  
  return errors;
}

const WrappedRegisterForm = reduxForm({
  form: "project-register",
  validate
})(RegisterForm);

export default connect(null, { setAuthToken })(WrappedRegisterForm);