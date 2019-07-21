import React, { Component } from "react";
import { Card, Button, List, Typography, Col, Row, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";
import { Section, IconText } from "./../layout/Layout"

const { Title } = Typography;

class AdminDashboard extends Component {

  state = {
    projects: []
  }

  componentDidMount() {
    LocalAPI.get("/projects/")
      .then( response => {
        this.setState({projects: response.data})
      }).catch( err => {
        console.log(err);
      })
  }

  render(){
    const { projects } = this.state;
    return(
      <Row>
        <Col span={5}></Col>
        <Col span={14}>
          <Section>
            <Row>
              <Col span={12}>
                <h2>Projects</h2>
              </Col>
              <Col span={12}>
                <Link to="/projects/new">
                  <Button type="primary"><Icon type="plus" />Create New</Button>
                </Link>
              </Col>
            </Row>
            <List
              dataSource={projects}
              itemLayout="horizontal"
              locale={{emptyText: `There are no projects`}}
              renderItem={item => {
                const { name, reportDate, _id, activated } = item;
                return(
                  <Link to={`/projects/${_id}`}>
                    <Card>
                      <List.Item
                        actions={[
                          <IconText type="solution" text="12" />,
                          <IconText type="message" text="2" />,
                        ]}
                      >
                        <List.Item.Meta 
                          title={name}
                          description={`Next reporting date: ${reportDate}`}
                          avatar={<Avatar shape="square" size={100}>PROJECT IMAGE</Avatar>}
                        />
                        <h4>Activated?</h4>
                        { activated && 
                          <Icon type="check"/>
                        }{ !activated && 
                          <Icon type="close"/>
                        }
                      </List.Item>
                    </Card>
                  </Link>
                );
              }}
            />
            
          </Section>
        </Col>
        <Col span={5}></Col>
      </Row>
    )
  }
}

export default AdminDashboard;