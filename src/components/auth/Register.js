import React, { Component } from 'react';

import LocalAPI from "./../../apis/local";
import RegisterForm from "./../forms/RegisterForm";
import { FullPage, Centered } from "./../layout/Layout";
import { Typography, Result, Button, Spin } from "antd";

const { Title } = Typography;

export class Register extends Component {

  state = {
    project: null,
    loading: true
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    LocalAPI.get(`/projects/${id}`)
      .then(res => {
        this.setState({project: res.data, loading: false});
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { project, loading } = this.state;
    return (
      <FullPage>
        {loading &&
          <Spin />
        }
        {!loading &&
          <div>
            {project &&
              <Centered>
                <Title>Register</Title>
                <RegisterForm history={this.props.history} project={this.state.project}/>
              </Centered>
            }
            {!project &&
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
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
