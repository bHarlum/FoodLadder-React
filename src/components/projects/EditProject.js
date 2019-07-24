import React, { Component } from "react";
import { Button, Upload, Icon, message} from "antd";
import {connect} from "react-redux";

import LocalAPI from "./../../apis/local";
import { Centered, Section} from "./../layout/app_styles";
import EditProjectForm from "./../../components/forms/EditProjectForm";

class EditProject extends Component {

  state = {
    uploading: false,
    project: ""
  };

  uploadSettings = {
    name: 'file',
    action: `${process.env.REACT_APP_API_URL}/projects/upload`,
    headers: {
      authorization: `Bearer ${this.props.token}`
    },
    onChange: (info) => {
      if (info.file.status !== 'uploading') {
        this.setState({
          uploading: true
        });
      }
      if (info.file.status === 'done') {
        this.setState({
          uploading: false
        });
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await LocalAPI.get(`/projects/${id}`);
    await this.setState({project: response.data});
    this.uploadSettings.headers.id = this.state.project._id;
  }

  render(){
    return(
      <Centered>
        <Section>
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
            uploading={this.state.uploading}
          />
          <Upload name="file" {...this.uploadSettings}>
            <Button>
              <Icon type="upload" /> 
                Add an Image
            </Button>
          </Upload>
        </>
        }
      </Section>
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