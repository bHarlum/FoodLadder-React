import React, { Component } from "react";
import { Button, Upload, Icon, message} from "antd";
import {connect} from "react-redux";


import { Centered } from "./../layout/Layout";
import EditProjectForm from "./../../components/forms/EditProjectForm";

import LocalAPI from "./../../apis/local";



class EditProject extends Component {

  state = {
    project: ""
  };

  uploadSettings = {
    name: 'file',
    action: `http://localhost:3001/projects/upload`,
    headers: {
      authorization: `Bearer ${this.props.token}`,
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const project = await LocalAPI.get(`/projects/${id}`);
    this.setState({project: project.data});
    console.log(this.state);
  }

  render(){
    console.log(this.state);
    console.log(this.props.history);
    return(
      <Centered>
        { this.state.project && 
        <>
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
        <Upload name="file" {...this.uploadSettings}>
          <Button>
            <Icon type="upload" /> 
              Add an Image
          </Button>
        </Upload>
      </>
      }
    </Centered>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}
export default connect(mapStateToProps)(EditProject);