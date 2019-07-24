import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Typography, DatePicker, message } from "antd";
import moment from "moment";

import LocalAPI from "./../../apis/local";
import { Input, FormContainer } from "./form_styles";
import { Section } from "./../layout/app_styles";

const { Title } = Typography;

class NewProjectForm extends Component {
  onFormSubmit = async values => {
    const {
      projectName,
      userName,
      email,
      line1,
      line2,
      state,
      city,
      postcode,
      country,
      reportDate
    } = values;
    const data = {
      newProject: {
        userName: userName,
        name: projectName,
        users: [
          {
            email
          }
        ],
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
      }
    };

    LocalAPI.post('/projects', data)
      .then(response => {
        this.props.history.push('/dashboard');
        message.success('Project created and project administrator invited.');
      }).catch(err => {
        message.error(err.response.data);
      });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Section>
        <FormContainer>
          <Title>Create new Project</Title>
          <form onSubmit={handleSubmit(this.onFormSubmit)}>
            <label htmlFor="projectName">Project Name</label>
            <Field
              component={Input}
              name="projectName"
              type="text"
              placeholder="*Project Name"
              errorMessage="Please provide the project Name"
            />
            <label htmlFor="line1">Address Line 1</label>
            <Field
              component={Input}
              name="line1"
              type="text"
              placeholder="*Address line 1"
              errorMessage="please provide an address."
            />
            <label htmlFor="line2">Address Line 2</label>
            <Field
              component={Input}
              name="line2"
              type="text"
              placeholder="Address Line 2"
            />
            <label htmlFor="postcode">Postcode</label>
            <Field
              component={Input}
              name="postcode"
              type="text"
              placeholder="Postcode"
            />
            <label htmlFor="city">City/Suburb</label>
            <Field
              component={Input}
              name="city"
              type="text"
              placeholder="*City/Suburb"
              errorMessage="Please provide a City/Suburb."
            />
            <label htmlFor="state">State/Province</label>
            <Field
              component={Input}
              name="state"
              type="text"
              placeholder="State"
            />
            <label htmlFor="country">Country</label>
            <Field
              component={Input}
              name="country"
              type="text"
              placeholder="*Country"
              errorMessage="Please provide a Country."
            />
            <label htmlFor="reportDate">First Reporting Date</label>
            <Field
              component={DatePicker}
              name="reportDate"
              type="date"
              defaultValue={moment()}
            />
            <label htmlFor="email">Email to Invite</label>
            <Field
              component={Input}
              name="email"
              type="text"
              placeholder="*Project admin email"
              errorMessage="Email is required, please provide a valid email."
            />
            <label htmlFor="userName">Project admin's name</label>
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
      </Section>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.projectName) {
    errors.projectName = "error";
  }
  if (!formValues.userName) {
    errors.userName = "error";
  }
  if (!formValues.line1) {
    errors.line1 = "error";
  }
  if (!formValues.city) {
    errors.city = "error";
  }
  if (!formValues.country) {
    errors.country = "error";
  }
  if (!formValues.email) {
    errors.email = "error";
  }

  return errors;
};

export default reduxForm({
  form: "newProject",
  validate
})(NewProjectForm);
