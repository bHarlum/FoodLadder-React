import React, { Component } from 'react';
import { connect } from "react-redux";

import { Centered, FullPage } from "../layout/app_styles";
import InvitationCodeForm from "../forms/InvitationCodeForm";

import { setHeader, resetHeader } from "../../actions/index";
import { Banner } from "./landing_styles";

export class Landing extends Component {

  componentDidMount() {
    this.props.setHeader({
      position: "fixed",
      logoFill: "#fff",
      logoWidth: "370px"
    });
  }

  componentWillUnmount() {
    this.props.resetHeader();
  }

  render() {  
    // let initialValues = "";
    // if(this.props.location.search) initialValues = { code: this.props.location.search.match('\\unique=(.*)')[1]};
    return (
      <FullPage>
        <Banner>
          <Centered landing>
            <InvitationCodeForm history={this.props.history}/>
          </Centered>
        </Banner>
      </FullPage>
    );
  }
}

export default connect(null, {setHeader, resetHeader})(Landing);
