import React, { Component } from 'react';

import LocalAPI from "./../../../apis/local";
import Post from "./post/Post";
import { FullPage } from "./../../layout/Layout";

class ThreadPage extends Component {

  state = {
    thread: null
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    LocalAPI.get(`/threads/${id}`)
      .then(res => {
        this.setState({thread: res.data});
      }).catch( err => {
        console.log(err);
      });
  }

  render() {
    const { thread } = this.state;
    return (
      <FullPage>
        { thread && thread.posts.map(post => {
          return <Post key={post._id}>{post.body}</Post>
        })}
      </FullPage>
    );
  }
}

export default ThreadPage;
