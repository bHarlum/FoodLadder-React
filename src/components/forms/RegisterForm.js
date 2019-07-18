import React, { Component } from "react";
import { Steps, Button, message, Typography, List, Icon as AntIcon, Tabs } from "antd";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import LocalAPI from "./../../apis/local";
import { setAuthToken, setCurrentUser } from "./../../actions";
import { Input, Icon, FormContainer, Note, Box } from "./FormLayout";

const { Step } = Steps;
const { Paragraph, Title } = Typography;
const { TabPane } = Tabs;

class RegisterForm extends Component {

  state = {
    current: 0,
    userStatus: "new"
  };

  next = () => {
    this.setState((state) => ({
      current: state.current + 1
    }));
  }

  prev = () => {
    this.setState((state) => ({
      current: state.current + -1
    }));
  }

  onFormSubmit = (formValues) => {
    const { firstName, lastName, phone, email, password } = formValues;

    LocalAPI.post(`/users/register`, { firstName, lastName, phone, email, password })
      .then(response => {
        this.props.setAuthToken(response.data.token);
        this.props.history.push("/dashboard");
        message.success('Account Created!')
      })
      .catch(error => console.log(error));
  }

  render() {
    const { current, userStatus } = this.state;
    const { handleSubmit } = this.props;
    const { project } = this.props; 
    const projectAddress = Object.entries(project.address).map(([key, value]) => ({key,value}));
    const formPages = [
      <div>
        <Note>Please confirm the Project's address details below:</Note>
        <List 
          dataSource={projectAddress}
          renderItem={item => {
            return(
              <List.Item style={{ display: "block", textAlign: "center"}}>
                <List.Item.Meta 
                  title={item.key}
                />
                <Title level={4}>{item.value}</Title>
              </List.Item>
            )
          }}
        />
      </div>,
      <fieldset>
        <Field 
          component={Input}
          name="firstName"
          type="text"
          placeholder="First Name"
          errorMessage="First Name is required"
          prefix={<Icon type="user" />}
        />
        <Field 
          component={Input}
          name="lastName"
          type="text"
          placeholder="Last Name"
          errorMessage="Last Name is required"
          prefix={<Icon type="contacts" />}
        />
        <Field 
          component={Input}
          name="phone"
          type="text"
          placeholder="Phone Number"
          prefix={<Icon type="phone" />}
        />
        <Field 
          component={Input}
          name="email"
          type="text"
          placeholder="Email"
          errorMessage="Please enter your email."
          prefix={<Icon type="mail" />}
        />
        <Field 
          component={Input}
          name="password"
          type="password"
          placeholder="Password"
          errorMessage="Please enter your password."
          prefix={<Icon type="lock" />}
        />
        <Field 
          component={Input}
          name="passConfirm"
          type="password"
          placeholder="Password Confirmation"
          errorMessage="Passwords do not match."
          prefix={<Icon type="key" />}
        />
      </fieldset>,
      <fieldset>
        <Field 
          component={Input}
          name="bio"
          type="textarea"
          placeholder="Project Bio"
        />
      </fieldset>,
    ];

    return(
      <FormContainer large>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Steps current={current}>
            <Step icon={<AntIcon type="home" />} />
            <Step icon={<AntIcon type="user" />} />
            <Step icon={<AntIcon type="smile" />} />
          </Steps>
          <fieldset className="steps-content">
            { current !== 1 && formPages[current]}
            { current === 1 && 
              <Tabs defaultActiveKey="1">
                <TabPane tab="New User" key="1">
                  {formPages[current]}
                </TabPane>
                <TabPane tab="Existing User" key="2">
                  <Box large>
                    <Button icon="user" type="primary">Link this project to an existing user</Button>
                  </Box>
                </TabPane>
              </Tabs>
            }
          </fieldset>
          <fieldset className="steps-action">
            {current < formPages.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
            {current === formPages.length - 1 && (
              <Button type="primary" htmlType="submit" /* onClick={() => message.success('Processing complete!') }*/>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
          </fieldset>
        </form>
      </FormContainer>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.email) {
    errors.title = "error";
  }

  if(!formValues.password) {
    errors.body = "error";
  }

  if(formValues.password !== formValues.passConfirm){
    errors.passConfirm = "error"
  }
  
  return errors;
}

const WrappedRegisterForm = reduxForm({
  form: "project-register",
  validate
})(RegisterForm);

export default connect(null, { setAuthToken, setCurrentUser })(WrappedRegisterForm);