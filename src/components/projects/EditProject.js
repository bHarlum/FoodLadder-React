import React, { Component } from "react";

import { Centered } from "./../layout/Layout";
import EditProjectForm from "./../../components/forms/EditProjectForm";

import LocalAPI from "./../../apis/local";



class EditProject extends Component {

  state = {
    project: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const project = await LocalAPI.get(`/projects/${id}`)
    this.setState({project: project.data});
    console.log(this.state);
  }

  render(){
    console.log(this.state);
    console.log(this.props.history);
    return(
      <Centered>
        { this.state.project && 
          <EditProjectForm 
          project={this.state.project}
          history={this.props.history} 
          initialValues={{
            line1: this.state.project.address.line1,
            line2: this.state.project.address.line2,
            city: this.state.project.address.city,
            state: this.state.project.address.state,
            postcode: this.state.project.address.postcode,
            name: this.state.project.name,
            bio: this.state.project.bio,
            country: this.state.project.address.country
          }}
        />
      }
      </Centered>
    );
  }
}

export default EditProject;