import React, { Component } from 'react';

import { Centered, FullPage } from "./layout/Layout";
import InvitationCodeForm from "./forms/InvitationCodeForm";

import styled from "styled-components";

import bannerImage from "./../assets/images/marketing_image_3.jpeg";

const Banner = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
`;

export class Landing extends Component {
  render() {
    return (
      <FullPage>
        <Banner>
          <Centered>
            <InvitationCodeForm history={this.props.history} />
          </Centered>
        </Banner>
      </FullPage>
    );
  }
}

export default Landing;
