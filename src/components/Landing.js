import React, { Component } from 'react';

import { Centered, FullPage } from "./layout/Layout";
import InviteCodeForm from "./forms/InviteCodeForm";

export class Landing extends Component {
  render() {
    return (
      <FullPage>
        <Centered>
          <InviteCodeForm/>
        </Centered>
      </FullPage>
    );
  }
}

export default Landing;
