import React, { Component } from 'react';
import { Typography } from "antd";
import { connect } from "react-redux";

import { Section, FullPage } from './../layout/app_styles';
import { setSpinner } from "./../../actions/index";

const { Title } = Typography;

export class User extends Component {
  
  render() {
    const { user } = this.props;
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

const mapStateToProps = state => {
  return {
    user: state.user.current
  }
}

export default connect(mapStateToProps, { setSpinner })(User);
