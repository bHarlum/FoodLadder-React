import React, { Component } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";

import { Centered, FullPage } from "./layout/Layout";
// import InvitationCodeForm from "./forms/InvitationCodeForm";

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
    console.log("Landing page unmounting");
    this.props.setHeader({
      position: "static",
      logoFill: "#000"
    })
  }

  render() {
    return (
      <FullPage>
        <Banner>
          <Centered>
            {/* <InvitationCodeForm history={this.props.history} value={this.props.location.search.match('\\unique=(.*)')[1]}/> */}
          </Centered>
        </Banner>
      </FullPage>
    );
  }
}

export default connect(null, {setHeader})(Landing);
