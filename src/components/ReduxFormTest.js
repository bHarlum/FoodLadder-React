import React, { Component } from "react";

import { Field, reduxForm } from 'redux-form'

class ReduxFormText extends Component {
  
  onSubmit = (values) => {
    console.log(values);
  }

  render(){
    const { handleSubmit, reset } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
        <button type="submit">
          Submit
        </button>
        <button type="button" onClick={reset}>
          Clear Values
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'test' // a unique identifier for this form
})(ReduxFormText)