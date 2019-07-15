import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Typography } from "antd";

import LocalAPI from "./../../apis/local";
import { Input, FormContainer } from "./FormLayout";

const { Title } = Typography;

class NewThreadForm extends Component {

  onFormSubmit = async (values) => {
    console.log(values);
    const { title, body } = values;
    const data = { newThread: { title, posts: [] }};
    data.newThread.posts.push({
      body,
      // TODO: Change below to current user 
      author: {
        id: 1,
        firstName: "Testy",
        lastName: "McTest",
        admin: true
      }
    })

    try {
      const response = await LocalAPI.post(`/threads`, data);
      console.log(response);  
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <FormContainer>
        <Title>Create a new Post</Title>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field 
            component={Input}
            name="title"
            type="text"
            placeholder="test..."
            errorMessage="This field is required."
          />
          <Field 
            component={Input}
            name="body"
            type="textarea"
            placeholder="test..."
            errorMessage="This field is required."
          />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </FormContainer>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.title) {
    errors.title = "error";
  }

  if(!formValues.body) {
    errors.body = "error";
  }
  
  return errors;
}

export default reduxForm({
  form: "newThread",
  validate
})(NewThreadForm)
 