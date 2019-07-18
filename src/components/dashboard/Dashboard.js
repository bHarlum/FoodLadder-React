import React, { Component } from 'react';
import { Row, Col, Typography, Card, Button } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setCurrentUser } from "./../../actions";
import { FullPage } from "./../layout/Layout";
import AdminDashboard from "./AdminDashboard";

const { Title } = Typography;

export class Dashboard extends Component {

  render() {
    const { currentUser } = this.props;
    return (
      <FullPage>
        { currentUser.admin &&
          <AdminDashboard />
        }
        { !currentUser.admin && 
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
        }
        
      </FullPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.current, 
  }
}

export default connect(mapStateToProps, { setCurrentUser })(Dashboard);
