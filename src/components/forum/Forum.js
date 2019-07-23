import React, { Component } from 'react';
import { Row, Col, Button, Icon, List, Typography } from "antd";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";
import ThreadCard from "./thread/ThreadCard";
import { Excerpt, Section, FullPage } from "./../layout/app_styles";

const { Title } = Typography;

export class Forum extends Component {

  state = {
    threads: null,
  }

  async componentDidMount() {
    const getThreads = await LocalAPI.get('/threads');
    const threads = getThreads.data;
    this.setState({ threads });
  }

  render() {
    const { threads } = this.state;
    console.log(threads);
    return (
      <FullPage>
        <Section>
          <Row>
            <Col s={{ span: 24 }} md={{ span: 5 }} />
            <Col s={{ span: 24 }} md={{ span: 14 }}>
              <Title>Forum</Title>
              { threads && 
                <List 
                  dataSource={threads}
                  itemLayout="vertical"
                  renderItem={item => {
                    return(
                      <ThreadCard item={item}>
                        <Excerpt text={item.posts[0].body} />
                      </ThreadCard>
                    )
                  }}
                />
              }
            </Col>
            <Col s={{ span: 24 }} md={{ span: 5 }}>
              <Section>
                <Link to="forum/threads/new">
                  <Button type="primary">
                    <Icon type="plus" />
                    Create a New Post
                  </Button>
                </Link>
              </Section>
            </Col>
          </Row>
        </Section>
      </FullPage>
    );
  }
}

export default Forum;
