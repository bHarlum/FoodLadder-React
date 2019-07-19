import React, { Component } from "react";
import { Card, Button, List, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";

const { Title } = Typography;

class AdminDashboard extends Component {

  state = {
    projects: [],
    notifications: [],
    posts: []
  }

  componentDidMount() {
    LocalAPI.get("/projects/user/current")
      .then( response => {
        this.setState({projects: response.data})
      }).catch( err => {
        console.log(err);
      })
  }

  render(){
    const { currentUser } = this.props;
    const { projects, notifications, posts } = this.state;

    return(
      <Row gutter={6}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Title level={3}>{projects.length > 1 && "Your Projects"}{projects.length === 1 && "Your Project"}</Title>
          <List
            dataSource={projects}
            renderItem={item => {
              return(
                <List.Item>
                  <List.Item.Meta 
                    title={item.name}
                  />
                </List.Item>
              );
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Title level={3}>Notifications</Title>
          <List
            dataSource={notifications}
            renderItem={item => {
              return(
                <List.Item>
                  <List.Item.Meta 
                    title={item.name}
                  />
                </List.Item>
              );
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Title level={4}>Your Posts</Title>
          <List
            dataSource={posts}
            renderItem={item => {
              return(
                <List.Item>
                  <List.Item.Meta 
                    title={item.name}
                  />
                </List.Item>
              );
            }}
          />
        </Col>
      </Row>
    )
  }
}

export default AdminDashboard;