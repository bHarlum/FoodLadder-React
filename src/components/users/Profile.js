import React, { Component } from 'react';
import { statement } from '@babel/template';
import { Typography } from "antd";
import { connect } from "react-redux";

import LocalAPI from "./../../apis/local";
import { Section, FullPage } from './../layout/Layout';
import { setSpinner } from "./../../actions/index";

const { Title } = Typography;

export class User extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    this.props.setSpinner(true);
    const { id } = this.props.match.params;
    LocalAPI.get(`/users/${id}`)
      .then( async response => {
        await this.setState({
          user: response.data
        })
        this.props.setSpinner(false);
        console.log(this.state);
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    const { user } = this.state;
    return (
      <FullPage>
        <Section>
          {user &&
            <Title>{user.firstName}</Title>
          }
        </Section>
      </FullPage>
    );
  }
}

export default connect(null, { setSpinner })(User);
