import React, { Component } from "react";

import NewThreadForm from "./../../forms/NewThreadForm";

class NewThread extends Component {

  render(){
    return(
      <NewThreadForm history={this.props.history} />
    );
  }
}

export default NewThread;