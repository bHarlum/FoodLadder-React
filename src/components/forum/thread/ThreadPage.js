import React, { Component } from 'react';
import { Row, Col, Typography, Icon } from "antd";
import { connect } from "react-redux";

import LocalAPI from "./../../../apis/local";
import Post from "./post/Post";
import { FullPage, Section } from "../../layout/app_styles";
import NewPostForm from "./../../forms/NewPostForm";
import { setThread } from "./../../../actions";
import { RepliesTitle } from "./thread_styles";

const { Title } = Typography;

class ThreadPage extends Component {

  componentDidMount = () => {
    const { id } = this.props.match.params;
    LocalAPI.get(`/threads/${id}`)
      .then( res => {
        const thread = res.data;
        this.props.setThread(thread);
      }).catch( err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    this.props.setThread(null);
  }

  render() {
    const { thread } = this.props;

    return (
      <FullPage>
        <Section>
          <Row>
            <Col xs={{ span: 24 }} md={{span: 6}}></Col>
            <Col xs={{ span: 24 }} md={{span: 12}}>
              { thread &&
              <>
                <Title>{thread.title}</Title>
              </>
              } 
              { thread &&
                <Post
                  key={thread.posts[0]._id}
                  post={thread.posts[0]}
                  first="true"
                >
                  {thread.posts[0].body}
                </Post>
              }
              { thread && 
                <RepliesTitle>Replies to {thread.posts[0].author.firstName}'s post...</RepliesTitle>
              }
              { thread &&                 
                thread.posts.slice(1, thread.posts.length).map(post => {
                return(
                  <Post 
                    key={post._id}
                    post={post}
                    actions={[<><Icon type="like" />Was this helpful?</>]}
                    thread={this.props.thread}
                  >
                    {post.body}
                  </Post>
                )
              })}
              { thread && 
                <NewPostForm thread={thread} />
              }
            </Col>
            <Col xs={{ span: 24 }} md={{span: 6}}></Col>
          </Row>
        </Section>
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
