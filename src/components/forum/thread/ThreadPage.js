import React, { Component } from 'react';
import { Row, Col } from "antd";
import { connect } from "react-redux";

import LocalAPI from "./../../../apis/local";
import Post from "./post/Post";
import { FullPage } from "./../../layout/Layout";
import NewPostForm from "./../../forms/NewPostForm";
import { setThread } from "./../../../actions";

class ThreadPage extends Component {

  componentDidMount = () => {
    const { id } = this.props.match.params;
    LocalAPI.get(`/threads/${id}`)
      .then(res => {
        console.log(res.data);
        this.props.setThread(res.data);
      }).catch( err => {
        console.log(err);
      });
  }

  render() {
    const { thread } = this.props;
    return (
      <FullPage>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            { thread && thread.posts.map(post => {
              return <Post key={post._id}>{post.body}</Post>
            })}
            { thread && 
              <NewPostForm thread={thread} />
            }
          </Col>
          <Col span={6}></Col>
        </Row>
      </FullPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    thread: state.forum.thread,
  }
}

export default connect(mapStateToProps, { setThread })(ThreadPage);
