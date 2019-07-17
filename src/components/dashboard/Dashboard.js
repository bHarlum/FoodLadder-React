import React, { Component } from 'react';
import { Row, Col, Typography, Card } from "antd";

import { FullPage } from "./../layout/Layout";

const { Title } = Typography;

export class Dashboard extends Component {
  render() {
    return (
      <FullPage>
        <Row gutter={6}>
          <Col xs={{ span: 24 }} md={{ span: 8 }}>
            <Title level={3}>Your Projects</Title>
            <Card>
              Project
            </Card>
            <Card>
              Project
            </Card>
            <Card>
              Project
            </Card>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 8 }}>
            <Title level={3}>Notifications</Title>
            <Card>
              Notification
            </Card>
            <Card>
              Notification
            </Card>
            <Card>
              Notification
            </Card>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 8 }}>
            <Title level={4}>Your Posts</Title>
            <Card>
              Post
            </Card>
            <Card>
              Post
            </Card>
            <Card>
              Post
            </Card>
          </Col>
        </Row>
      </FullPage>
    );
  }
}

export default Dashboard;
