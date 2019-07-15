import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Card } from "antd";
import { Input } from "./FormLayout";

class InvitationCodeForm extends Component {

  onFormSubmit = (values) => {
    console.log(values);
    this.props.history.push("/dashboard");
  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <Card>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field 
            component={Input}
            name="code"
            type="text"
            placeholder="Invitation Code"
            errorMessage="Please enter your unique code."
          />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </Card>
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