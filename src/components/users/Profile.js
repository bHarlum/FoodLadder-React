import React, { Component } from 'react';
import { Typography } from "antd";
import { connect } from "react-redux";

import { Section, FullPage, ColumnedSection } from './../layout/app_styles';
import { setSpinner } from "./../../actions/index";

const { Title } = Typography;

export class User extends Component {
  
  render() {
    const { user } = this.props;

    return (
      <FullPage>
        <ColumnedSection>
          <Section>
            {user &&
            <>
              <Title>{user.firstName}</Title>
              <p>{user.email}</p>
            </>
            }
          </Section>
        </ColumnedSection>
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
