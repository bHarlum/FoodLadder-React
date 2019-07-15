import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon } from "antd";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";
import ThreadCard from "./thread/ThreadCard";

const { Search } = Input;

export class Forum extends Component {

  state = {
    threads: null,
  }

  async componentDidMount() {
    const getThreads = await LocalAPI.get('/threads');
    const threads = getThreads.data;
    this.setState({ threads });
  }

  render() {
    const { threads } = this.state;
    return (
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 5 }} />
        <Col xs={{ span: 24 }} md={{ span: 14 }}>
          <h1>Threads</h1>
          { threads && threads.map( thread => {
            const { posts } = thread;
            return(
              <Link key={thread._id} to={`/forum/threads/${thread._id}`}>
                <ThreadCard latestReply={posts[posts.length-1].author.firstName} />
              </Link>
            )
          })}
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 5 }}>
          <Search 
            placeholder="Search posts"
            enterButton
          />
          <Link to="forum/threads/new">
            <Button type="primary">
              <Icon type="plus" />
              Create a New Post
            </Button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default Forum;
