import React, { Component } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";

import { Centered, FullPage } from "./layout/Layout";
import InvitationCodeForm from "./forms/InvitationCodeForm";

import bannerImage from "./../assets/images/marketing_image_3.jpeg";

import { setHeader } from "./../actions/index";

const Banner = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
`;

export class Landing extends Component {

  componentDidMount() {
    this.props.setHeader({
      position: "fixed",
      logoFill: "#fff",
      logoWidth: "370px"
    });
  }

  componentWillUnmount() {
    this.props.setHeader({
      position: "static",
      logoFill: "#000"
    })
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

export default connect(null, {setHeader})(Landing);
