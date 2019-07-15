import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon } from "antd";

import ThreadCard from "./thread/ThreadCard";

const { Search } = Input;

const threads = [
  <ThreadCard latestReply="Ari" />,
  <ThreadCard latestReply="John" />,
  <ThreadCard latestReply="Bruce" />
];

export class Forum extends Component {
  render() {
    return (
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 5 }} />
        <Col xs={{ span: 24 }} md={{ span: 14 }}>
          <h1>Threads</h1>
          { threads.map( thread => {
            return thread;
          })}
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 5 }}>
          <Search 
            placeholder="Search posts"
          />
          <Button type="primary">
            <Icon type="plus" />
            Create a New Post
          </Button>
        </Col>
      </Row>
    );
  }
}

export default Forum;
