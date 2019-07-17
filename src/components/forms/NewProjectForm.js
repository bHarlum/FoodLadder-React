import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Typography, DatePicker } from "antd";
import moment from "moment";

import LocalAPI from "./../../apis/local";
import { Input, FormContainer } from "./FormLayout";

const { Title } = Typography;


class NewProjectForm extends Component {

  onFormSubmit = async (values) => {

    const {projectName, userName, email, line1, line2, state, city, postcode, country, reportDate} = values;
    const data = {
      newProject: {
          userName: userName,
          name: projectName,
          users: [{
            email         
          }], 
          uniqueCode: {},
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
            name="projectName"
            type="text"
            placeholder="*Project Name"
            errorMessage="Please provide unique project name."
          />
          <Field 
            component={Input}
            name="line1"
            type="text"
            placeholder="*Address"
            errorMessage="please provide an address."
          />
          <Field 
            component={Input}
            name="line2"
            type="text"
            placeholder="Address"
          />
          <Field 
            component={Input}
            name="postcode"
            type="text"
            placeholder="post code"
          />
          <Field 
            component={Input}
            name="city"
            type="text"
            placeholder="*City/Suburb"
            errorMessage="Please provide a City/Suburb."
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
            placeholder="*Country"
            errorMessage="Please provide a Country."
          />
          <Field 
            component={DatePicker}
            name="reportDate"
            type="date"
            defaultValue={moment()}
          />
          <Field 
            component={Input}
            name="email"
            type="text"
            placeholder="*Project admin email"
            errorMessage="Email is required, please provide a valid email."
          />
          <Field 
            component={Input}
            name="userName"
            type="text"
            placeholder="*Project admin name"
            errorMessage="Name is required, please provide a valid name."
          />
          
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </FormContainer>
    )
  }
}



// VALUES TO VALIDATE:
// projectName
// userName
// line1
// city
// country
// email
const validate = (formValues) => {
  const errors = {};
  
  if(!formValues.projectName) {
    errors.projectName = "error";
  }
  if(!formValues.userName) {
    errors.userName = "error";
  }
  if(!formValues.line1) {
    errors.line1 = "error";
  }
  if(!formValues.city) {
    errors.city = "error";
  }
  if(!formValues.country) {
    errors.country = "error";
  }
  if(!formValues.email) {
    errors.email = "error";
  }

  return errors;
}

export default reduxForm({
  form: "newProject", 
  validate
})(NewProjectForm)