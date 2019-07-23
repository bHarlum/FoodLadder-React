import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalAPI from "./../../apis/local";
import LoginForm from "./../forms/LoginForm";
import RegisterForm from "./../forms/RegisterForm";
import { FullPage, Centered } from "./../layout/app_styles";
import { Typography, Result, Button } from "antd";
import { clearAuthToken, clearCurrentUser, setSpinner } from "./../../actions";

const { Title, Paragraph } = Typography;

export class Register extends Component {

  state = {
    project: null,
    user: "",
    userExists: false
  }

  componentDidMount = async () => {
    this.props.setSpinner(true);
    const { id } = this.props.match.params;
    
    // Getting project
    await LocalAPI.get(`/projects/${id}`)
      .then(res => {
        this.setState({
          project: res.data, 
          user: res.data.users[0].email
        });
      })
      .catch(err => {
        console.log(err);
      });

    //Checking if user exists 
    await LocalAPI.get(`/users/find/${this.state.user}`)
      .then(res => {
        if(res.data){
          this.setState({userExists: true});
        }
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.props.currentUser);

    //Logging out user if logged in
    if(this.props.currentUser.id || this.props.token){
      await LocalAPI.get("/users/logout")
      .then(response => {
        this.props.clearAuthToken();
        this.props.clearCurrentUser();
      }).catch(err => {
        console.log(err);
      });
    }
    this.props.setSpinner(false);
  }

  render() {
    const { project, userExists } = this.state;

    return (
      <FullPage>
        <div>
          {(project && !project.activated) &&
            <Centered>
              <Title>Project Registration</Title>

              <div>
                { userExists && 
                  <Centered>
                    <Title level={3}>Hi, {this.state.user}</Title> 
                    <Title level={2}>looks like you already have an account.</Title>
                    <Paragraph>Please sign in to gain access to this project.</Paragraph>
                    <LoginForm 
                      email={this.state.user}
                      showEmail={false} 
                      history={this.props.history}
                      projectId={this.state.project._id}
                    /> 
                  </Centered>
                } { !userExists &&
                  <Centered>
                    <Title level={3}>Welcome {this.state.user} !</Title>
                    <Title level={4}>Please register your details below.</Title>
                    <RegisterForm 
                      project={this.state.project} 
                      history={this.props.history} 
                      email={this.state.user}
                    />
                  </Centered>
                }
              </div>

            </Centered>
          }
          {(!project || project.activated) &&
            <Result
              status="404"
              title="404"
              subTitle={`Oops, we can't find that code in our system. Please contact us if you think this is a mistake.`}
              extra={<a href="https://foodladder.org/get-in-touch-2/"><Button type="primary">Contact Us</Button></a>}
            />
          }    
        </div>
         
      </FullPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.current,
    token: state.auth.token
  }
}
export default connect(mapStateToProps, { 
  clearAuthToken, 
  clearCurrentUser,
  setSpinner
})(Register);
