import React, {Component} from "react";
import LocalAPI from "./../../apis/local";
import { reduxForm, Field } from "redux-form";
import { Button } from "antd";
import { connect } from "react-redux";

import { setAuthToken } from "./../../actions";
import { Input } from "./FormLayout";

class TestRegisterForm extends Component {

  onFormSubmit = async (formValues) => {
    const { firstName, lastName, phone, email, password } = formValues;

    try {
      LocalAPI.post(`/users/register`, { firstName, lastName, phone, email, password })
        .then(response => {
          console.log(response.data.token);
          this.props.setAuthToken(response.data.token);
          this.props.history.push("/dashboard");
        })
        .catch(error => console.log(error));
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
          name="firstName"
          type="text"
          placeholder="firstName"
          errorMessage="Please enter your firstName."
        />
        <Field 
          component={Input}
          name="lastName"
          type="text"
          placeholder="lastName"
          errorMessage="Please enter your lastName."
        />
        <Field 
          component={Input}
          name="phone"
          type="text"
          placeholder="phone"
          errorMessage="Please enter your phone number."
        />
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


export default connect(null, { setAuthToken })(WrappedForm);