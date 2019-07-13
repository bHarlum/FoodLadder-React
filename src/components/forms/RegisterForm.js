import React, { Component } from "react";
import { Steps, Button, message, Input } from "antd";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import { Icon } from "./FormLayout";

const { Step } = Steps;

const formPages = [

  <fieldset>
    <Field
      component={(props) => {
        return(
          <Input
            prefix={<Icon type="location" />}
            placeholder="Location"
          />
        );
      }}
    />
  </fieldset>,

  <fieldset>
    <p>Form 2</p>
  </fieldset>,

  <fieldset>
    <p>Form 3</p>
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

  handleSubmit = () => {
  }

  nextPage = (event) => {
    console.log("next");
  }

  render() {
    const {current} = this.state;
    return(
      <form onsubmit={this.handleSubmit}>
        <Steps current={current}>
          <Step title="Basic Details 1" description="this is a description 1"/>
          <Step title="Basic Details 2" description="this is a description 2"/>
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
            <Link to="/dashboard">
              <Button type="primary" onClick={() => message.success('Processing complete!') }>
                Done
              </Button>
            </Link>
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

const WrappedRegisterForm = reduxForm({
  form: "project-register",
  validate: (formValues) => {
      const errors = {};

      // if(!formValues.title){
      //     errors.title = "Title is required"
      // }

      return errors;
  }
})(RegisterForm);


export default connect()(WrappedRegisterForm);