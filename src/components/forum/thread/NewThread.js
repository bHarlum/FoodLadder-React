import React, { Component } from "react";

import { Centered } from "./../../layout/Layout";
import NewThreadForm from "./../../forms/NewThreadForm";

class NewThread extends Component {

  render(){
    return(
      <Centered>
        <NewThreadForm history={this.props.history} />
      </Centered>
    );
  }
}

export default NewThread;