import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Form, Input as AntInput, Button, Card } from "antd";

const Input = (props) => {
  return(
    <Form.Item 
// Hacky method? TODO: refactor if necessary. This results in a messy warning in the console but works.
      validateStatus={props.meta.touched && props.meta.error}
      help={props.meta.touched && props.meta.error && props.message}
    >
      <AntInput {...props.input} type={props.type} placeholder={props.placeholder}/>
    </Form.Item>
  );
}

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
            message="Please enter your unique code."
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
 