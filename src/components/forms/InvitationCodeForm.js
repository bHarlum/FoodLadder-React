import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button } from "antd";
import { Input, InviteCard } from "./form_styles";

class InvitationCodeForm extends Component {

  onFormSubmit = (formValues) => {
    this.props.history.push(`/register/${formValues.code}`);
  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <InviteCard>
        <h1>Welcome to the Food Ladder Help Desk.</h1>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <label htmlFor="code">Invitation Code</label>
          <Field 
            component={Input}
            name="code"
            type="text"
            placeholder="Invitation Code"
            errorMessage="Please enter your unique code."
          />
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
          <p>Haven't received a code? <a href="https://foodladder.org/get-in-touch-2/">Contact Us</a></p>
        </form>
      </InviteCard>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.code) {
    errors.code = "error";
  }
  
  return errors;
}

export default reduxForm({
  form: "invitationCode",
  validate 
})(InvitationCodeForm)