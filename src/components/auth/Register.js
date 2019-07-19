import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalAPI from "./../../apis/local";
import LoginForm from "./../forms/LoginForm";
import RegisterForm from "./../forms/RegisterForm";
import NewRegisterForm from "./../forms/NewRegisterForm";
import ProjectConfirmation from "./ProjectConfirmation";
import ProjectProfileDetails from "./ProjectProfileDetails";
import { FullPage, Centered } from "./../layout/Layout";
import { Typography, Result, Button, Spin, Icon as AntIcon } from "antd";
import { clearAuthToken, clearCurrentUser } from "./../../actions";

const { Title, Paragraph } = Typography;

export class Register extends Component {

  state = {
    project: null,
    loading: true,
    user: "",
    userExists: false
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
    console.log(this.props.currentUser);
    if(this.props.currentUser.id){
      await LocalAPI.get("/users/logout")
      .then(response => {
        this.props.clearAuthToken();
        this.props.clearCurrentUser();
        console.log("logged out user");
      }).catch(err => {
        console.log(err);
      });
    }
  }

  render() {
    const { project, loading, currentStep, userExists } = this.state;

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

                <div>
                  { userExists && 
                    <Centered>
                      <Title level={3}>Hi, {this.state.user}</Title> 
                      <Title level={2}>looks like you already have an account.</Title>
                      <Paragraph>Please sign in to gain access to this project.</Paragraph>
                      <LoginForm /> 
                    </Centered>
                  } { !userExists &&
                    <Centered>
                      <Title level={3}>Welcome!</Title>
                      <Title level={4}>Please register your details below.</Title>
                      <RegisterForm project={this.state.project} history={this.props.history} />
                    </Centered>
                  }
                </div>

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

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.current,
  }
}
export default connect(mapStateToProps, { clearAuthToken, clearCurrentUser })(Register);
