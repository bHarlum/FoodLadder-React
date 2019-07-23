import React, { Component } from "react";

import { Centered } from "./../layout/app_styles";
import NewProjectForm from "./../../components/forms/NewProjectForm";

class NewProject extends Component {

  render(){
    return(
      <Centered>
        <NewProjectForm history={this.props.history} />
      </Centered>
    );
  }
}

export default NewProject;