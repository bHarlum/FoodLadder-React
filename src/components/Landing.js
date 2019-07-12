import React, { Component } from 'react';

import { Centered } from "./layout/Centered";
import InviteCodeForm from "./forms/InviteCodeForm";

export class Landing extends Component {
  render() {
    return (
      <div style={{minHeight: "77vh"}}>
        <Centered>
          <InviteCodeForm/>
        </Centered>
      </div>
    );
  }
}

export default Landing;
