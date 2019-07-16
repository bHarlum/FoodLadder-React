import React, {Component} from "react";
import LocalAPI from "./../../apis/local";
import { reduxForm, Field } from "redux-form";
import { Button } from "antd";

import { Input } from "./FormLayout";

class TestRegisterForm extends Component {

  onFormSubmit = async (formValues) => {
    console.log(formValues);
    // const { email, password } = formValues;

    try {
      const response = await LocalAPI.post(`/users/register`, formValues);
      console.log(response);  
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <Field 
          component={Input}
          name="email"
          type="text"
          placeholder="Email"
          errorMessage="Please enter your email."
        />
        <Field 
          component={Input}
          name="password"
          type="password"
          placeholder="Password"
          errorMessage="Please enter a password."
        />
        <Button type="primary" htmlType="submit">Submit</Button>
      </form>
    );
  }
}

const WrappedForm = reduxForm({
  form: "testRegister"
})(TestRegisterForm);


export default WrappedForm;