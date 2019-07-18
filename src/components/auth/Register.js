import React, { Component } from 'react';

import LocalAPI from "./../../apis/local";
import LoginForm from "./../forms/LoginForm";
import RegisterForm from "./../forms/RegisterForm";
import NewRegisterForm from "./../forms/NewRegisterForm";
import ProjectConfirmation from "./ProjectConfirmation";
import ProjectProfileDetails from "./ProjectProfileDetails";
import { FullPage, Centered } from "./../layout/Layout";
import { Typography, Result, Button, Spin, Steps, Icon as AntIcon } from "antd";

const { Title, Paragraph } = Typography;
const { Step } = Steps;

export class Register extends Component {

  state = {
    currentStep: 0,
    project: null,
    loading: true,
    user: "",
    userExists: false
  }

  next = () => {
    this.setState((state) => ({
      currentStep: state.currentStep + 1
    }));
  }

  prev = () => {
    this.setState((state) => ({
      currentStep: state.currentStep + -1
    }));
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    await LocalAPI.get(`/projects/${id}`)
      .then(res => {
        this.setState({
          project: res.data, 
          loading: false,
          user: res.data.users[0].email
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.user);
    await LocalAPI.get(`/users/find/${this.state.user}`)
      .then(res => {
        if(res.data){
          this.setState({userExists: true});
        }
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { project, loading, currentStep, userExists } = this.state;
    const steps = [
      <ProjectConfirmation />,
      <NewRegisterForm 
        history={this.props.history} 
        project={this.state.project} 
        userExists={this.state.userExists} />,
      <ProjectProfileDetails />
    ];

    return (
      <FullPage>
        {loading &&
          <Spin />
        }
        {!loading &&
          <div>
            {project &&
              <Centered>
                <Title>Project Registration</Title>

                <Steps current={currentStep}>
                  <Step icon={<AntIcon type="home" />} />
                  <Step icon={<AntIcon type="user" />} />
                  <Step icon={<AntIcon type="smile" />} />
                </Steps>

                <fieldset className="steps-content">
                { currentStep !== 1 && steps[currentStep] }
                { currentStep === 1 && 
                  <div>
                    { userExists && 
                      <Centered>
                        <Title level={3}>Hi, {this.state.user}</Title> 
                        <Title level={2}>looks like you already have an account.</Title>
                        <Paragraph>Please sign in to gain access to this project.</Paragraph>
                        <LoginForm /> 
                      </Centered>
                    }
                    { !userExists && steps[currentStep] }
                  </div>
                }
                </fieldset>

                <fieldset className="steps-action">
                  {currentStep < steps.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                      Next
                    </Button>
                  )}
                  {currentStep === steps.length - 1 && (
                    <Button type="primary" htmlType="submit" /* onClick={() => message.success('Processing complete!') }*/>
                      Done
                    </Button>
                  )}
                  {currentStep > 0 && (
                    <Button onClick={() => this.prev()}>
                      Previous
                    </Button>
                  )}
                </fieldset>

              </Centered>
            }
            {!project &&
              <Result
                status="404"
                title="404"
                subTitle="Oops, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
              />
            }    
          </div>
        }
         
      </FullPage>
    );
  }
}

export default Register;
