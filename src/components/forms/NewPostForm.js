import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button } from "antd";
import { connect } from "react-redux";

import LocalAPI from "./../../apis/local";
import { Input } from "./FormLayout";
import { setThread } from "./../../actions";

class NewPostForm extends Component {

  onFormSubmit = (formValues) => {
    const { reset } = this.props;
    const { body } = formValues;
    const { id: userId } = this.props.thread.posts[0].author;
    const updatedThread = {
      posts: this.props.thread.posts
    }
    updatedThread.posts.push({
      author: this.props.currentUser,
      body
    });
    console.log(updatedThread);
    LocalAPI.patch(`/threads/${this.props.thread._id}`, { updatedThread, userId })
      .then( res => {
        this.props.setThread(res.data);
        reset();
      }).catch( err => {
        console.log(err);
      });
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <Field 
          component={Input}
          name="body"
          type="textarea"
          placeholder="Reply..."
        />
        <Button type="primary" htmlType="submit">Reply</Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.current,
  }
}
const validate = (formValues) => {
  const errors = {};

  return errors;
}

const WrappedForm = reduxForm({
  form: "newpost",
  validate
})(NewPostForm);

export default connect(mapStateToProps, { setThread })(WrappedForm);