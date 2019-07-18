import React, { Component } from 'react';
import { Row, Col, Typography, Card, Button, List } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";
import { setCurrentUser } from "./../../actions";
import { FullPage } from "./../layout/Layout";
import AdminDashboard from "./AdminDashboard";

const { Title } = Typography;

export class Dashboard extends Component {

  state = {
    projects: []
  }

  componentDidMount() {
    LocalAPI.get("/projects/user/current")
      .then( response => {
        this.setState({projects: response.data})
      }).catch( err => {
        console.log(err);
      })
  }

  render() {
    const { currentUser } = this.props;
    const { projects } = this.state;
    return (
      <FullPage>
        { currentUser.admin &&
          <AdminDashboard />
        }
        { currentUser.admin === false && 
          <Row gutter={6}>
            <Col xs={{ span: 24 }} md={{ span: 8 }}>
              <Title level={3}>Your Projects</Title>
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
