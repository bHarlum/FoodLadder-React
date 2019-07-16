import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Typography, DatePicker } from "antd";
import moment from "moment";

import LocalAPI from "./../../apis/local";
import { Input, FormContainer } from "./FormLayout";

const { Title } = Typography;


class NewProjectForm extends Component {

  onFormSubmit = async (values) => {

    const {name, email, line1, line2, state, city, postcode, country, reportDate} = values;
    const data = {
      newThread: {
          name,
          user: {
            email
          }, 
          address: {
            line1,
            line2,
            state,
            city,
            postcode,
            country 
          }, 
          reportDate, 
          notifications: [], 
          reports: []
      }};

      try {
        const response = await LocalAPI.post(`/projects`, data);
        console.log(response);  
      } catch(error) {
        console.log(error);
      }
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <FormContainer>
        <Title>Create new Project</Title>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field 
            component={Input}
            name="project-name"
            type="text"
            placeholder="*Project Name"
            errorMessage="This field is required."
          />
          <Field 
            component={Input}
            name="line1"
            type="text"
            placeholder="*Address"
            errorMessage="This field is required."
          />
          <Field 
            component={Input}
            name="line2"
            type="text"
            placeholder="Address"
            errorMessage="This field is required."
          />
          <Field 
            component={Input}
            name="post-code"
            type="text"
            placeholder="post code"
          />
          <Field 
            component={Input}
            name="city"
            type="text"
            placeholder="*City"
            errorMessage="This field is required."
          />
          <Field 
            component={Input}
            name="state"
            type="text"
            placeholder="State"
            errorMessage="This field is required."
          />
          <Field 
            component={Input}
            name="country"
            type="text"
            placeholder="*Country"
            errorMessage="This field is required."
          />
          <Field 
            component={DatePicker}
            name="report-date"
            type="date"
            defaultValue={moment()}
          />
          <Field 
            component={Input}
            name="email"
            type="text"
            placeholder="*Project admin email"
            errorMessage="This field is required."
          />
          
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </FormContainer>
    )
  }
}

export default reduxForm({
  form: "newProject"
})(NewProjectForm)