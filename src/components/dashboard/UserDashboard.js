import React, { Component } from "react";
import { List, Row, Col, Typography, Avatar, message } from "antd";
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
        message.error("Error getting projects");
      });
    LocalAPI.get("/users/current")
      .then( response => {
        console.log(response);
        this.setState({
          notifications: response.data.notifications
        });
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
              renderItem={project => {
                const { _id, name, address } = project;
                let imageLink = undefined;
                if(project.files[0]) {
                  imageLink = <Avatar src={encodeURI(`${process.env.REACT_APP_API_URL}/files/export/${project.files[0].link}`)} shape="square" size={100}/>
                } else {
                  imageLink = <Avatar shape="square" size={100}>PROJECT IMAGE</Avatar>
                }
                return(
                  <Link to={`/projects/${_id}`}>
                    <List.Item>
                      <List.Item.Meta 
                        avatar={imageLink}
                        title={name}
                        description={`${address.state}, ${address.country}`}
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
                      title={item.category}
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