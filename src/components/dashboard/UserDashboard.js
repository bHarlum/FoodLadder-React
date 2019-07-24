import React, { Component } from "react";
import { List, Row, Col, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";
import { Section } from "./../layout/app_styles";

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
    const { projects, notifications, posts } = this.state;

    return(
      <Row gutter={6}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Section>
            <Title level={3}>{projects.length > 1 && "Your Projects"}{projects.length === 1 && "Your Project"}</Title>
            <List
              dataSource={projects}
              renderItem={item => {
                return(
                  <Link to={`/projects/${item._id}`}>
                    <List.Item>
                      <List.Item.Meta 
                        avatar={<Avatar size={64} shape="square">Project Image</Avatar>}
                        title={item.name}
                        description={`${item.address.state}, ${item.address.country}`}
                      />
                    </List.Item>
                  </Link>
                );
              }}
            />
          </Section>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Section>
            <Title level={3}>Notifications</Title>
            <List
              locale={{emptyText: `You have no notifications`}}
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
          </Section>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Section>
            <Title level={4}>Your Posts</Title>
            <List
              locale={{emptyText: `You haven't made any posts`}}
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
          </Section>
        </Col>
      </Row>
    )
  }
}

export default AdminDashboard;