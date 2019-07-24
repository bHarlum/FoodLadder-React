import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button, Typography, message, Upload, Icon } from "antd";
import { connect } from "react-redux";

import LocalAPI from "./../../apis/local";
import { Input, FormContainer } from "./form_styles";

const { Title } = Typography;

class NewThreadForm extends Component {

  state = {
    file: {
      key: "",
      size: ""
    }
  }

  uploadSettings = {
    name: 'file',
    action: `${process.env.REACT_APP_API_URL}/threads/upload`,
    headers: {
      authorization: `Bearer ${this.props.token}`
    },
    onChange: (info) => {
      if (info.file.status === 'done') {
        this.setState({file: {key: info.file.response.key, size: info.file.response.size}});
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  onFormSubmit = async (values) => {
    const { title, body } = values;
    const data = { 
      newThread: { 
        title, 
        posts: [], 
        file: {
          link: this.state.file.key, 
          size: this.state.file.size
        }
      }
    };
    data.newThread.posts.push({
      body,
      author: this.props.currentUser
    })

    LocalAPI.post(`/threads`, data)
      .then(response => {
        this.props.history.push("/forum/threads/"+response.data._id);
        message.success("")
      }).catch(err => {
        message.error(err.response.data);
      })
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <FormContainer>
        <Title>Create a new Post</Title>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field 
            component={Input}
            name="title"
            type="text"
            placeholder="test..."
            errorMessage="This field is required."
          />
          <Field 
            component={Input}
            name="body"
            type="textarea"
            placeholder="test..."
            errorMessage="This field is required."
          />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
        <Upload name="file" {...this.uploadSettings}>
          <Button>
            <Icon type="upload" /> 
              Add an File
          </Button>
        </Upload>
      </FormContainer>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.title) {
    errors.title = "error";
  }

  if(!formValues.body) {
    errors.body = "error";
  }
  
  return errors;
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.current,
    token: state.auth.token
  }
}

const WrappedThreadForm = reduxForm({
  form: "newThread",
  validate
})(NewThreadForm)
 
export default connect(mapStateToProps, {})(WrappedThreadForm);