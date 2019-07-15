import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon } from "antd";
import { Link } from "react-router-dom";

import ThreadCard from "./thread/ThreadCard";

const { Search } = Input;

const threads = [
  {
    url: "/forum/threads/1",
    latestReply: "Ari",
  },
  {
    url: "/forum/threads/2",
    latestReply: "John",
  },
  {
    url: "/forum/threads/3",
    latestReply: "Bruce",
  }
];

export class Forum extends Component {
  render() {
    return (
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 5 }} />
        <Col xs={{ span: 24 }} md={{ span: 14 }}>
          <h1>Threads</h1>
          { threads.map( thread => {
            return(
              <Link to={thread.url}>
                <ThreadCard latestReply={thread.latestReply} />
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
