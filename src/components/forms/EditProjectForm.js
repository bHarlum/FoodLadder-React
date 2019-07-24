import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Typography, message } from "antd";

import LocalAPI from "./../../apis/local";
import { Input, FormContainer } from "./form_styles";

const { Title } = Typography;

class EditProjectForm extends Component {
   
  onFormSubmit = async formValues => {
    const { line1, line2, postcode, state, city, country, bio } = formValues;
    const { _id } = this.props.project;
    const updatedProject = {
      address: {
        line1, line2, postcode, state, city, country
      },
      bio
    };
    LocalAPI.patch(`/projects/${this.props.project._id}/update`, {updatedProject, projectId: _id})
      .then(response => {
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log(response);
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        this.props.history.push(`/projects/${this.props.project._id}`);
        message.success("Project Updated.");
      }).catch(err => {
        console.log(err);
        message.error("Error Updating Project");
      });
  };

  render() {

    const { handleSubmit } = this.props;
    return (
      <FormContainer>
        <Title>Edit Your project</Title>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field
            component={Input}
            name="line1"
            type="text"
            placeholder="*Address line 1"
            errorMessage="please provide an address."
          />
          <Field
            component={Input}
            name="line2"
            type="text"
            placeholder="Address Line 2"
          />
          <Field
            component={Input}
            name="postcode"
            type="text"
            placeholder="Postcode"
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
            component={Input}
            name="bio"
            type="textarea"
          />

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </FormContainer>
    );
  }
}

export default reduxForm({
  form: "editProject", 
})(EditProjectForm);
