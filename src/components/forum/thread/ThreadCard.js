import React, { Component } from 'react';
import { Row, Col, Tag, Avatar } from "antd";

import { Card, Note, Paragraph, Title } from "./ThreadCardStyles";

class ThreadCard extends Component {
  static defaultProps = {
    tags: []
  };

  render(){
    const tags = this.props.tags.map((tag) => {
      return(
        <Tag>{tag}</Tag>
      );
    });

    return (
      <Card>
        <Row>
          <Col span={3}>
            <Avatar size={80} icon="user" />
          </Col>
          <Col span={16}>
            <Title level={4}>{this.props.title}</Title>
            <Note>Latest reply by <b>{this.props.latestReply}</b> 6 minutes ago</Note>
            <Paragraph>{this.props.excerpt}</Paragraph>
            {tags}
          </Col>
          <Col span={5}>
            <p>comments</p>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ThreadCard;
