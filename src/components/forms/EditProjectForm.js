import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Typography, Upload, Icon} from "antd";

import { Input, FormContainer } from "./FormLayout";
import LocalAPI from "./../../apis/local";

const { Title } = Typography;

class EditProjectForm extends Component {
  
  onFormSubmit = async values => {
    console.log(values);
  };

  async onChange({ file, onSuccess}) {
    console.log(file);
    const response = await LocalAPI('/projects/upload', {file})
    console.log(response);
  }

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
          <Upload name="file" >
            <Button onChange={this.onChange} >
              <Icon 
                type="upload" 
                /> 
                Add a Image
            </Button>
          </Upload>

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
