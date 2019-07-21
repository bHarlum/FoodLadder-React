import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, List } from "antd";
import { Link } from "react-router-dom";

import LocalAPI from "./../../apis/local";
import ThreadCard from "./thread/ThreadCard";
import { Excerpt, Section } from "./../layout/Layout";

const { Search } = Input;

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
      <Section>
        <Row>
          <Col s={{ span: 24 }} md={{ span: 5 }} />
          <Col s={{ span: 24 }} md={{ span: 14 }}>
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
            <Search 
              placeholder="Search posts"
              enterButton
            />
            <Link to="forum/threads/new">
              <Button type="primary">
                <Icon type="plus" />
                Create a New Post
              </Button>
            </Link>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Forum;
